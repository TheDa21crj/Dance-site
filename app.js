const fs = require("fs");
const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dance", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 80;

const daSchema = new mongoose.Schema({
  full_name: String,
  date_of_birth: String,
  age: String,
  address: String,
  father_name: String,
  mother_name: String,
  contact_number: String,
  alt_contact_number: String,
  e_mail: String,
});

const Contact = mongoose.model("Contact_of_dance_web", daSchema);

app.use(express.static("Req img")); //folder name
app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index.pug");
});

app.post("/", (req, res) => {
  var name = req.body.full_name;
  var dob = req.body.date_of_birth;
  var age = req.body.age;
  var address = req.body.address;
  var f_n = req.body.father_name;
  var m_n = req.body.mother_name;
  var c_n = req.body.contact_number;
  var a_c_n = req.body.alt_contact_number;
  var email = req.body.e_mail;

  let u = `Name = ${name},\nAge = ${age},\n Date of Birth = ${dob},\nAddress = ${address},\nFather's Name = ${f_n},\nMother's Name = ${m_n},\nContact Number = ${c_n},\nAlternative Contact Number = ${a_c_n},\ne-mail = ${email}`;
  fs.writeFileSync("Output files/user_input.txt", u);

  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.status(200).send("This item has been saved to the database");
    })
    .catch(() => {
      res.status(400).send("item was not saved to the databse");
    });
});

app.listen(port, () => {
  console.log(`Running on Localhost at port ${port}`);
});
