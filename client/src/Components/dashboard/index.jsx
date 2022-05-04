import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Login_Page/Footer/Footer";
import "./dashboard.css";
import {FiEdit} from 'react-icons/fi';
import {AiTwotoneDelete} from 'react-icons/ai';
const Dashboard = (props) => {
  const [jobs, setJobs] = useState([]);
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/get/internships");
    setJobs(res.data.data);
  }, []);

  return (
    <div className="dashboard">
      <center>
        <h1>Dashboard</h1>
      </center>

      <a className="opp" href="/dashboard/add-opportunity">
        Add Opportunities
      </a>
      <p className="total-opp">Total Oppurtunities: {jobs.length}</p>
      
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Company</th>
      <th scope="col">On/Off Campus</th>
      <th scope="col">Department</th>
      <th scope="col">Batch Year</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {jobs.map((job,idx) => {
          return (
            <tr key={idx}>
              <td>{job.company}</td>
              <td>{job.on_campus}</td>
              <td>{job.department}</td>
              <td>{job.batch_year}</td>
              <td><FiEdit/></td>
              <td><AiTwotoneDelete/></td>
            </tr>
          );
        })}
  
  </tbody>
</table>
      <Footer />
    </div>
  );
};

export default Dashboard;
