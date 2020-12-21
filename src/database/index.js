const mongoose = require('mongoose')
require('dotenv').config()
module.exports = {
    mongoose,
    connect: () => {
        mongoose.Promise = Promise
        mongoose.connect(process.env.DB_HOST, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.info('DB Connected')
        }).catch(error => {
            console.error(error)
            process.exit()
        })
    },
    disconnect: done => {
        mongoose.disconnect(done);
    }
}