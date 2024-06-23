// 5.Fetch Api Datausing Axios
// //Problem statement
// In a Node.js project, you need to fetch data from an API using the axios package. This package allows asynchronous HTTP requests in Node.js and simplifies the process of making API calls.

// In this scenario, you'll use axios to fetch data from the https://api.codingninjas.com/api/v3/event_tags API endpoint.




// Objectives

// i) Install the axios package using npm.
// ii) Make an HTTP GET request to the given API endpoint using axios to print the data as displayed in the expected output.
// iii) Retrieve the response data.
// iv) Print the response to the console as shown in the expected output section.

// Note:
// Ensure that you have the axios package installed in your Node.js project before proceeding.
// Make use of asynchronous programming techniques while fetching data using axios.
// Documentation and usage guide for axios: https://rapidapi.com/guides/axios-async-await


// Expected Output

// Print on the console whatever response is received after making a GET request at 'https://api.codingninjas.com/api/v3/event_tags'.



const Solution = async () => {
  const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
};
Solution();
module.exports = Solution;


