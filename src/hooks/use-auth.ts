import {  useSelector } from "react-redux";
import { UserSelector, setUserLC } from "../Redux/slise/UserSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../Redux";

export function useAuth() {
    const dispatch = useAppDispatch()

    const { email, token, id } = useSelector(UserSelector)
    const User = {
        email,
        token,
        id
    }

    if (email !== '') {
        localStorage.setItem('user', JSON.stringify(User))
    }
    useEffect(() => {
        // @ts-ignore
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
