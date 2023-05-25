import React, { useCallback, useEffect, useRef, useState } from 'react'
import classes from './Modal.module.css'
import {  useSelector } from 'react-redux'
import { setCountVideo, setSortType } from '../../Redux/slise/SearchSlise'
import simons from '../../img/imagesSimon.png'
import { debounce } from 'lodash'
import { useAppDispatch } from '../../Redux'
import { SearchDelector } from '../../Redux/slise/SearchSlise'


const Modal:React.FC = () => {

    type sortTypeVideoType={
        name:string,
        typeSort:string,
    }
     const sortTypeVideo:sortTypeVideoType[] = [
        { name: 'Дата', typeSort: 'date' },
        { name: 'Рейтинг', typeSort: 'rating' },
        { name: 'Актуальность', typeSort: 'relevance' },
        { name: 'Название', typeSort: 'title' },
    ]
    const dispatch = useAppDispatch()
    const { sort, countVideo } = useSelector(SearchDelector)
    //в useReff был false
    const modalRef = useRef<HTMLDivElement >(null)
    const [searchMenu, SetsearchMenu] = useState(false);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCountVideo(Number(e.target.value))
        handleChangeDebounse(e.target.value)
    }

    const handleChangeDebounse = useCallback(
        debounce((value:string) => {
            dispatch(setCountVideo(Number(value)));
        }, 100), []
    )

    const activSortVideo = (obj:sortTypeVideoType) => {
        dispatch(setSortType(obj))
        SetsearchMenu(false)
    }
    useEffect(() => {
        const handleClickOutsade = (event:any) => {
            if (modalRef.current && !event.composedPath().includes(modalRef.current)) {
                SetsearchMenu(false)
            }
        }
        document.body.addEventListener('click', handleClickOutsade)

        return () => {
            document.body.removeEventListener('click', handleClickOutsade)
        }
    }, [])
    return (
        <div ref={modalRef} className={classes.modal}>
            <div className={classes.modal_container}>
                <div className={classes.modal_items}>
                    <span onClick={() => { SetsearchMenu(!searchMenu) }} className={classes.modal_title}>Сортировать по :</span>
                    <span className={classes.activSearch} onClick={() => { SetsearchMenu(!searchMenu) }} >{sort.name}</span>
                    <div className={classes.modal_input}>
                        {
                            !searchMenu ? <img className={classes.searchImg} src={simons} alt='img' /> : sortTypeVideo.map((obj) => <li
                                className={`${sort.typeSort === obj.typeSort ? classes.activ : ''}`}
                                onClick={() => { activSortVideo(obj) }}
                                key={obj.name}>
                                {obj.name}
                            </li>)
                        }
                    </div>
                </div>
                <div className={classes.slider_container}>
                    <div className={classes.slider_box}>
                        <input
                            className={classes.slider_input}
                            value={countVideo}
                            type="range"
                            onChange={handleChange}
                            min={0}
                            max={20}
                            step={1}
                        />
                    </div>
                    <div className="">
                        <p className={classes.slider_text}>Максимальное количество</p>
                        <p className={classes.slider_value} >{countVideo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal