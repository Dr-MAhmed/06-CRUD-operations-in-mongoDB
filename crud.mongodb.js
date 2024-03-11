//CRUD Operations in mongoDB..
use("crudDB");

// Create Operation
db.createCollection('intercourse');
db.intercourse.insertOne({
    name: "Hunnys free web dev courses",
    price: 0,
    assignments: 12,
    projects: 45
});

db.intercourse.insertMany([
    {
      "name": "Hunnys free web dev courses",
      "price": 0,
      "assignments": 12,
      "projects": 45
    },
    {
      "name": "Advanced JavaScript",
      "price": 29.99,
      "assignments": 15,
      "projects": 20
    },
    {
      "name": "Python for Data Science",
      "price": 49.99,
      "assignments": 10,
      "projects": 30
    },
    {
      "name": "Machine Learning Fundamentals",
      "price": 99.99,
      "assignments": 20,
      "projects": 25
    }
  ]);

// Read Operation
let a = db.intercourse.find({price: 0});
console.log(a);
let b = db.intercourse.findOne({price: 29.99});
console.log(b);

// Update Operation
db.intercourse.updateOne({price: 0}, {$set:{price: 100}});
db.intercourse.updateMany({price: 0}, {$set:{price: 1000}});

// Delete Operation
db.intercourse.deleteOne({price: 100});
db.intercourse.deleteMany({price: 1000});