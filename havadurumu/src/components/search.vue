<template>
    <div id='search'> 
        <b-form-input :value="cityName" @keyup="autocomplete"/>
        <div id='autocompleteList'>
            <b-list-group>
                <b-list-group-item v-for="city in cityList" :key="city.id" @click="()=>setSelectedCity(city)"> <!-- best practise-->
                    {{ city.name }}
                </b-list-group-item>
            </b-list-group>
        </div>
     </div>
</template>


<script>
export default {
    data(){
        return {
         
        }
    },
   computed:{
        cityName(){ return this.$store.state.selectedCityName?.name},
        cityList(){ return this.$store.state.cityList}
    },
    methods:{
        autocomplete(e){
            console.log(e)
            //dispatch kullanarak action çağırıyoruz
                this.$store.dispatch('fetchCityName', e.target.value)
            
        },
        setSelectedCity(cityModel){
            //dispatch kullanarak action çağırıyoruz
                this.$store.dispatch('getSelectedCityModel', cityModel)
            
        }
    }
}
</script>

<style scoped>
#autocompleteList{
    position: relative;
}
/*#autocompleteList .list-group {
    position: absolute;
    width: 100%;
    max-height: 80vh;
    height: 500px;
    overflow: auto;
    cursor:pointer;
}*/
</style>