import Vue from 'vue'
import Vuex from 'vuex'
import cityListData from "./city.list.json";
import {fetchWeather} from "./service"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cityName: "",
    cityList: [],
    selectedCityName: null,
    selectedCityData: null,
    units: 'metric'
  },
  //datayı aldığımız yer.
  //action içinde asenkron çağırabiliyoruz.
  actions: {
    fetchCityName(context, payload) {
      let cityList = [];
      if (payload.length > 2) {
        cityList = cityListData.filter((city) => {
          return city.name.toLowerCase().startsWith(payload.toLowerCase());
        });
      }
      //commit kullanarak mutation'ları çağırıyoruz
      context.commit("setCities", cityList);
    },
    getMetric(context,payload){
        context.commit("setMetric",payload);
      // eslint-disable-next-line no-debugger
      debugger;
        if(context.state.selectedCityName !=null){
            context.dispatch('fetchCity');
        }
    },


      //commit diyerek ilk parametre hangi fonksiyona gideceğini,ikinci parametre fonksiyona gönderdiğimiz datayı belirtiyor
      //action'ın ilk parametresi dispatch, commit gibi fonksiyonları içinde bulunduran parametre oluyor
      //ilk parametre bir obje.
      //async işlem yapılacaksa sadece action'larda yapılmalıdır.

      getSelectedCityModel(context,payload){
      context.commit("setSelectedCityModel",payload)
      context.commit("setCities", []);
      context.dispatch('fetchCity');
    },
    async fetchCity(context) {
      const { selectedCityName,units } = context.state;
      const { id } = selectedCityName;
      // eslint-disable-next-line no-debugger
      debugger;
      const data = await fetchWeather({ cityId: id,units});
      context.commit("setCityData", data);
    },
  },
  // Mutation'lar asenkron çalışır.
  //State'i değişitirir.
  mutations: {
    setCityName(state, payload) {
      state.cityName = payload;
    },
    setCities(state, payload) {
      state.cityList = payload;
    },
    setSelectedCityModel(state,payload){
        state.selectedCityName = payload
        console.log(state.selectedCityName)
    },
    setCityData(store, payload) {
        store.selectedCityData = payload;
    },
    setMetric(state,payload){
        state.units = payload;
        console.log(state.units)
    }
  },
  //computed'a benzer
  //değişen state'i ekrana basar
  getters: {},

})

export default store