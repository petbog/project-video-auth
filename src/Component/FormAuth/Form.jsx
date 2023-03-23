import { useState } from "react"
import classes from './Form.module.css'




const Form = ({ title, handleClick }) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    return (
        <div className={classes.Form_inner}>
            <div className={classes.Form_container}>
                <p className={classes.form_title}>Логин</p>
                <input className={classes.Form_email} type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email'
                />
            </div>
            <div className={classes.Form_container}>
                <p className={classes.form_title}>Пароль</p>
                <input className={classes.Form_pass} type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder='password'
                />
            </div>
            <div className={classes.Button_container}>
                <button className={classes.Form_button} onClick={() => handleClick(email, pass)}>{title}</button>
            </div>
        </div>
    )
}

export default Form