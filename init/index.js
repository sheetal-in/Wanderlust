const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was saved");
};

async function start() {
    try {
        await main();
        await initDB();
    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.connection.close();
    }
}

start();