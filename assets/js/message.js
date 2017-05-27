var nodemailer = require('nodemailer');

/*var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello
*/


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'liamlu0306@gmail.com',
    pass: 'Lsq19950306'
  }
});

var mailOptions = {
  from: 'liamlu0306@gmail.com',
  to: 'lsq0306@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
