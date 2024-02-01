
const apiKey = 'your-api-key';
const startCoordinates = '8.681495,49.41461'; 
const endCoordinates = '8.687872,49.420318';
fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=your-api-key&start=8.681495,49.41461&end=8.687872,49.420318`)
  .then(response => response.json())
  .then(data => {
    console.log('Route Information:', data);
  })
  .catch(error => {
    console.error('Error fetching route information:', error);
  });
