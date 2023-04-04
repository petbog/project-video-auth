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
import grid_activ from '../../img/grid_activ.png'
import grid_desibel from '../../img/grid_desibel.png'
import list_activ from '../../img/list_activ.png'
import list_desibel from '../../img/list_desibel.png'
import MyPreloader from '../../preloader/Preloader'




const SearchPage = () => {
    const dispatch = useDispatch()
    const { item, searchValue } = useSelector(state => state.search)
    const video = item.items
    const navigate = useNavigate()
    const { isAuth, email } = useAuth()
    const [statusGrid,setStatusGrid]=useState(grid_activ)
    const [statusList,setStatusList]=useState(list_desibel)
    const [statusGridTrue,setStatusGridTrue]=useState(true)

    const handleStatusVideoList=()=>{
        if(statusGrid === grid_activ){
            setStatusList(grid_desibel)
            setStatusGrid(list_activ)
            setStatusGridTrue(false)
        }else{
            setStatusList(list_desibel)
            setStatusGrid(grid_activ)
            setStatusGridTrue(true)
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
                    <div className={`${statusGrid === grid_activ ? classes.grid : classes.flex}`}>
                        {
                            video ?  video.map((item, index) =>
                                <Video item={item} key={index} statusGridTrue={statusGridTrue} />
                            ):skeleton
                        }
                    </div>
                    
                </div>

            </div>
        </div>
    ) : navigate('/Login')
}

export default SearchPage