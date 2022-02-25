import "./Admin.css";
function Admin() {
  return (
    <div className="a">
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div className="admin">
        <h1>Internship Updates</h1>
      </div>
      <form action="/action_page.php">
        <label className="ag" for="fname">
          Company:
        </label>
        <input className="g" type="text" id="fname" name="fname" />
        <br />

        <label className="ag" for="lname">
          Internship Details:
        </label>
        <input className="g" type="text" id="lname" name="lname" />
        <br />

        <label className="ag" for="dname">
          Department:
        </label>
        <input className="g" type="text" id="dname" name="dname" />
        <br />

        <label className="ag" for="sname">
          Skill Sets:
        </label>
        <input className="g" type="text" id="sname" name="sname" />
        <br />

        <label className="ag" for="d_name">
          Deadline:
        </label>
        <input className="g" type="text" id="d_name" name="d_name" />
        <br />

        <label className="ag" for="linkname">
          Link:
        </label>
        <input className="g" type="text" id="linkname" name="linkname" />
        <br />
        <br />

        <label className="ag" for="internship">
          Type:
        </label>
        <select id="internship" name="internships">
          <option value="volvo">OnCampus</option>
          <option value="saab">OffCampus</option>
        </select>
        <br />
        <br />

        <label for="description">Description:</label>
        <br />
        <textarea className="d" name="exp" id="description"></textarea>
        <br />

        <br />
        <br />
        <div>
          <input type="submit" value="Submit" />

          <input id="inp" type="reset" />
        </div>
      </form>
    </div>
  );
}
export default Admin;
