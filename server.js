
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var port = process.env.PORT || 8080;
var router = express.Router();
var Fortune = require('./models/fortune');
var path = require('path');

app.set('views', './views/');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/fortunes'); // connect to our database        
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB connection alive");
});


router.use(function (req, res, next) {
    console.log('Something is happening.');
    next();
});

router.route('/')
    .get(function (req, res) {

        res.sendfile("./index.html");
    })


router.route('/fortunes')
    .post(function (req, res) {
        var fortune = new Fortune();
        fortune.label1 = req.body.name1;
        fortune.fortune1 = req.body.fortune1;
        fortune.fortune2 = req.body.fortune2;
        fortune.label2 = req.body.name2;
        fortune.fortune3 = req.body.fortune3;
        fortune.fortune4 = req.body.fortune4;
        fortune.label3 = req.body.name3;
        fortune.fortune5 = req.body.fortune5;
        fortune.fortune6 = req.body.fortune6;
        fortune.label4 = req.body.name4;
        fortune.fortune7 = req.body.fortune7;
        fortune.fortune8 = req.body.fortune8;
        fortune.save(function (err, fortune) {
            if (err)
                res.send(err)
            // res.redirect('/api/fortunes/' + fortune.id)
            res.render('share', {
                shareurl: fortune.id
            })
        })
    })


    .get(function (req, res) {

        res.redirect('/api');
    })




router.route('/fortunes/:fortune_id')
    .get(function (req, res) {
        Fortune.findById(req.params.fortune_id, function (err, fortune) {
            if (err)
                res.send(err);
            // console.log(fortune)
            res.render('index', {
                name1: [fortune.label1, fortune.fortune1, fortune.fortune2],
                name2: [fortune.label2, fortune.fortune3, fortune.fortune4],
                name3: [fortune.label3, fortune.fortune5, fortune.fortune6],
                name4: [fortune.label4, fortune.fortune7, fortune.fortune8]
            })
        });
    })

    .put(function (req, res) {
        fortune.findById(req.params.fortune_id, function (err, fortune) {
            if (err)
                res.send(err);
            fortune.name = req.body.name;
            fortune.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'fortune updated!' });
            });
        });
    })

    .delete(function (req, res) {
        fortune.remove({
            _id: req.params.fortune_id
        }, function (err, fortune) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    })


app.use('/api', router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log('Magic happens on port ' + port);





