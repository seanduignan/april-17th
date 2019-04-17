var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  tag: {type: String, required: true},
  gender: String,
  sire: String,
  breed: String,
  dob: String,
  due: String,
  pur: String,
  dos: String,
  sal: String
}, {collection: 'user-data'});
var UserData = mongoose.model('UserData', userDataSchema);

var userVetSchema = new Schema({
  tag1: {type: String, required: true},
  reason: String,
  vetname: String,
  cost: String,
  date: String
}, {collection: 'user-vetdata'});
var UserVetData = mongoose.model('UserVetData', userVetSchema);

var userFeedSchema = new Schema({
  qty: {type: String, required: true},
  price: String,
  supplier: String,
  type: String,
  date1: String
}, {collection: 'user-feeddata'});
var UserFeedData = mongoose.model('UserFeedData', userFeedSchema);

var userSupplySchema = new Schema({
  sup: {type: String, required: true},
  price2: String,
  date2: String
}, {collection: 'user-supplydata'});
var UserSupplyData = mongoose.model('UserSupplyData', userSupplySchema);


var userProfitSchema = new Schema({
  pro: {type: String, required: true}
}, {collection: 'user-profitdata'});
var UserProfitData = mongoose.model('UserProfitData', userProfitSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-profitdata', function(req, res, next) {

 UserVetData.find({ date: { $gt: new String('2019-01-01'), $lt: new String('2019-12-31') } })
     .then(function(doc) {
       var totalCost = 0;
       console.log("doc lengtht: " + doc.length);

        for(var ii = 0; ii < doc.length; ii++) {
          console.log("doc.cost: " + doc[ii].cost);
          totalCost += parseFloat(doc[ii].cost);
       }

        UserFeedData.find({ date1: { $gt: new String('2019-01-01'), $lt: new String('2019-12-31') } })
            .then(function(doc) {
              var totalCost2 = 0;
              console.log("doc length: " + doc.length);

               for(var iii = 0; iii < doc.length; iii++) {
                 console.log("doc.price: " + doc[iii].price);
                 totalCost2 += parseFloat(doc[iii].price);
               }

         UserSupplyData.find({ date2: { $gt: new String('2019-01-01'), $lt: new String('2019-12-31') } })
             .then(function(doc) {
               var totalCost3 = 0;
               console.log("doc length: " + doc.length);

                  for(var jj = 0; jj < doc.length; jj++) {
                    console.log("doc.price2: " + doc[jj].price2);
                    totalCost3 += parseFloat(doc[jj].price2);
                  }

                  UserData.find({ dos: { $gt: new String('2019-01-01'), $lt: new String('2019-12-31') } })
                      .then(function(doc) {
                        var totalCost4 = 0;
                        console.log("doc length: " + doc.length);

                           for(var jjj = 0; jjj < doc.length; jjj++) {
                             console.log("doc.pur: " + doc[jjj].pur);
                             totalCost4 += parseFloat(doc[jjj].pur);
                           }

                             var totalCost5 = 0;
                             console.log("doc length: " + doc.length);

                                for(var kk = 0; kk < doc.length; kk++) {
                                  console.log("doc.sal: " + doc[kk].sal);
                                  totalCost5 += parseFloat(doc[kk].sal);
                                }

UserVetData.find( { date: { $gt: new String('2018-01-01'), $lt: new String('2018-12-31') } } )
      .then(function(doc) {
        var totalCost9 = 0;
        console.log("doc lengtht: " + doc.length);

         for(var ii = 0; ii < doc.length; ii++) {
           console.log("doc.cost: " + doc[ii].cost);
           totalCost9 += parseFloat(doc[ii].cost);
        }
        UserFeedData.find({ date1: { $gt: new String('2018-01-01'), $lt: new String('2018-12-31') } })
            .then(function(doc) {
              var totalCost29 = 0;
              console.log("doc length: " + doc.length);

               for(var iii = 0; iii < doc.length; iii++) {
                 console.log("doc.price: " + doc[iii].price);
                 totalCost29 += parseFloat(doc[iii].price);
               }
               UserSupplyData.find({ date2: { $gt: new String('2018-01-01'), $lt: new String('2018-12-31') } })
                   .then(function(doc) {
                     var totalCost39 = 0;
                     console.log("doc length: " + doc.length);

                        for(var jj = 0; jj < doc.length; jj++) {
                          console.log("doc.price2: " + doc[jj].price2);
                          totalCost39 += parseFloat(doc[jj].price2);
                        }

                        UserData.find({ dos: { $gt: new String('2018-01-01'), $lt: new String('2018-12-31') } })
                            .then(function(doc) {
                              var totalCost49 = 0;
                              console.log("doc length: " + doc.length);

                                 for(var jjj = 0; jjj < doc.length; jjj++) {
                                   console.log("doc.pur: " + doc[jjj].pur);
                                   totalCost49 += parseFloat(doc[jjj].pur);
                                 }

                                   var totalCost59 = 0;
                                   console.log("doc length: " + doc.length);

                                      for(var kk = 0; kk < doc.length; kk++) {
                                        console.log("doc.sal: " + doc[kk].sal);
                                        totalCost59 += parseFloat(doc[kk].sal);
                                      }


       res.render('index7', {totalProfit: totalCost, totalProfit2: totalCost2,
         totalProfit3: totalCost3, totalProfit4: totalCost4, totalProfit5: totalCost5,
         totalSpentAll: totalCost+totalCost2+totalCost3+totalCost4, totalNum: totalCost5-(totalCost+totalCost2+totalCost3+totalCost4),
         totalProfit9: totalCost9, totalProfit29: totalCost29,
           totalProfit39: totalCost39, totalProfit49: totalCost49, totalProfit59: totalCost59,
           totalSpentAll9: totalCost9+totalCost29+totalCost39+totalCost49, totalNum9: totalCost59-(totalCost9+totalCost29+totalCost39+totalCost49) });
       //res.render('index', {totalProfit2: totalCost2});
        });
      });
    });
  });
});
});
});
});
});



