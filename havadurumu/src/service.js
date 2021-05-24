const baseUrl = process.env.VUE_APP_BASE_URL;
const apiKey = process.env.VUE_APP_API_KEY;


export const fetchWeather = async ({cityId,units}) => {
    console.log(baseUrl, apiKey);
    if(!cityId) throw Error('"cityId" is required');
    const response = await fetch(`${baseUrl}/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=${units}&lang=tr`)
    // eslint-disable-next-line no-debugger
    debugger
    return await response.json()
  };
  
