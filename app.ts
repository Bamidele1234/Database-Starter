
import express from 'express';
import mongoose from 'mongoose';

const app = express();

const databaseName = 'Coding_Boot_Camp'

const uri = `mongodb+srv://Bamidele_Ajewole:Bamidele1234@default.w3fv2mc.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const { Schema } = mongoose;

const courseSchema = new Schema({
    name : { type : String, required : true},
    author : String,
    tags : [ String ],
    date : { type : Date , default : Date.now },
    isPublished : Boolean
})

const Course = mongoose.model('Course', courseSchema);

const createCourse = async (): Promise<void> => {

    // Connect to MongoDB
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');


    const course = new Course({
        // name: 'NodeJS course',
        author: 'Mosh',
        tags: ['node', 'backend'],
        isPublished: true,
    });

    try {

        await course.validate();

        // const result = await course.save();
        // console.log('Course saved successfully:', result);
    } catch (error) {
        console.error('Error saving course:', error);
    } finally {
        await mongoose.connection.close();

        console.log('Successfully closed connection');
    }
};

const getCourses = async (): Promise<void> => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');

        /// Comparison query operators
        // eq (equal)
        // ne (not equal)
        // gt (greater than)
        // gte (greater than or equal to)
        // lt (less than)
        // lte (less than or equal to )
        // in
        // nin (not in)

        /// Logical query operators
        // or
        // and

        // Regex

        const courses = await Course
            //.find({ author: 'Mosh', isPublished: true })
            //.find({ price : { $gte : 10, $lte : 20 } })
            //.find({ price : { $in : [10, 15, 20] } })
            //.find()
            //.or([ { author: 'Mosh' }, { isPublished: true } ])

            // Starts with Mosh
            .find({ author: /^Mosh/ })

            // Ends with Hamedani
            .find({ author: /Hamedin$/i })
        
            // Contains mosh    
            .find({ author: /.*Mosh.*/ })

            .limit(10)
            .sort({ name: 1 })
            .select({ name: 1, tags: 1 });

        console.log(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
    } finally {
        mongoose.connection.close();
        console.log('Connection closed');
    }
}

// getCourses();

// Call the createCourse function
 createCourse();

