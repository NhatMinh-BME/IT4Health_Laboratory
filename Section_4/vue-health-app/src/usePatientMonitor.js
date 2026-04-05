import { ref, computed, onMounted } from 'vue'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase.js'

export function usePatientMonitor() {
    const heartRate = ref(72)
    const records = ref([])

    const zone = computed(() => {
        if (heartRate.value > 100) return 'High (Cardio)'
        if (heartRate.value > 60) return 'Normal (Resting)'
        return 'Low'
    })

    function increase() {
        heartRate.value += 5
    }

    function reset() {
        heartRate.value = 72
    }

    async function sendData() {
        try {
            await addDoc(collection(db, 'patients'), {
                heartRate: heartRate.value,
                time: new Date()
            })
            alert('Data sent to Firestore!')
        } catch (error) {
            console.error('Error adding document: ', error)
            alert('Error sending data')
        }
    }

    function startRealtimeListener() {
        onSnapshot(collection(db, 'patients'), (snapshot) => {
            records.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        })
    }

    onMounted(() => {
        startRealtimeListener()
    })

    return {
        heartRate,
        records,
        zone,
        increase,
        reset,
        sendData
    }
}
