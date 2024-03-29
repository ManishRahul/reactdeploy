import React, {useState} from 'react'


function LoginForm({Login,error}) {
    const [details, setDetails] = useState({ email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return(
        
        <form onSubmit = {submitHandler}>
            <div className ="form-inner">
                <h2>Login</h2>
                { (error != "") ? (<div className="error">{error}</div>) : "" }
                
                <div className="form-group">
                    <label htmlFor="email">Username</label><br></br>
                    <input type="type" name ="name" id="name" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label><br></br>
                    <input type="password" name ="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="Login" />
                <h6>Hint : user = "MICKY" and  password = "98765"</h6>

        </div>
        </form>
    )
}

export default LoginForm;