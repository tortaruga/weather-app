exports.handler = async(e) => {
    const key = process.env.APY_KEY;
    const city  = e.queryStringParameters.city;
    
    if (!city) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing city parameter" })
        }
    }

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(city)}&aqi=no`);
    const data = await response.json();

    return {
    statusCode: 200,
    body: JSON.stringify(data),
  };

}