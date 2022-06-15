"use strict";

class UserStorage {
	static #users = {
		id: ["test01", "test02", "test03"],
		psword: ["1111", "2222", "3333"],
		name: ["홍길동", "나개발", "너개발"],
	};

	static getUsers(...fields){
		const users = this.#users;
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
		const users = this.#users;
		const idx = users.id.indexOf(id);
		const usersKeys = Object.keys(users);
		const userInfo = usersKeys.reduce((newUser, info) => {
			newUser[info] = users[info][idx];
			return newUser;
		}, {});

		return userInfo;
	}

	static save(userInfo){
		const users = this.#users;
		users.id.push(userInfo.id);
		users.psword.push(userInfo.psword);
		users.name.push(userInfo.name);
		return {success: true};
	}



}

module.exports = UserStorage;