const express = require("express")
const { checkCookie } = require("../jwtMiddleware")
const { protectedContent } = require("../controller/protected")
const router = express.Router()

router.get("/protectedContent", checkCookie, protectedContent)

module.exports = router