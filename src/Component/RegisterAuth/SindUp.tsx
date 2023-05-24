import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../FormAuth/Form';
import { setUser } from '../../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from "../../Redux";

const SindUp = () => {
    const dispatch = useAppDispatch()
    const push = useNavigate()

    const handleRegister = (email:string, password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    // @ts-ignore
                    token: user.accessToken,
                }))
                push('/')
            })
            .catch(console.error)
    }

    return (
        <div className="">
            <Form title='Регистрация' handleClick={handleRegister} />
        </div>
    )
}

export default SindUp