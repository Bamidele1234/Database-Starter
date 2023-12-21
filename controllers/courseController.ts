import Course from '../models/course';

export const createCourse = async () => {
  try {
    const course = new Course({
      name: 'Angular Course',
      category: 'web',
      author: 'Mosh', 
      tags: ['web-dev'],
      price: 23.44,
    });

    const result = await course.save();

    console.log('Course saved successfully:', result);
  } catch (error : any) {

    for( const field in error.errors){
      console.log(error.errors[field].message);
    }

    // console.error('Error saving course:', error.errors.);
  }
};

export const  getCourse = async() : Promise<void> => {
  try {
      // const course = await Course
      //     .find({ isPublished: true, tags: { $in: ['backend'] } })
      //     .sort({ name: 1 })
      //     .select({ name: 1, author: 1 });

      // const query  = await Course
      //     .find({ isPublished : true })
      //     .sort({ price: -1})
      //     .select({ name : 1, author: 1, price: 1});

      // const query  = await Course
      //     .find()
      //     .or([ 
      //         { name: /.*by.*/i }, { price : { $gte : 15 } } 
      //     ]);        
  
      //console.log(`The filtered out courses are \n ${query}`);

      const course = await Course
          .find({ _id: '6584b830c5552c90f2779fd8' })
          .sort({ name: 1 })
          .select({ name: 1, tags: 1 , price: 1});
          

      console.log(`The rounded off price is ${course[0].price}`);
      
  }catch(err){
      console.error('Error fetching courses:', err);
  }finally{
      console.log('Completed operation')
  }
}

export const getCourses = async () => {
  try {
    const courses = await Course
      .find({ author: /^Mosh/ })
      .limit(10)
      .sort({ name: 1 })
      .select({ name: 1, tags: 1 });

    console.log(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};