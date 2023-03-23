import { Link } from 'react-router-dom';
import SindUp from '../../Component/RegisterAuth/SindUp';
import classes from './PegisterPage.module.css'


const PegisterPage = () => {
    return (
        <div className={classes.login}>
            <div className={classes.login_container}>
                <p className={classes.login_title}> Регистрация</p>
                <SindUp />
                <p className={classes.register_text}>
                    Если есть аккаунт
                    <Link className={classes.register_link}to='/Login'> Авторизация</Link>
                </p>
            </div>

        </div>
    )
}

export default PegisterPage