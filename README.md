
# Node.js and MongoDB Course Exercise

## Description

This is a sample Node.js project that demonstrates basic interactions with MongoDB using the Mongoose library. The project includes functionality for connecting to a MongoDB database, creating a course, and fetching courses with various query operators.

## Prerequisites

- Node.js installed
- MongoDB installed or access to a MongoDB Atlas cluster
- npm package manager

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Update the MongoDB URI in the `index.ts` file:

   ```typescript
   const uri = 'YOUR_MONGODB_URI';
   ```

## Usage

### Create a Course

Run the following command to create a course:

```bash
npm run create-course
```

### Get Courses

Run the following command to fetch courses:

```bash
npm run get-courses
```

## Query Operators

The project showcases various MongoDB query operators for filtering courses. You can modify the query operators in the `getCourses` function in `index.ts` to see different results.

- **Comparison Operators**
  - `eq` (equal)
  - `ne` (not equal)
  - `gt` (greater than)
  - `gte` (greater than or equal to)
  - `lt` (less than)
  - `lte` (less than or equal to)
  - `in`
  - `nin` (not in)

- **Logical Operators**
  - `or`
  - `and`

- **Regular Expression (Regex) Operators**
  - `^` (starts with)
  - `$` (ends with)
  - `.*` (contains)
