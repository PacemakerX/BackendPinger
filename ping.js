const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.BACKEND_URL; // Replace with your backend URL

async function pingServer() {
  try {
    const response = await axios.get(URL);
    console.log(`Ping successful at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error(`Error pinging the server: ${error.message}`);
  }
}

// Ping the server every 5 minutes (300,000 ms)
setInterval(pingServer, 300000);
