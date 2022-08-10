
import React,{ useEffect , useState ,createContext } from "react"
import axios from 'axios'
import { useCookies } from 'react-cookie';

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginError,setLoginError] = useState(false);
    const [cookies, setCookie] = useCookies(['transporter']);
    
    function loginUser(e) {
        e.preventDefault();
        
        const user = {email,password};
        var session_url = 'http://localhost:3000/UserPersons/signin';
        axios.post(session_url, user)
        .then(function(response) {
            setLoginError('Succes')
            setCookie('accessToken', response.data.accessToken);
            setCookie('id_transporter', response.data.UserPerson._id);
            setCookie('email_transporter', response.data.UserPerson.email);
            window.location.href='/dashbord'
        }).catch(function(error) {
            setLoginError('Username and password are not correcte')
        });
    }
      
    return(
        <div className="register">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-1">
                        <div className="register-form">
                            <div className="mb-5">
                                <h1>Log in</h1>
                                <p className="lead">Create an account to start playing.</p>
                            </div>
                        <form onSubmit={e => loginUser(e)}>
                            <div className="form-group">
                                <div>
                                </div>
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-info">{loginError}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                <small id="emailHelp" className="form-text text-info">{loginError}</small>
                            </div>
                            <div className="custom-control custom-checkbox my-4">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary">Log In</button>
                            </form>
                            <p className="small my-4 text-center">Already have an account? <a href="/signup">Sign Up</a>.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 offset-md-1">
                        <img src="assets/img/password.svg" alt="pick" />
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default Login
