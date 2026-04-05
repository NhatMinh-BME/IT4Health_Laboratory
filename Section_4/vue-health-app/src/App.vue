<script setup>
import { usePatientMonitor } from './usePatientMonitor.js'

const {
  heartRate,
  records,
  zone,
  increase,
  reset,
  sendData
} = usePatientMonitor()
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Patient Monitor</h1>
      <p class="subtitle">Real-time Health Monitoring System</p>
    </header>

    <div class="dashboard-content">
      <div class="main-panel">
        <div class="vital-signs">
          <div class="vital-card heart-rate">
            <h3>Heart Rate</h3>
            <div class="reading">
              <span class="value">{{ heartRate }}</span>
              <span class="unit">BPM</span>
            </div>
            <div class="status">{{ zone }}</div>
          </div>

          <div class="controls">
            <button @click="increase" class="btn-primary">Increase Rate</button>
            <button @click="reset" class="btn-secondary">Reset</button>
            <button @click="sendData" class="btn-success">Send to Cloud</button>
          </div>
        </div>

        <div class="records-panel">
          <h3>Patient Records</h3>
          <div class="records-list">
            <div v-if="records.length === 0" class="no-records">
              No records found. Click "Send to Cloud" to add data.
            </div>
            <div v-else class="record-item" v-for="(record, index) in records" :key="index">
              <div class="record-data">
                <span class="record-value">{{ record.heartRate }} BPM</span>
                <span class="record-time">{{ new Date(record.time.seconds * 1000).toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dashboard-header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 300;
}

.subtitle {
  margin: 10px 0 0 0;
  opacity: 0.9;
  font-size: 1.1rem;
}

.dashboard-content {
  display: flex;
  gap: 30px;
}

.main-panel {
  flex: 1;
}

.vital-signs {
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.heart-rate {
  text-align: center;
  margin-bottom: 25px;
}

.heart-rate h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.reading {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 10px;
}

.value {
  font-size: 4rem;
  font-weight: bold;
  color: #e74c3c;
  margin-right: 10px;
}

.unit {
  font-size: 1.5rem;
  color: #7f8c8d;
  font-weight: 500;
}

.status {
  font-size: 1.1rem;
  color: #27ae60;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background: #7f8c8d;
  transform: translateY(-2px);
}

.btn-success {
  background: #27ae60;
  color: white;
}

.btn-success:hover {
  background: #229954;
  transform: translateY(-2px);
}

.records-panel {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.records-panel h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.records-list {
  max-height: 400px;
  overflow-y: auto;
}

.record-item {
  padding: 15px;
  border-bottom: 1px solid #ecf0f1;
  transition: background-color 0.2s ease;
}

.record-item:hover {
  background-color: #f8f9fa;
}

.record-item:last-child {
  border-bottom: none;
}

.record-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.record-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
}

.record-time {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.no-records {
  text-align: center;
  color: #7f8c8d;
  font-style: italic;
  padding: 40px 20px;
}

/* Responsive design */
@media (max-width: 768px) {
  .dashboard {
    padding: 10px;
  }

  .dashboard-header h1 {
    font-size: 2rem;
  }

  .value {
    font-size: 3rem;
  }

  .controls {
    flex-direction: column;
  }

  button {
    width: 100%;
  }

  .record-data {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}
</style>