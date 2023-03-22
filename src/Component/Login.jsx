import { useDispatch } from "react-redux";
import Form from './Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from "../Redux/slise/UserSlice";

const Login = () => {
    const dispatch = useDispatch()
    const push = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            console.log(user)
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }))
            push('/')
        })
            .catch(console.error)
    }
    return (
        <div className="">
             <Form title = 'Login'  handleClick ={handleLogin}/>
        </div>
    )
}

export default Login