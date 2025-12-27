const signupModel = require("../models/signup")

exports.signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (req.user) {
            res.status(200).json({ message: "Cookie is already set" })
        }
        else {
            const userData = await signupModel.findOne({ email: email })
            if (userData) {
                res.status(400).json({ err: "email already exists" })
            } else {
                const sign = new signupModel({
                    name: name,
                    email: email,
                    password: password
                })
                await sign.save()
                console.log("Signup successfully")
                res.status(200).json({ message: "Signup successfully" })
            }
        }
    } catch (error) {
        console.log("Error at signup controller: ", error)
    }
}