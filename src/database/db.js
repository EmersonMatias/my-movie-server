import {MongoClient} from "mongodb"

const mongoClient = new MongoClient("mongodb+srv://mymovieserver:6Slrau3UKuou1jIT@cluster0.1lcgweb.mongodb.net/?retryWrites=true&w=majority")

try{
    await mongoClient.connect()
    console.log("MongoDB connected")
} catch(error){
    console.log(error)
}

const db = mongoClient.db("myMovie")
const usersCollection = db.collection("users")

export{
    usersCollection
}
