import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: { 
    type: String, 
    required: true,
    minLength: 5, 
    maxLength: 255,
    // match: /pattern/
  },

  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'network'],
    lowercase: true, // Automatically converts this to lowercase
    trim: true,
  },
  author: String,

  // The tags property should be a string 
 // tags: [String]

 // Every course chould have at least 1 tag
  tags: {
    type : Array,
    validate : {

      isAsync : true,
      
      validator: function (v: string[]): Promise<boolean> {

        return new Promise((resolve) => {

          setTimeout(() => {

            const result = v && v.length > 0;
            resolve(result);

          }, 1);

        });

      },
      

      message: 'A course should have at least 1 tag'
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function (this: { isPublished: boolean }) {
      return this.isPublished;
    },
    min: 10, 
    max: 200,  
    set : (v: number) => Math.round(v), // Set data in the database
    get : (v: number) => Math.round(v), // Get data from the database

  },
});


const Course = mongoose.model('Course', courseSchema);

export default Course;


