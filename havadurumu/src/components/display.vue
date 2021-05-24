<template>
    <div>
    <b-form-group label="Unit">
      <b-form-radio name="unit" @change="filterMetric('metric') ">metric</b-form-radio>
      <b-form-radio name="unit" @change="filterMetric('standart')">standart</b-form-radio>
    </b-form-group>

    <pre v-if="false">
        <code>
        {{ {
  "coord": {
    "lon": 32.8333,
    "lat": 39.9167
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "az bulutlu",
      "icon": "02d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 73.2,
    "feels_like": 71.64,
    "temp_min": 71.94,
    "temp_max": 74.32,
    "pressure": 1015,
    "humidity": 30
  },
  "visibility": 10000,
  "wind": {
    "speed": 8.01,
    "deg": 351,
    "gust": 10
  },
  "clouds": {
    "all": 20
  },
  "dt": 1621776990,
  "sys": {
    "type": 2,
    "id": 267643,
    "country": "TR",
    "sunrise": 1621736842,
    "sunset": 1621789427
  },
  "timezone": 10800,
  "id": 323784,
  "name": "Ankara",
  "cod": 200
} }}
</code>
</pre>
    <div v-if="cityData">
      <div class="time-stamp">
          {{ cityData.dt | time }}
      </div>
      <h1 class="location">{{ cityData.name }}, {{ cityData.sys.country }}</h1>
      <div class="temperature"> <span>
          <img :src="`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`" alt="">
          </span> {{ cityData.main.temp }} {{ tempSymbol }}</div>
          <div>Hissedilen {{cityData.main.feels_like}} {{ tempSymbol }}. {{ cityData.weather[0].description }}</div>
<!--dom eklemeden verileri koşula bağlamak istiyorsak <template></template> kullanabiliriz-->
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        cityData(){
            return this.$store.state.selectedCityData
        },
        selectedUnit(){
            return this.$store.state.units;
        },
        tempSymbol() {
            let symbol = "";
                  // eslint-disable-next-line no-debugger
            debugger
            if (this.$store.state.units === "metric") symbol = "C";
            else if (this.units === "standard") symbol = "K";
            else if (this.units === "imperial") symbol = "F";
            return symbol;
        },
    },
    methods:{
        filterMetric(types){
            this.$store.dispatch("getMetric",types);
        }
    },
    //state'lere filter'dan erişemiyoruz.
    // O yüzden filter kullanmamız gerekiyor computed yerine
    filters:{
      time(time){
          return new Date(time* 1000).toLocaleString()
      }
  }
}
</script>