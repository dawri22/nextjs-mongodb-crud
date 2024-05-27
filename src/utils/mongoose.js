import {connect, connection} from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB() {

    if(connect.isConnected) return;

    const db = await connect('mongodb://localhost:27017/crud');
    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState
}

connection.on('connected', () => {
    console.log('Mongo db is connected');
})

connection.on('error', (err) => {
    console.log('Mongo db error', err);
})