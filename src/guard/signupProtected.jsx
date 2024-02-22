import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";

function SignInProtected(props){
    const { Component } = props
    const navigate = useNavigate();
    
    useEffect(() => {
        let login = localStorage.getItem('token')   
        if(login){
            navigate('/home')
        }
    })

    return(
        <div>
            <Component />
        </div>         
    )
}
export default SignInProtected