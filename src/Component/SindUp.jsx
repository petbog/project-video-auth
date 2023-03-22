import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from './Form';
import { setUser } from '../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom'

const SindUp = () => {
    const dispatch = useDispatch()
    const push = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            <Form title='Register' handleClick={handleRegister} />
        </div>
    )
}

export default SindUp