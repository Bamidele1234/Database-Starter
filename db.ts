import mongoose from 'mongoose';

export const connectToDatabase = async (databaseName: string) => {
  try {
    const uri = `mongodb+srv://Bamidele_Ajewole:Bamidele1234@default.w3fv2mc.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Handle the error as needed, e.g., throw it, log it, etc.

    // throw;
  }
};

export const closeConnection = async (): Promise<void> => {
  try {
      await mongoose.connection.close();

      console.log('Successfully closed connection');

  }catch(err){
      console.error(`Resolved with an error ${err}`);
  }
}

