import { useAuth } from '../../hooks/use-auth'
import { useDispatch } from 'react-redux';
import { removeUser } from '../../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './SearchPage.module.css'
import SerchVideo from '../../Component/search/SerchVideo';
import axios from 'axios';



const SearchPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()
    const [video, setVideo] = useState([])

    useEffect(() => {
        const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet,id&order=rating&maxResults=10 `).then((res) => {
            setVideo(res.data.items)
        })
    }, [])
    useEffect(() => {
        if (!isAuth) {
            navigate('/Login')
        }
    }, [isAuth, navigate])



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
                    {
                        video.map((item,i) =><div key={i}>  
                          <iframe width='500px' height='300px'  src={`https://www.youtube.com/embed/${item.id.videoId}`} title="video player" allowfullscreen></iframe>
                        </div>)
                    }
                </div>

            </div>
        </div>
    ) : navigate('/Login')
}

export default SearchPage