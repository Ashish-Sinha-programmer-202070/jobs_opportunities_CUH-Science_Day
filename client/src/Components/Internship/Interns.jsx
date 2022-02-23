import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import "./Internship.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Interns() {
    const [interns,setInterns] = useState([]);
    useEffect(async()=>{
        const res = await axios.get('http://localhost:5000/get/internships');
        setInterns(res.data.data);
    },[]);
return (
    <>
    <Header/>
    <div className="imagei"></div>
	<div style={{}}>
	<h4>How to use CardComponent in ReactJS?</h4>
	<Card
		style={{
		width: 400,
		backgroundColor:"white",
        
		}}
	>
		<CardContent>
        
           
		<Typography
			style={{ fontSize: 14 }}
			color="textSecondary"
			gutterBottom
		>
			Greetings of the day
		</Typography>
		<Typography variant="h5" component="h2">
			How are you ?
		</Typography>
		<Typography
			style={{
			marginBottom: 12,
			}}
			color="textSecondary"
		>
			Keep Motivated
		</Typography>
		<Typography variant="body2" component="p">
			Stay Happy
		</Typography>
		</CardContent>
		<CardActions>
		<Button size="small">Stay Safe.....</Button>
		</CardActions>
	</Card>
	</div>
    <Footer/>
   </> 
);
}
