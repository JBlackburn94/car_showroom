export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': process.env.CARS_API_KEY,
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers = headers
    }),

    const result = await response.json();
}