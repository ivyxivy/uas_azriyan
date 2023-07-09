<template>
  <div class="weather-widget">
    <h2 class="widget-title">Widget Cuaca</h2>
    <div class="location-input">
      <label for="location">Masukkan Lokasi:</label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData">Cari Cuaca</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Lokasi: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Suhu: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Deskripsi Cuaca: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Mencari Data Cuaca...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #DFD7BF;
  border-radius: 8px;
  max-width: 80%;
  margin-right: auto ;
  margin-left: auto;
}

.widget-title {
  margin-top: 0;
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.location-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
p{
  color: #000;
}
label {
  margin-right: 10px;
  font-size: 16px;
  color: #000;
}

input[type="text"] {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #b1b1b1;
}

button {
  padding: 8px 16px;
  background-color: #3F2305;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto 10px;
}
button:hover{
  background-color: #F2EAD3;
  color: black;
}

@media (max-width: 600px) {
  button {
    width: 100%;
  }
}

.weather-data {
  margin-top: 10px;
}

.location {
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
}

.temperature {
  font-size: 24px;
  color: #000;
  word-wrap: break-word;
}

.description {
  font-size: 16px;
  margin-top: 5px;
  color: #000;
  word-wrap: break-word;
}
</style>