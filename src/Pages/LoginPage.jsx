import { Link } from "react-router-dom";
import Login from './../Component/Login';


const LoginPage = () => {

    return (
        <div className="">
            <login/>
            <p className=""> Login</p>
            <Login/>
            <Link to='/Register'>register</Link>
        </div>
    )
}

export default LoginPage