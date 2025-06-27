export async function handler(e) {
    const key = process.env.API_KEY; 
    const city  = e.queryStringParameters.city; 

    if (!city) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing city parameter" })
        }
    }

    if (!key) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing key" })
        }
    }

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(city)}&aqi=no`);
    const data = await response.json();

    return {
    statusCode: 200,
    body: JSON.stringify(data),
  };

} 