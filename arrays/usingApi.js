// Function to perform GET request
async function getData() {
    try {
      const response = await fetch('https://clubandevent.onrender.com/api/v1/club');
      const data = await response.json();
      // Process the retrieved data here
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Function to perform POST request
  async function addData(newData) {
    try {
      const response = await fetch('https://clubandevent.onrender.com/api/v1/club', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      const data = await response.json();
      console.log('Data added:', data);
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }
  
  // Function to perform PUT request for updating existing data
  async function updateData(id, updatedData) {
    try {
      const response = await fetch(`your_api_endpoint/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      const data = await response.json();
      console.log('Data updated:', data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }
  
  // Function to perform DELETE request
  async function deleteData(id) {
    try {
      const response = await fetch(`your_api_endpoint/${id}`, {
        method: 'DELETE'
      });
      console.log('Data deleted:', response.status === 204 ? 'Successfully' : 'Failed');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }
  
  //getData();
  //  newData={
  //   'name':'IIC',
  //  };
  //  addData(newData);
  getData();
