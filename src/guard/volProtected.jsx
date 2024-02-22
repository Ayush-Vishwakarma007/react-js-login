import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../dashboard/volunteer/VolNavigation";
import Footer from "../dashboard/volunteer/VolFooter";
import "../index.css";

function VolProtected(props){
    const { Component } = props
    const navigate = useNavigate();
    
    useEffect(() => {
        let login = localStorage.getItem('token')   
        let user = JSON.parse(localStorage.getItem('userDetail'))
        if((!login) || (login && user['role'] === 'COMPANY')){
            console.log("this is volunteer")
            console.log(props)
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
export default VolProtected