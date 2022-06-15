"use strict";

const id = document.querySelector("#id"),
	psword = document.querySelector("#psword"),
	confirmPsword = document.querySelector("#confirm-psword"),
	name = document.querySelector("#name"),
	registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
	//console.log(id.value, psword.value);
	const req = {
		id: id.value,
		psword: psword.value,
		confirmPsword: confirmPsword.value,
	};

	//console.log(req);
	//console.log(JSON.stringify(req));

	fetch("/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(req),
	})
		.then((res) => res.json())
		.then((res) => {
			if(res.success){
				location.href="/login";
			} else {
				alert(res.msg);
			}
		})
		.catch((err) => {
			console.error("회원가입 중 에러 발생");
		});
}