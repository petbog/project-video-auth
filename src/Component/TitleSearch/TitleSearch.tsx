import { useSelector } from 'react-redux'
import classes from './TitleSearch.module.css'
import { SearchDelector } from '../../Redux/slise/SearchSlise'


const TitleSearch = () => {
    const {searchValue}= useSelector(SearchDelector)
    return (
        <div className="">
            <div className="">
                <div className={classes.title_container}>
                    <div className={classes.title_search}>Поиск видео :</div>
                    <p className={classes.title_search_inner}>{searchValue}</p>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}


export default TitleSearch