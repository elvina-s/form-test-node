const Model = require("./Model")

module.exports.getInfo = async (req, res) => {
    res.sendFile(__dirname + "/index.html")
}

module.exports.postInfo = async (req, res) => {
    let newMessage = new Model ({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + "/answer.html")
}