import classes from './Header.module.css'
import simons from '../../img/92513305_simons_cat_013450x450svg.png'
import { useAuth } from '../../hooks/use-auth'
import { removeUser } from '../../Redux/slise/UserSlice'
import { useDispatch } from 'react-redux'
import React from 'react'

const Header:React.FC = () => {
    const { email } = useAuth()
    const dispatch =useDispatch()
    return (
        <div className={classes.home}>
        <div className={classes.home_container}>
            <div className={classes.home_header}>
                <img className={classes.simon} src={simons} alt="" />
                    <p className={classes.home_user}>welcome<br /> {email}</p>
                    
                    <button onClick={() => { dispatch(removeUser()) }} className={classes.home_exid}>Выйти</button>
            </div>
        </div>
    </div>
    )
}

export default Header