const signup = require("../models/signup")
const jwt = require("jsonwebtoken")
require("dotenv").config({ path: "/home/spyner/Documents/learing web/server/.env", quiet: true })

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const userData = await signup.findOne({ email: email })
        if (userData) {
            if (userData.email === email && userData.password === password) {
                const payload = { id: email, password: password }
                const token = jwt.sign(payload, process.env.KEY, { expiresIn: "24h" })
                res.cookie("user", token, {
                    httpOnly: true,
                    maxAge: 86400000,
                })
                res.status(200).json({ message: "Successfully logged in" })
            } else {
                res.status(400).json({ err: "User Already exists" })

            }
        } else {
            res.status(400).json({ err: "User not found" })
        }
    } catch (error) {
        console.log("error at login: ", error)
    }
}


exports.checkCookies = async (req, res) => {
    if (typeof req.user == undefined) {
        console.log(lol)
        res.status(404).json({ err: "No cookie available" })
    } else {
        res.status(200).json({ message: "Cookie exists" })
    }
}

exports.logOut = async (req, res) => {
    if (typeof req.user !== undefined) {
        res.clearCookie('user')
        res.status(200).json({ message: "User logout successfully" })
    } else {
        res.status(404).json({ err: "No cookie available" })

    }
}