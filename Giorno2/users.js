const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDBs', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//count logged in users
let logged = 0;
for (const chiave in users){
    if(users[chiave].isLoggedIn) logged++;
}

let master = 0;
//count users having >= 50 points
for (const chiave in users){
    if(users[chiave].points==50) master++;
}

//find people who are MERN stack developer
//MongoDB
//Express
//React
//Node

let mern = []
for (const chiave in users){
    let flag = 0;
    if(users[chiave].skills.includes("MongoDB")) flag++;
    if(users[chiave].skills.includes("Express")) flag++;
    if(users[chiave].skills.includes("React")) flag++;
    if(users[chiave].skills.includes("Node")) flag++;
    if(users[chiave].skills.includes("Node.js")) flag++;
    if (flag == 4) mern.push(chiave)
}
console.log(mern)

// //set your name in the users object
// users.Marius = {
//     email: 'marius@marius.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 28,
//       isLoggedIn: true,
//       points: 33
// }