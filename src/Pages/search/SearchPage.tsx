import { useAuth } from '../../hooks/use-auth'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import classes from './SearchPage.module.css'
import SerchVideo from '../../Component/search/SerchVideo';
import { SearchDelector, SearchVideo } from '../../Redux/slise/SearchSlise';
import Video from '../../Component/video/Video';
import TitleSearch from '../../Component/TitleSearch/TitleSearch';
import grid_activ from '../../img/grid_activ.png'
import grid_desibel from '../../img/grid_desibel.png'
import list_activ from '../../img/list_activ.png'
import list_desibel from '../../img/list_desibel.png'
import setting from '../../img/setting.svg'
import MyPreloader from '../../preloader/Preloader'
import Modal from '../../Component/popup/Modal'
import { GetViewsCount, VieasSelector, setViews } from '../../Redux/slise/ViewsSlise';
import Header from '../../Component/Header/Header';
import { UserSelector } from '../../Redux/slise/UserSlice';
import { useAppDispatch } from '../../Redux';



//@ts-ignore
const SearchPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { item, searchValue, sort, countVideo } = useSelector(SearchDelector)
    const sortVideo = sort.typeSort
    //@ts-ignore
    const video = item.items
    const navigate = useNavigate()
    const { isAuth } = useAuth()
    const [statusGrid, setStatusGrid] = useState(grid_activ)
    const [statusList, setStatusList] = useState(list_desibel)
    const [statusGridTrue, setStatusGridTrue] = useState<boolean>(true)
    const [settingMenu, SetSettingMenu] = useState<boolean>(false)
    const imgRef = useRef(null)
    const { items, views } = useSelector(VieasSelector)
    const { email } = useSelector(UserSelector)
    //@ts-ignore
    const fullVideo = views.items


    useEffect(() => {
        const handleClickOutsade = (event: any) => {
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
            setStatusList(list_activ)
            setStatusGrid(grid_desibel)
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
            const idVideo = video.reduce((acc: any, item: any) => {
                acc.push(item.id.videoId)
                return acc
            }, [])
            dispatch(setViews(idVideo))
        }
    }, [video, dispatch])

    useEffect(() => {
        //@ts-ignore
        dispatch(GetViewsCount({items}))
    }, [items, dispatch])



    const skeleton = [...new Array(8)].map((_, i) => <MyPreloader key={i} />);
    if (email === '') {
        navigate('/Login')
    } else {
        return (
            <div className={classes.home}>
                <Header />
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
                                fullVideo ? fullVideo.map((item: string, i: number) =>
                                    <Video item={item} key={i} statusGridTrue={statusGridTrue} index={0} />
                                ) : skeleton
                            }
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default SearchPage