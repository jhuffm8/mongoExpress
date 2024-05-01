import {MongoClient} from 'mongodb'

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient('mongodb+srv://jhuffm8:Moreheadstate8@cluster0.m3kywd1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

let conn;

try {
   conn = await client.connect()
   console.log('Connected to MongoDB')
}catch (err){
    consolerr.log(err)
}

let db = conn.db('sample_training')

export default db