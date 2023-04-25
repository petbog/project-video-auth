import { useEffect, useRef, useState } from 'react'
import classes from './SerchVideo.module.css'
import { useDispatch } from 'react-redux'
import { getSearchValue } from '../../Redux/slise/SearchSlise'
import close from '../../img/close.svg'
import icons_search from '../../img/icons_search.svg'




const SerchVideo = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const keyRef = useRef()


    const onChangeInput = (e) => {
        setValue(e.target.value)
    }

    const onClickButton = () => {
        dispatch(getSearchValue(value))
        setValue('')
    }

    const onClickImgClose = () => {
        setValue('')
    }

    useEffect(() => {
        document.addEventListener('keydown', setKey)

    }, [value])

    const setKey = (e) => {
        if (e.key === 'Enter') {
            dispatch(getSearchValue(value))
            setValue('')
        }
    }


    return (
        <div className={classes.search}>
            <img className={classes.icons_search} src={icons_search} alt="" />
            <input
                ref={keyRef}
                value={value}
                onChange={onChangeInput}
                className={classes.search_input}
                type="text"
                placeholder='Что хотите посмотреть?'
            />
            {
                value.length ? <img onClick={onClickImgClose} className={classes.close} src={close} alt="" /> : ''
            }

            <button
                onKeyDown={setKey}
                onClick={onClickButton}
                className={classes.search_button}>Найти
            </button>
        </div>
    )
}

export default SerchVideo