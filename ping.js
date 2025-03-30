const axios = require("axios");

const URL = "https://your-backend-url.onrender.com"; // Replace with your backend URL

async function pingServer() {
  try {
    const response = await axios.get(URL);
    console.log(`✅ Ping successful at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error(`❌ Error pinging the server: ${error.message}`);
  }
}

pingServer(); // Just ping once when GitHub runs this script
