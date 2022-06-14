"use strict";

const users = {
	id: ["test01", "test02", "test03"],
	psword: ["1111", "2222", "3333"],
};

const output = {
	home: (req, res) => {
		res.render("home/index");
	},	
	login: (req, res) => {
		res.render("home/login");
	},
};

const process = {
	login: (req, res) => {
		//console.log(req.body);
		const id = req.body.id,
			psword = req.body.psword;
		
		if(users.id.includes(id)){
			const idx = users.id.indexOf(id);
			if(users.psword[idx] === psword){
				return res.json({
					success: true,
				});
			}
		}

		return res.json({
			success: false,
			msg: "로그인에 실패하셨습니다.",
		});
	},
};


module.exports = {
	output,
	process,
};