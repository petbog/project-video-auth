import classes from './Video.module.css'


const Video = ({ item, index, statusGridTrue }) => {

    return (
        <div className="">
            <div className={`${statusGridTrue ? '' : classes.video_container}`}>
                <iframe
                    className={classes.video}
                    key={index}
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    allowfullscreen="allowfullscreen"
                    title='video'
                ></iframe>
                <div className={classes.video_container_text}>
                    <p className={`${statusGridTrue ? classes.video_title : classes.video_title_flex}`}>{item.snippet.title}</p>
                    <p className={`${statusGridTrue ? classes.video_title_plaulist : classes.video_title_plaulist_flex}`}>{item.snippet.channelTitle}</p>
                    {/* <img src={item.snippet.thumbnails.medium.url} alt="" /> */}
                </div>

            </div>
        </div>
    )
}

export default Video