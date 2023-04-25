import { useDispatch, useSelector } from "react-redux";
import { setUserLC } from "../Redux/slise/UserSlice";
import { useEffect } from "react";

export function useAuth() {
    const dispatch = useDispatch()

    const { email, token, id } = useSelector(state => state.user)
    const User = {
        email,
        token,
        id
    }

    if (email !== '') {
        localStorage.setItem('user', JSON.stringify(User))
    }
    useEffect(() => {
        const UserLC = JSON.parse(localStorage.getItem('user'))
        if (!UserLC) {
            dispatch(setUserLC({
                email: '',
                token:  '',
                id: '',
            }))
        } else {
            dispatch(setUserLC({
                email: UserLC.email ,
                token: UserLC.token ,
                id: UserLC.id,
            }))
        }

    }, [dispatch])

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}
