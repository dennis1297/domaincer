const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const projectroutes = require("./routes/projectroutes")
const userroutes = require("./routes/userroutes")

app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

function dbConnect() {
	mongoose
		.connect("mongodb+srv://dennis1297:dennis1297@domaincer.q49iuga.mongodb.net/test", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`)
			console.log(err.message);
		});
}
dbConnect()

app.use('/project', projectroutes);

app.use('/user',userroutes);


app.listen(5000, () => {
	console.log(`App is up and running at PORT 5000`);
});

// app.get("/", (req, res) => {
// 	res.send("App is Running");
// });

