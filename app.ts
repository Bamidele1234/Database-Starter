import express from 'express';
import { connectToDatabase, closeConnection } from './db';
import { createCourse, getCourses, getCourse } from './controllers/courseController';

const app = express();
const databaseName = 'Mongo-Data_Validation';


const executeOperations = async () => {
    try {
      await connectToDatabase(databaseName);
      
      //await createCourse();

      await getCourse();
  
      // Perform additional operations if needed
  
      await closeConnection();

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  // Call the function to start the sequence of operations
  executeOperations();
  
