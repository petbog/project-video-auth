import { Link } from 'react-router-dom';
import SindUp from '../../Component/RegisterAuth/SindUp';


const PegisterPage = () => {
    return (
        <div className="">
            <SindUp />
            <p className="">
                если есть аккаунт
                <Link to='/Login'> авторизация</Link>
            </p>
        </div>
    )
}

export default PegisterPage