import Header from '../Login_Page/Header/Header';
import Footer from '../Login_Page/Footer/Footer';

const Dashboard = (props)=>{
    


  return (
      <>
      <Header/>
            <center><h1>Dashboard</h1></center>

            <a href="/dashboard/add-opportunity">Add Opportunities</a>
        <Footer/>    
      </>
  );
}

export default Dashboard;