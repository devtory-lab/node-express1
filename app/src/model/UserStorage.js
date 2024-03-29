"use strict";

const fs = require("fs").promises;
const db = require("../config/db");

class UserStorage {
	
	static #getUserInfo(data, id){
		const users = JSON.parse(data);				
		const idx = users.id.indexOf(id);
		const usersKeys = Object.keys(users);
		const userInfo = usersKeys.reduce((newUser, info) => {
			newUser[info] = users[info][idx];
			return newUser;
		}, {});

		//console.log(userInfo);

		return userInfo;
	}

	static #getUsers(data, isAll, fields){
		const users = JSON.parse(data);
		if(isAll) return users;

		const newUsers = fields.reduce((newUsers, field) => {
			if(users.hasOwnProperty(field)) {
				newUsers[field] = users[field];
			}

			return newUsers;
		}, {});

		return newUsers;
	}

	static getUsers(isAll, ...fields){
			
		// databases/users.json 사용시
		// return fs
		// 	.readFile("./src/databases/users.json")
		// 	.then((data) => {
		// 		return this.#getUsers(data, isAll, fields);
		// 	})			//성공시
		// 	.catch(console.error);		//실패시
	}

	static getUserInfo(id){		
		// databases/users.json 사용시
		// return fs
		// 	.readFile("./src/databases/users.json")
		// 	.then((data) => {
		// 		return this.#getUserInfo(data, id);
		// 	})			//성공시
		// 	.catch(console.error);		//실패시
		return new Promise((resolve, reject) => {
			db.query("select * from users where id = ?", [id], (err, data) => {
				if(err)	reject(err);
				//console.log(data[0]);
				resolve(data[0]);
			});
		});
	}

	static async save(userInfo){
		const users = await this.getUsers(true);
		if (users.id.includes(userInfo.id)) {
			throw "이미 존재하는 아이디입니다.";
		}
		users.id.push(userInfo.id);
		users.psword.push(userInfo.psword);
		users.name.push(userInfo.name);
		fs.writeFile("./src/databases/users.json", JSON.stringify(users));
		return { success: true };
	}

}

module.exports = UserStorage;