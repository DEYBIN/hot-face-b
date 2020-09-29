const { Router } = require("express");
const router = Router();
const models = require("../models/users");
router.post('/',(req,res)=>{	
	let postData = req.body;

	models.findOne({ phone: postData.phone },(err,users)=>{
			if (err) return res.json({ status: 400, message: err.message });
			const { ...data } = req.body;
			const newProfile = new models(data);
			newProfile.save(function (err, users) {
				if (err) return res.json({ status: 400, message: err.message });
				res.json({ status: 200, message: 'success'});
			});
		});
	
});

module.exports=router;