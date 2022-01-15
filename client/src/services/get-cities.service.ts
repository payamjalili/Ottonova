export default function getCities(): Promise<any> {
  return fetch('http://localhost:5000/cities', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.cities;
    })
    .catch((error) => {
      console.error(error);
    });
}
