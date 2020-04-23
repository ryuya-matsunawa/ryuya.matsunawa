const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

admin.initializeApp();

app.get('/', (req, res) => {

  // Cross-Origin Resource Sharing（CORS）に対応させる
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');

  // realtime databaseからスキルデータを取得する
  let skillcategories = []
  const query = admin.database().ref("skillcategories").orderByKey();
  query.once("value").then(snapshot => {
    // 取得したデータを１件ずつ配列に設定する
    snapshot.forEach(childSnapshot => {
      // 取得したデータを１件ずつ配列に設定する
      let skill = childSnapshot.val();
      skill.key = childSnapshot.key;
      skillcategories.push(skill);
    });
    // 取得結果を返す
    return res.send(skillcategories);
  })
    .catch(error => {
      // 取得時にエラーがでた場合にエラー文字列を返す
      res.status(404).send('No data available.');
    });
});

// regionを指定してファンクションを定義(CORS対策)
exports.skillcategories = functions.region('us-central1').https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
