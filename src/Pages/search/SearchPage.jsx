import { useAuth } from '../../hooks/use-auth'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './SearchPage.module.css'
import SerchVideo from '../../Component/search/SerchVideo';
import { SearchVideo } from '../../Redux/slise/SearchSlise';
import Video from '../../Component/video/Video';
import TitleSearch from '../../Component/TitleSearch/TitleSearch';
import grid from '../../img/grid.svg'
import list from '../../img/list.svg'
import MyPreloader from '../../preloader/Preloader'




const SearchPage = () => {
    const dispatch = useDispatch()
    const { item, searchValue } = useSelector(state => state.search)
    const video = item.items
    const searchVideos = searchValue
    console.log(searchVideos)
    const navigate = useNavigate()
    const { isAuth, email } = useAuth()
    const [statusGrid,setStatusGrid]=useState(grid)
    const [statusList,setStatusList]=useState(list)

    const handleStatusVideoList=()=>{
        if(statusGrid === grid){
            setStatusList(grid)
            setStatusGrid(list)
        }else{
            setStatusList(list)
            setStatusGrid(grid)
        }
    }

    useEffect(() => {
        dispatch(SearchVideo({
            searchValue
        }))
    }, [dispatch, searchValue])


    useEffect(() => {
        if (!isAuth) {
            navigate('/Login')
        }
    }, [isAuth, navigate])

    const skeleton = [...new Array(8)].map((_, i) => <MyPreloader key={i} />);
    
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
                    <div className={classes.titleSearch}>
                        <TitleSearch />
                        <div className={classes.img_sort}>
                            <img onClick={handleStatusVideoList} className={classes.img_sort_list} src={statusGrid} alt="" />
                            <img onClick={handleStatusVideoList} className={classes.img_sort_list} src={statusList} alt="" />
                        </div>
                    </div>
                    <div className={`${statusGrid === grid ? classes.grid : classes.flex}`}>
                        {
                            video ?  video.map((item, index) =>
                                <Video item={item} key={index}  />
                            ):skeleton
                        }
                    </div>
                    
                </div>

            </div>
        </div>
    ) : navigate('/Login')
}

export default SearchPage