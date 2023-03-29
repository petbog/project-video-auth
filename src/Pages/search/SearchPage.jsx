import { useAuth } from '../../hooks/use-auth'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import classes from './SearchPage.module.css'
import SerchVideo from '../../Component/search/SerchVideo';
import { SearchVideo } from '../../Redux/slise/SearchSlise';



const SearchPage = () => {


    const { item,status } = useSelector(state => state.search)
    const video = item.items
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()

    useEffect(() => {
        dispatch(SearchVideo())
    }, [dispatch])
    useEffect(() => {
        if (!isAuth) {
            navigate('/Login')
        }
    }, [isAuth, navigate])

    const Video = video.map((item, i) => <div key={i}>
        <iframe className={classes.video_inner} src={`https://www.youtube.com/embed/${item.id.videoId}`} title="video player" ></iframe>
    </div>)

    return isAuth ? (
        <div className={classes.home}>
            <div className={classes.background_header}></div>
            <div className={classes.home_header}>
                <div className={classes.home_header_container}>
                    <p className={classes.home_user}>welcome {email}</p>
                    <button onClick={() => { dispatch(removeUser()) }} className={classes.home_exid}>Выйти</button>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.wraper_serch}>
                    <p className={classes.serach_title}>Поиск видео</p>
                    <SerchVideo />
                    <div className={classes.video_container}>
                        {
                            status === 'error' ? (<div>ошибка</div>)
                                : (status === 'loading' ? 'Loading' : Video)
                        }
                    </div>

                </div>

            </div>
        </div>
    ) : navigate('/Login')
}

export default SearchPage