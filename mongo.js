const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/sanju';
// const database = 'sanju';
// const client = new MongoClient(url);

async function dbConnect() {
    let result = await MongoClient.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true }
        );
    // let db = result.db(database);
    return result.collection('products');
    // let response = await collection.find({}).toArray()
    // console.log(response);
}
dbConnect();