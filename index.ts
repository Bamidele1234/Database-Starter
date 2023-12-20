import express from 'express';
import mongoose from 'mongoose';

const app = express();

const uri = "mongodb+srv://Bamidele_Ajewole:Bamidele1234@default.w3fv2mc.mongodb.net/?retryWrites=true&w=majority";

const { Schema } = mongoose;

async function connect(){
    try {
        await mongoose.connect(uri);

        console.log('Connected to MongoDB');

    }catch(err){
        console.error(`Resolved with an error ${err}`);
    }
}

connect();

app.listen(8000, () => {
    console.log('Server started at port 8000');
})