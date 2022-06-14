"use strict";

const app = require("../app");

//포트
const PORT = 9951;

app.listen(PORT, () => {
	console.log('서버 가동');
});