router.get('/removeupdate', function(req, res, next) {
  res.render('index6');
});

router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('index2', {items: doc});
      });
});


router.get('/get-vetdata', function(req, res, next) {
  UserVetData.find()
      .then(function(doc) {
        //console.log("vetdata length: " + doc.length);
        res.render('index3', {units: doc});
      });
});


router.get('/get-feeddata', function(req, res, next) {
  UserFeedData.find()
      .then(function(doc) {
        res.render('index4', {amounts: doc});
      });
});

router.get('/get-supplydata', function(req, res, next) {
  UserSupplyData.find()
      .then(function(doc) {
        res.render('index5', {objects: doc});
      });
});


router.get('/get-profitdata', function(req, res, next) {
  UserProfitData.find()
      .then(function(doc) {
        res.render('index7', {profits: doc});
      });
});


router.post('/insert', function(req, res, next) {
  var item = {
    tag: req.body.tag,
    gender: req.body.gender,
    sire: req.body.sire,
    breed: req.body.breed,
    dob: req.body.dob,
    due: req.body.due,
    pur: req.body.pur,
    sal: req.body.sal
  };

  var data = new UserData(item);
  data.save();

  res.redirect('/');
});


router.post('/insertvet', function(req, res, next) {
  var unit = {
    tag1: req.body.tag1,
    reason: req.body.reason,
    vetname: req.body.vetname,
    cost: req.body.cost,
    date: req.body.date
  };

  var vetdata = new UserVetData(unit);
  vetdata.save();

  res.redirect('/');
});

router.post('/insertfeed', function(req, res, next) {
  var amount = {
    qty: req.body.qty,
    price: req.body.price,
    supplier: req.body.supplier,
    type: req.body.type,
    date1: req.body.date1
  };

  var feeddata = new UserFeedData(amount);
  feeddata.save();

  res.redirect('/');
});


router.post('/insertsupply', function(req, res, next) {
  var object = {
    sup: req.body.sup,
    price2: req.body.price2,
    date2: req.body.date2
  };

  var supplydata = new UserSupplyData(object);
  supplydata.save();

  res.redirect('/');
});

router.post('/insertprofit', function(req, res, next) {
 var profit = {
    totalCost: req.body.totalCost
  };

  var supplydata = new UserSupplyData(object);
  supplydata.save();

  res.redirect('/');
});



router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.tag = req.body.tag;
    doc.gender = req.body.gender;
    doc.sire = req.body.sire;
    doc.breed = req.body.breed;
    doc.dob = req.body.dob;
    doc.due = req.body.due;
    doc.pur = req.body.pur;
    doc.dos = req.body.dos;
    doc.sal = req.body.sal;
    doc.save();
  })
  res.redirect('/removeupdate');
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  UserVetData.findByIdAndRemove(id).exec();
  UserFeedData.findByIdAndRemove(id).exec();
  UserSupplyData.findByIdAndRemove(id).exec();
  res.redirect('/removeupdate');
});


module.exports = router;
