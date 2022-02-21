import React from 'react';
import Header from '../Components/Login_Page/Header/Header';
import './Styles/Error-404.css';
const ErrorPage = () => {
    return ( 
        <>
            <Header/>
            <div className="error_page">
                <p>Error: 404</p>
                <p>Page Not Found</p>
            </div>
        </>
     );
}
 
export default ErrorPage;