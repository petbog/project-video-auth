import classes from './Video.module.css'


const Video = ({ item, index }) => {

    return (
        <div className="">
            <div className={classes.video_container}>
                <iframe
                    className={classes.video}
                    key={index}
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    allowfullscreen="allowfullscreen"
                ></iframe>
                <p className={classes.video_title}>{item.snippet.title}</p>
                <p className={classes.video_title_plaulist}>{item.snippet.channelTitle}</p>
                {/* <img src={item.snippet.thumbnails.medium.url} alt="" /> */}
            </div>
        </div>
    )
}

export default Video