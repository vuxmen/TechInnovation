
const mongodb = require("mongodb");

async function main() {
  const url = "mongodb://127.0.0.1:27017";
  const client = new mongodb.MongoClient(url, {
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log("connected");
  const users = await client.db('test').collection('user').find(
    {username: "admin"},
    {projection: {username: 1}} //truong hop co nhieu ban ghi
    ).toArray();
    console.log(users);
    await client.db("test").collection("user").updateOne(
      {username: 'admin'},
      {$set: {password: '000000'}}
    );
    await client.db('test').collection('user').deleteOne(
      {username: 'test'}
    );

    const newUser = {
      _id: "3",
      username: "user3",
      password: "123456"
    }

    await client.db('test').collection('user').insertOne(newUser);

    await client.db('test').collection('user').count();

}

main();
