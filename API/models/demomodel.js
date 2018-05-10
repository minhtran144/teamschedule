var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var demomodelschema = new Schema({
name:{
 type:String,
 required:false
},
description:{
 type:String,
 required:false
}
});

var BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    condition: String,
  });
  
  var demomodel = mongoose.model('demomodel', BookSchema,'bookstore18');
  
  var book1 = [{ name: 'Introduction to Mongoose', price: 20, quantity: 25, condition: 'good' },
  
  { name: 'Introduction to Python', price: 10, quantity: 25, condition: 'good' },

  { name: 'Introduction to Mongoose javascript', price: 10, quantity: 30, condition: 'good' },

  { name: 'Introduction to Mongoose Nodejs', price: 20, quantity: 30, condition: 'good' },

  { name: 'Introduction to JSON', price: 20, quantity: 30, condition: 'good' },

  ];
  
demomodel.collection.insert(book1, function (err, docs) {
  if (err){ 
      return console.error(err);
  } else {
    console.log("Multiple documents inserted to Collection");
  }
});

module.exports = demomodel;