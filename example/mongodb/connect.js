const MongoClient = require('mongodb').MongoClient;
let db; // 연결 받아올 변수(중요)
const databaseUrl = 'mongodb://localhost:27017/local';
     
MongoClient.connect(databaseUrl, (err, database) => {
    if(err) throw err;
     
    console.log('데이터베이스에 연결됨: '+databaseUrl);
    db = database.db('local'); /*database명을 명시했다.*/
    db.collection("Car").find({}, (err, docs) => {
        docs.each(function(err, doc) {
          if(doc) console.log(doc);
        });
    });
});
console.log(db);
 