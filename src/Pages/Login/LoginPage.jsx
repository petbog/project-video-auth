import { Link } from "react-router-dom";
import Login from "../../Component/AuthLog/Login";
import classes from './LoginPage.module.css';




const LoginPage = () => {

    return (
        <div className={classes.login}>
            <div className={classes.login_container}>
                <p className={classes.login_title}> Вход</p>
                <Login  />
                <Link className={classes.login_link} to='/Register'> Регистрация</Link>
            </div>
        </div>
    )

}

export default LoginPage