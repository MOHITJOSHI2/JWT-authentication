exports.protectedContent = (req, res) => {
    if (typeof req.user !== "undefined") {
        res.status(200).json({
            message: "Successfully entered the protected content page",
            id: req.user
        })
    } else {
        res.status(400).json({ err: "Lol" })
    }
}