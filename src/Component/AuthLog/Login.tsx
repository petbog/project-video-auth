
import Form from '../FormAuth/Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from "../../Redux/slise/UserSlice";
import { useAppDispatch } from "../../Redux";

const Login:React.FC = () => {
    const dispatch = useAppDispatch()
    const push = useNavigate()

    const handleLogin = (email:string, password:string ) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                //@ts-ignore
                token: user.accessToken,
            }))
            push('/')
        })
            .catch(console.error)
    }
    return (
        <div className="">
             <Form title = 'Войти'  handleClick ={handleLogin}/>
        </div>
    )
}

export default Login