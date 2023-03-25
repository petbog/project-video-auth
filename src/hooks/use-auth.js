import { useSelector } from "react-redux";

export function useAuth() {
    const { email, token, id } = useSelector(state => state.user)
    const User = {
        email,
        token,
        id
    }

    if (email !== null) {
        localStorage.setItem('user', JSON.stringify(User))
    }

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}
