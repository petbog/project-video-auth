import { useState } from 'react'
import classes from './Modal.module.css'

const Modal = () => {
    const [value, setValue] = useState(20)

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className={classes.modal}>
            <div className={classes.modal_container}>
                <div className={classes.modal_items}>
                    <p className={classes.modal_title}>Запрос</p>
                    <input type='text' className={classes.modal_input} placeholder='чем кормить кота' />
                </div>
                <div className={classes.modal_items}>
                    <p className={classes.modal_title}>* Название</p>
                    <input type='text' className={classes.modal_input} placeholder='Укажите название' />
                </div>
                <div className={classes.modal_items}>
                    <p className={classes.modal_title}>Сортировать по</p>
                    <input type='text' className={classes.modal_input} placeholder='Без сортировки' />
                </div>
                <div className={classes.slider_container}>
                    <div className="">
                        <p className={classes.slider_text}>Максимальное количество</p>
                        <input
                            className={classes.slider_input}
                            value={value}
                            type="range"
                            onChange={handleChange}
                            min={0}
                            max={20}
                            step={1}
                        />
                    </div>
                    <p className={classes.slider_value} >{value}</p>
                </div>

                <div className={classes.button_container}>
                    <button className={classes.button_dontsave}>Не сохранять</button>
                    <button className={classes.button_save}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default Modal