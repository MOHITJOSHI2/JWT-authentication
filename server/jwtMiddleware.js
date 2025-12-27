const jwt = require("jsonwebtoken")
require("dotenv").config({ path: "/home/spyner/Documents/learing web/server/.env", quiet: true })

const checkCookie = (req, res, next) => {
    if (req.cookies.user) {
        let cookie = req.cookies.user
        jwt.verify(cookie, process.env.KEY, (err, success) => {
            if (err) {
                console.log("error at check cookies: ", err)
                return res.status(200).json({ cookieErr: "Cookie doesnt exists" })
            } else {
                req.user = success
                next()
            }
        })
    } else {
        next()
    }
}

module.exports = { checkCookie }