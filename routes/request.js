const express = require('express');
const router = express.Router();
const Request = require('../models/request');
const AcceptedRequests = require('../models/acceptedRequests');
const config = require('../config/database');




router.post("/manageRequest",function(req, res) {
	const newRequest = new Request({
		name:req.body.name,
		post:req.body.post,
		email:req.body.email,
		date:req.body.date,
		reason:req.body.reason,
		describe:req.body.describe,
		array:{
			name:req.body.name,
		    date:req.body.date
		}    
	});

	Request.saveRequest(newRequest,function (err,request) {
		if(err) {
			if(err.errors.array){
			   res.json({state:false,msg:req.body.name+" You can not request more leaves on this date"});
			}else{
			   res.json({state:false,msg:" not sent request"});
			}  
		}
		if(request) {
			res.json({state:true,msg:"sent request"});
		}
	});

});

router.get('/manageRequest/:email', function(req, res) {
         
        const query = {email: req.params.email};
        Request.find(query,function(err, request){
		   res.json(request);
	    });	
       
});



router.delete('/manageRequest/:id',(req, res, next)=>{
	Request.remove({_id: req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(result);
		}	
	});
});


router.get('/manageRequest', function(req, res) {
         
    Request.find(function(err, request){
		 res.json(request);
	})   
});


router.post("/acceptRequest",function(req, res) {
	const newAcceptedRequests = new AcceptedRequests({
		name:req.body.name,
		post:req.body.post,
		email:req.body.email,
		req_on:req.body.created_at,
		date:req.body.date,
		reason:req.body.reason,
		describe:req.body.describe,
		state:'Accepted'
	});

	AcceptedRequests.acceptRequest(newAcceptedRequests,function (err,request) {
		if(err) {
			res.json({state:false,msg:" somthing went wrong "});
		}
		if(request) {
			res.json({state:true,msg:"accepted request"});
		}
	});

});

router.post("/notacceptRequest",function(req, res) {
	const newAcceptedRequests = new AcceptedRequests({
		name:req.body.name,
		post:req.body.post,
		email:req.body.email,
		req_on:req.body.created_at,
		date:req.body.date,
		reason:req.body.reason,
		describe:req.body.describe,
		state:'Cancelled'
	});

	AcceptedRequests.notacceptRequest(newAcceptedRequests,function (err,request) {
		if(err) {
			res.json({state:false,msg:" somthing went wrong "});
		}
		if(request) {
			res.json({state:true,msg:"not accepted request"});
		}
	});

});

router.get('/viewHistory/:email', function(req, res){

	const query = {email: req.params.email};
        AcceptedRequests.find(query,function(err, user){
		   res.json(user);
	    });	
}); 

router.post("/sendNotification", function (req, res) {
	console.log(req.body);
	console.log('hello');
    const accountSid = 'ACbeed9a86ca0eae9bb5c5192ed805e4f2';
    const authToken = '9fa5eef7ff686589730d6f0d0c198ffc';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'Your request on leave : Accepted',
            from: '+16164143086',
            to: req.body.telephoneNo
        })
        .then(message => console.log(message.sid))
        .done();
    res.json({ state: true, msg: "send" });
});

module.exports = router;