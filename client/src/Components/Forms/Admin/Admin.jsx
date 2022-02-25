import "./Admin.css";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Admin() {
    const navigate = useNavigate();
    
    const [title,setTitle] = useState("");
    const [company,setCompany] = useState("");
    const [description,setDescription] = useState("");
    const [department, setDepartment] = useState("")
    const [deadline,setDeadline] = useState("");
    const [link,setLink] = useState("");
    const [skill,setSkill] = useState("");
  
    const handleSubmit =  async()=>{
      let title = document.getElementById("title_name").value;
        let company = document.getElementById("company_name").value;
        let department = document.getElementById("department_name").value;
        let deadline = document.getElementById("deadline_time").value;
        let description = document.getElementById("description_name").value;
        let link = document.getElementById("link_").value;
        let skills = document.getElementById("skill_set").value;
        
        if(company === '' || department === '' || deadline === '' ||  link === '' || skills ===''){
            alert("Input fields can't be empty.");
            return false;
        }else {
            const res = await axios.post('http://localhost:5000/add/internship',{
                'title': title,
                'company':company,
                'department':department,
                'description': description,
                'deadline':deadline,
                'offcial_link': link,
                'skill_set':skills,
                'on_campus': 'No'
            });
            
            if(res.data.status === 'success'){
                alert("Data submitted successfully")
            }else{
                alert(res.data.msg);
            }   
        }   
    }

  return (
    <div className="a">
      <div className="admin">
        <h1>Internship Updates</h1>
      </div>
      <form onSubmit={(e)=>{e.preventDefault();}}>
        <div className="forms">
        <div class="form-group">
            <label for="formGroupExampleInput">Title</label>
            <input
              type="text"
              class="form-control"
              id="title_name"
              placeholder="Title"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Company</label>
            <input
              type="text"
              class="form-control"
              id="company_name"
              placeholder="Company"
              value={company}
              onChange={(e)=>{setCompany(e.target.value)}}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Department</label>
            <input
              type="text"
              class="form-control"
              id="department_name"
              placeholder="Department"
              value={department}
              onChange={(e)=>{setDepartment(e.target.value)}}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Deadline</label>
            <input
              type="date"
              class="form-control"
              id="deadline_time"
              placeholder="Deadline"
              value={deadline}
              onChange={(e)=>{setDeadline(e.target.value)}}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Link</label>
            <input
              type="text"
              class="form-control"
              id="link_"
              placeholder="Link"
              value={link}
              onChange={(e)=>{setLink(e.target.value)}}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Skills Sets</label>
            <input
              type="text"
              class="form-control"
              id="skill_set"
              placeholder="Skill Set"
              value={skill}
              onChange={(e)=>{setSkill(e.target.value)}}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Description</label>
            <textarea
            class="form-control"
            id="description_name"
            placeholder="Description"
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            ></textarea>
              {/* type="text"
              class="form-control"
              id="description_name"
              placeholder="Description"
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
            /> */}
          </div>
          {/* <div id="radio">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="gridRadios1">
                On Campus
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label class="form-check-label" for="gridRadios2">
                Off Campus
              </label>
            </div>
          </div> */}

          <div id="btn">
            <button onClick={handleSubmit} type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Admin;
