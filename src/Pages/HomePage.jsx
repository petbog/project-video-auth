import { useAuth } from '../hooks/use-auth'
import { useDispatch } from 'react-redux';
import { removeUser } from '../Redux/slise/UserSlice'
import { redirect } from 'react-router-dom';




const HomePage = () => {
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()


    return isAuth ? (
        <div className="">
            <p className="">welcome{email}</p>
            <button onClick={() => { dispatch(removeUser()) }} className="">exid</button>
        </div>
    ) : <div className="">error</div>
}

export default HomePage