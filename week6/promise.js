// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation (e.g., API call, file reading)
//     const success = true;
  
//     if (success) {
//       // Resolve the promise if the operation is successful
//       resolve('Operation successful');
//     } else {
//       // Reject the promise if there's an error
//       reject('Operation failed');
//     }
//   });

const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an API call
      setTimeout(() => {
        const data = { username: 'john_doe', email: 'john@example.com' };
        resolve(data);
      }, 2000);
    });
  };
  
  const displayUserData = (userData) => {
    console.log(`Username: ${userData.username}, Email: ${userData.email}`);
  };
  
  fetchUserData()
    .then(displayUserData)
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
  
  