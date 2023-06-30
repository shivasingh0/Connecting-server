const mongoose = require('mongoose')

connectToDB = async () => {
    mongoose.connect(process.env.dbURI)
    .then((conn) => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectToDB