"use strict";

const fs = require("fs").promises;

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
	
	static getUsers(...fields){
		// const users = this.#users;
		const newUsers = fields.reduce((newUsers, field) => {
			if(users.hasOwnProperty(field)) {
				newUsers[field] = users[field];
			}
			return newUsers;
		}, {});
		//console.log(newUsers);
		return newUsers;
	}

	static getUserInfo(id){
		
		return fs
			.readFile("./src/databases/users.json")
			.then((data) => {
				return this.#getUserInfo(data, id);
			})			//성공시
			.catch(console.error);		//실패시
		
	}


	static save(userInfo){
		// const users = this.#users;
		users.id.push(userInfo.id);
		users.psword.push(userInfo.psword);
		users.name.push(userInfo.name);
		return {success: true};
	}



}

module.exports = UserStorage;