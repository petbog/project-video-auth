import { useAuth } from '../../hooks/use-auth'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../Redux/slise/UserSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import classes from './SearchPage.module.css'
import SerchVideo from '../../Component/search/SerchVideo';
import { SearchVideo } from '../../Redux/slise/SearchSlise';
import Video from '../../Component/video/Video';
import TitleSearch from '../../Component/TitleSearch/TitleSearch';
import grid_activ from '../../img/grid_activ.png'
import grid_desibel from '../../img/grid_desibel.png'
import list_activ from '../../img/list_activ.png'
import list_desibel from '../../img/list_desibel.png'
import setting from '../../img/setting.svg'
import MyPreloader from '../../preloader/Preloader'
import simons from '../../img/92513305_simons_cat_013450x450svg.png'
import Modal from '../../Component/popup/Modal'
import { GetViewsCount, setViews } from '../../Redux/slise/ViewsSlise';




const SearchPage = () => {
    const dispatch = useDispatch()
    const { item, searchValue, sort, countVideo } = useSelector(state => state.search)
    const sortVideo = sort.typeSort
    const video = item.items
    const navigate = useNavigate()
    const { isAuth, email } = useAuth()
    const [statusGrid, setStatusGrid] = useState(grid_activ)
    const [statusList, setStatusList] = useState(list_desibel)
    const [statusGridTrue, setStatusGridTrue] = useState(true)
    const [settingMenu, SetSettingMenu] = useState(false)
    const imgRef = useRef(null)
    const { items, views } = useSelector(state => state.views)
    const fullVideo = views.items



    useEffect(() => {
        const handleClickOutsade = (event) => {
            if (imgRef.current && !event.composedPath().includes(imgRef.current)) {
                // SetSettingMenu(false)
            }
        }
        document.body.addEventListener('click', handleClickOutsade)

        return () => {
            document.body.removeEventListener('click', handleClickOutsade)
        }
    }, [])

    const handleStatusVideoList = () => {
        if (statusGrid === grid_activ) {
            setStatusList(grid_desibel)
            setStatusGrid(list_activ)
            setStatusGridTrue(false)
        } else {
            setStatusList(list_desibel)
            setStatusGrid(grid_activ)
            setStatusGridTrue(true)
        }
    }

    useEffect(() => {
        dispatch(SearchVideo({
            searchValue,
            countVideo,
            sortVideo
        }))
    }, [dispatch, searchValue, countVideo, sortVideo])


    useEffect(() => {
        if (video) {
            const idVideo = video.reduce((acc, item) => {
                acc.push(item.id.videoId)
                return acc
            }, [])
            dispatch(setViews(idVideo))
        }
    }, [video, dispatch])

    useEffect(() => {
        dispatch(GetViewsCount({
            items
        }))
    }, [items, dispatch])



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
                <img className={classes.simon} src={simons} alt="" />
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
                            <img onClick={() => SetSettingMenu(!settingMenu)} ref={imgRef} className={classes.img_sort_setting} src={setting} alt="" />
                            {
                                settingMenu && <Modal />
                            }
                        </div>
                    </div>
                    <div className={`${statusGrid === grid_activ ? classes.grid : classes.flex}`}>
                        {
                            fullVideo ? fullVideo.map((item, index) =>
                                <Video item={item} key={index} statusGridTrue={statusGridTrue} />
                            ) : skeleton
                        }
                    </div>

                </div>

            </div>
        </div>
    ) : navigate('/Login')
}

export default SearchPage