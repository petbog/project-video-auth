import { useState } from 'react'
import classes from './SerchVideo.module.css'




const SerchVideo = () => {
    const [value, setValue] = useState('')

    const onChangeInput = (e) => {
        setValue(e.target.value)
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
                className={classes.search_button}>Найти
            </button>
        </div>
    )
}

export default SerchVideo