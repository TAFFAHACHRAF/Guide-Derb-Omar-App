
import React,{ useEffect , useState ,createContext } from "react"
import axios from 'axios'
import UserContext from "../Autehtification/UserContext.js";
import { useCookies } from 'react-cookie';

function User(){
    const [cookies, setCookie,removeCookie] = useCookies(['transporter']);

    const logout = () =>{
        removeCookie('accessToken',{path:'/'});
        removeCookie('email_transporter',{path:'/'});
        removeCookie('id_transporter',{path:'/'});
    }

    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
        if(!(cookies.accessToken && cookies.id_transporter && cookies.email_transporter)){
            window.location.href = 'http://localhost:3001/login'
        }
    });

    return(
        <div>
            <h1>This is your personel dashbord</h1>
            <h3>token  :  {cookies.accessToken}</h3>
            <h3>id : {cookies.id_transporter}</h3>
            <h3>email : {cookies.email_transporter}</h3>
            <form onSubmit={logout}>
                <button className="btn btn-primary" type="submit">logout</button>
            </form>
        </div>
    )
}

export default User