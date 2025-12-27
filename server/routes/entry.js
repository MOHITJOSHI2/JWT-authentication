const express = require("express")
const { signup } = require("../controller/signup")
const { checkCookie } = require("../jwtMiddleware")
const { login, checkCookies, logOut } = require("../controller/login")
const router = express.Router()

router.post('/signup', checkCookie, signup)
router.post('/login', checkCookie, login)

router.get('/logout', checkCookie, logOut)
router.get('/checkCookie', checkCookie, checkCookies)

module.exports = router