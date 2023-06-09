
import classes from './Video.module.css'

type VideoPropsType = {
    item: any,
    index: number,
    statusGridTrue: boolean
}

const Video: React.FC<VideoPropsType> = ({ item, index, statusGridTrue }) => {

    return (
        <div className="">
            <div className={`${statusGridTrue ? '' : classes.video_container}`}>
                <iframe
                    className={`${statusGridTrue ? classes.video : classes.video_flex}`}
                    key={index}
                    src={`https://www.youtube.com/embed/${item.id}`}
                    // @ts-ignore
                    allowFullScreen="allowfullscreen"
                    title='video'
                ></iframe>
                <div className={classes.video_container_text}>
                    <p className={`${statusGridTrue ? classes.video_title : classes.video_title_flex}`}>{item.snippet.title}</p>
                    <p className={`${statusGridTrue ? classes.video_title_plaulist : classes.video_title_plaulist_flex}`}>{item.snippet.channelTitle}</p>
                    <div className={classes.views}>
                        <span className={classes.views_item} > {item.statistics.viewCount}</span><span>  тыс.просмотров </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Video