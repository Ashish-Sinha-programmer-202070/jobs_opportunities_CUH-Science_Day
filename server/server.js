const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('./database/pg');
const jwtTokenPassword = 'internship';

app.use(cors());
app.use(express.json());

// Get all departments
app.get('/get/departments',async(req,res)=>{
    try {
        const result = await db.query('select * from department;');
        res.status(200).json({status:'success',data:result.rows});
    } catch (err) {
        console.log(err);
        res.status(500).json({status:"failed"});
    }
});

// Get all interships
app.get('/get/internships',async(req,res)=>{
    try {
        const result = await db.query('select * from intership_details;');
        res.status(200).json({status:'success',data:result.rows});
    } catch (err) {
        console.log(err);
        res.status(500).json({status:"failed"});
    }
});
// Add internship
app.post('/add/internship',async(req,res)=>{
    try {
        const {title,description,company,skill_set,deadline,official_link,on_campus} = req.body;
        const result = await db.query("insert into intership_details(title,description,company,skill_set,deadline,offcial_link,on_campus) values ($1,$2,$3,$4,$5,$6,$7) returning *;",[title,description,company,skill_set,deadline,official_link,on_campus]);
        res.status(200).json({status:'success',data:result.rows});
    } catch (err) {
        console.log(err);
        res.status(500).json({status:"failed"});
    }
});
// Get a specific Internship
app.get('/get/intership/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await db.query('select * from intership_details where intern_id = $1;',[id]);
        res.status(200).json({status:'success',data:result.rows});
    } catch (err) {
        console.log(err);
        res.status(500).json({status:"failed"});
    }
});
//Delete internship
app.delete('/remove/internship/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await db.query('delete from intership_details where intern_id = $1 returning *;',[id]);
        res.status(200).json({status:'success',data:result.rows});
    } catch (err) {
        console.log(err);
        res.status(500).json({status:"failed"});
    }
});

//    Sign Up Form
app.post("/auth/signup", async (req, res) => {
    const { f_name, l_name, email, password,gender,dept_id,skills } = req.body;
    let response = await db.query(`SELECT * FROM users WHERE email=$1;`, [
      email,
    ]);
    if (response.rows.length >= 1) {
      res.json({
        status: "failed",
        msg: "User already exits with that mail id..",
      });
    } else {
      try {
        let encryted = await bcrypt.hash(password, 10);
        let insert = await db.query(
          "INSERT INTO users (first_name,last_name,gender,email,dept_id,skills,password) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING user_id ;",
          [f_name, l_name,gender, email,dept_id,skills, encryted]
        );
        let payload = insert.rows ? insert.rows[0] : res.send("Rows are empty");
        let token = await jwt.sign(payload, jwtTokenPassword, {
          expiresIn: "1hr",
        });
        // let verify = jwt.verify(token, process.env.TOKEN_PASSWORD);
        res.json({
          status: "success",
          token,
        });
      } catch (err) {
        console.log(err);
        console.log(err.message);
      }
    }
  });

//      Login Form
app.post("/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const response = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (response.rows.length === 0) {
        res.json({
          status: "login failed!",
          msg: "No user exits with that mail.",
        });
      } else {
        const verify = await bcrypt.compare(
          password,
          response.rows[0].password
        );
        if (verify) {
          const user_id = response.rows[0].user_id;
          const token = jwt.sign({ user_id }, jwtTokenPassword, {
            expiresIn: "1hr",
          });
          res.json({
            status: "success",
            token,
          });
        } else {
          res.json({
            status: "login failed!",
            msg: "Incorrect Password",
          });
        }
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  });

//        Verify a User
app.post("/auth/verify", async (req, res) => {
    const { token } = req.headers;
    // console.log(req.headers);
    // console.log(token);
    try {
      if (token) {
        try {
          const verify = jwt.verify(token,jwtTokenPassword );
          res.json({
            status: "success",
            user_id: verify.user_id,
          });
        } catch (err) {
          res.json({
            status: "failed",
            msg: err.message,
          });
        }
      } else {
        res.json({
          status: "failed",
          msg: "No token found in headers",
        });
      }
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  });

app.listen(5000,()=>{console.log("Server is up and running on port 5000...")});