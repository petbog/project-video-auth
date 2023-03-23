import { useAuth } from '../../hooks/use-auth'
import { useDispatch } from 'react-redux';
import { removeUser } from '../../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';






const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()
    useEffect(() => { 
    if(!isAuth){
        navigate('/Login')
    }
    }, [isAuth])

    return isAuth ? (
        <div className="">
            <p className="">welcome{email}</p>
            <button onClick={() => { dispatch(removeUser()) }} className="">exid</button>
        </div>
    ) : navigate('/Login')
}

export default HomePage