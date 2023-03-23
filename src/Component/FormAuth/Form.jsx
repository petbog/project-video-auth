import { useState } from "react"
import classes from './Form.module.css'
import eye_off from '../../img/eye_off.svg'
import eye from '../../img/eye.svg'




const Form = ({ title, handleClick }) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [type,setType]=useState("password")
    const [src,setSrc]=useState(eye_off)


const handleToggle=()=>{
    if(type === "password"){
        setType("text")
        setSrc(eye)
    }else{
        setType("password")
        setSrc(eye_off)
    }
}

    return (
        <div className={classes.Form_inner}>
            <div className={classes.Form_container}>
                <p className={classes.form_title}>Логин</p>
                <input className={classes.Form_email} type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email'
                />
            </div>
            <div className={classes.Form_container}>
                <p className={classes.form_title}>Пароль</p>
                <input
                    className={classes.Form_pass}
                    type={type}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder='password'
                />
                <img onClick={handleToggle} className={classes.form_img} src={src} alt="" />
            </div>
            <div className={classes.Button_container}>
                <button className={classes.Form_button} onClick={() => handleClick(email, pass)}>{title}</button>
            </div>
        </div>
    )
}

export default Form