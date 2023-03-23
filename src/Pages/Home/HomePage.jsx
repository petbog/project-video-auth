import { useAuth } from '../../hooks/use-auth'
import { useDispatch } from 'react-redux';
import { removeUser } from '../../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import classes from './HomePage.module.css'



const HomePage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()

    useEffect(() => {
        if (!isAuth) {
            navigate('/Login')
        }
    }, [isAuth,navigate])
    return isAuth ? (
        <div className={classes.home}>
            <div className={classes.home_header}>
                <div className={classes.home_header_container}>
                    <p className={classes.home_user}>welcome{email}</p>
                    <button onClick={() => { dispatch(removeUser()) }} className={classes.home_exid}>Выйти</button>
                </div>
            </div>
        </div>
    ) : navigate('/Login')
}

export default HomePage