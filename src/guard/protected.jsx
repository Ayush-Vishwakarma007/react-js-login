import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../dashboard/company/Navigation";
import Footer from "../dashboard/company/Footer";
import "../index.css";

function Protected(props){
    const { Component } = props
    const navigate = useNavigate();
    
    useEffect(() => {
        let login = localStorage.getItem('token')   
        let user = JSON.parse(localStorage.getItem('userDetail'))
        if(!login && user['data']['role'] === 'COMPANY'){
            navigate('/signup')
        }
    })

    return(
        <div>
            <Navigation />
            <Component />
            <Footer />
        </div>         
    )
}
export default Protected