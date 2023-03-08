const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://housecrew:12341234@cluster0.ehukn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

function mongoConn() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
            resolve(client.db());
        });

    })

}

module.exports = mongoConn;