"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);		//ctrl.output.hello 이 더 좋다.
router.get("/login", ctrl.login);

module.exports = router;