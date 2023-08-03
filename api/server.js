const express = require("express");
const cors = require("cors");
const { Client, Databases } = require("node-appwrite");
require("dotenv").config();

const endpoint = process.env.DATABASE_END_POINT;
const projectId = process.env.DATABASE_PROJECT_ID;
const apiKey = process.env.DATABASE_API_KEY;
const database = process.env.DATABASE_ID;
const categoriesCollection = process.env.DATABASE_CATEGORIES_COLLECTION_ID;
const trendingCollection = process.env.DATABASE_TRENDING_COLLECTION_ID;
const menCollection = process.env.DATABASE_MEN_COLLECTION_ID;
const womenCollection = process.env.DATABASE_WOMEN_COLLECTION_ID;
const kidsCollection = process.env.DATABASE_KIDS_COLLECTION_ID;
const beautyCollection = process.env.DATABASE_BEAUTY_COLLECTION_ID;
const fitnessCollection = process.env.DATABASE_FITNESS_COLLECTION_ID;
const electronicsCollection = process.env.DATABASE_ELECTRONICS_COLLECTION_ID;

// Use the environment variables in your code

const app = express();

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId) // Your project ID
  .setKey(apiKey); // Your secret API key

// Enable CORS for the Appwrite endpoint
app.use(cors());

const databases = new Databases(client);

// Example route to make a request to Appwrite and fetch documents from the "categories" collection
app.get("/categories", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(database, categoriesCollection);
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});
app.get("/trending", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(database, trendingCollection);
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});
app.get("/men", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(database, menCollection);
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});
app.get("/women", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(database, womenCollection);
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});
app.get("/kids", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(database, kidsCollection);
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});
app.get("/beauty", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(database, beautyCollection);
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});
app.get("/fitness", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(database, fitnessCollection);
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});
app.get("/electronics", async (req, res) => {
  try {
    // Fetch data from the "categories" collection
    let promise = await databases.listDocuments(
      database,
      electronicsCollection
    );
    res.json(promise.documents);
    console.log(promise);
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data from the collection",
      errorDetails: error,
    });
  }
});

const port = 3000; // Your desired port number

app.get("/", (req, res) => {
  res.send("Hello, Appwrite!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
