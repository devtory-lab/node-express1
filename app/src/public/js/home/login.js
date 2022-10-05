"use strict";

const id = document.querySelector("#id"),
	psword = document.querySelector("#psword"),
	loginBtn = document.querySelector("#button");


	console.log(loginBtn)

loginBtn.addEventListener("click", login);

function login(){
	//console.log(id.value, psword.value);
	const req = {
		id: id.value,
		psword: psword.value,
	};

	//console.log(req);
	//console.log(JSON.stringify(req));

	fetch("/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(req),
	})
		.then((res) => res.json())
		.then((res) => {
			if(res.success){
				location.href="/";
			} else {
				alert(res.msg);
			}
		})
		.catch((err) => {
			console.error("로그인 중 에러 발생");
		});
}