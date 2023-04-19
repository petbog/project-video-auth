import { useSelector } from 'react-redux'
import classes from './TitleSearch.module.css'


const TitleSearch = () => {
    const {searchValue}= useSelector(state =>state.search)
    return (
        <div className="">
            <div className="">
                <div className={classes.title_container}>
                    <h3 className={classes.title_search}>Видео по запросу :</h3>
                    <p className={classes.title_search_inner}>{searchValue}</p>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}


export default TitleSearch