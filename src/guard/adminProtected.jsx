import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../dashboard/company/Navigation";
import Footer from "../dashboard/company/Footer";
import "../index.css";

function AdminProtected(props){
    const { Component } = props
    const navigate = useNavigate();
    
    useEffect(() => {
        let login = localStorage.getItem('token')   
        let user = JSON.parse(localStorage.getItem('userDetail'))
        if((!login) || (login && (user['role'] === 'VOLUNTEER'))){
            if(user['role'] === 'VOLUNTEER'){
                navigate('/vol-home')
            }
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
export default AdminProtected