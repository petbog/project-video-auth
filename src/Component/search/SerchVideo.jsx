import { useState } from 'react'
import classes from './SerchVideo.module.css'
import { useDispatch } from 'react-redux'
import { getSearchValue } from '../../Redux/slise/SearchSlise'




const SerchVideo = () => {
    const dispatch =useDispatch()
    const [value, setValue] = useState('')

    const onChangeInput = (e) => {
        setValue(e.target.value)
    }

    const onClickButton=()=>{
        dispatch(getSearchValue(value))
        setValue('')
    }

    return (
        <div className={classes.search}>
            <input
                value={value}
                onChange={onChangeInput}
                className={classes.search_input}
                type="text"
                placeholder='Что хотите посмотреть?'
            />
            <button
            onClick={onClickButton}
                className={classes.search_button}>Найти
            </button>
        </div>
    )
}

export default SerchVideo