'use strict';
var mongoose = require('mongoose');
var TeamInfo = mongoose.model('TeamInfo');
var GameSchedule = mongoose.model('GameSchedule');
var demomodel = mongoose.model('demomodel');

exports.processRequest = function(req, res) {
    if (req.body.result.action == "schedule") {
        getTeamSchedule(req,res)
      }
      else if (req.body.result.action == "tell.about")
      {
          getTeamInfo(req,res)
      }
      else if (req.body.result.action == "book")
      {
          getdemomodel(req,res)
    };

function getTeamInfo(req,res) {
    let teamToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.team ? req.body.result.parameters.team : 'Unknown';
    TeamInfo.findOne({name:teamToSearch},function(err,teamExists)
          {
            if (err)
            {
              return res.json({
                  speech: 'Something went wrong!',
                  displayText: 'Something went wrong!',
                  source: 'team info'
              });
            }
    if (teamExists)
            {
              return res.json({
                    speech: teamExists.description,
                    displayText: teamExists.description,
                    source: 'team info'
                });
            }
            else {
              return res.json({
                    speech: 'Currently I am not having information about this team',
                    displayText: 'Currently I am not having information about this team',
                    source: 'team info'
                });
            }
            
          });
};

function getTeamSchedule(req,res){
    let teamToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.team ? req.body.result.parameters.team : 'Unknown';
    TeamInfo.findOne({name:teamToSearch},function(err,teamExists){

    return  res.json({
            speech: 'hello',
            displayText: 'hi',
            source: 'team info'
        })
    });
};

function getdemomodel(req,res) {
    
   /* var BookSchema1 = mongoose.Schema({
        name: String,
        price: Number,
        quantity: Number
      });
      
      var Bookie = mongoose.model('Bookie', BookSchema1,'bookstore14');
      
      var book1 = new Bookie({ name: 'Introduction to Mongoose (bookstore14)', price: 10, quantity: 25 });
      
      book1.save(function (err, bookie) {
        if (err) return console.error(err);
        console.log(bookie.name + " saved to bookstore collection.");
      });
      */
        let bookname = req.body.result.parameters.bookname;

        demomodel.findOne({name:bookname},function(err,teamExists){

        return  res.json({
                speech: teamExists.quantity,
                displayText: 'We have in total '+ teamExists.quantity,
                source: 'Library'
            })
        });

}
};
