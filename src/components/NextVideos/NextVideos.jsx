import "../NextVideos/NextVideos.scss";
import videoDetails from "../../data/video-details.json";
import { useState } from "react";
import Video from "../Video/Video";

function NextVideos({avatar}) {
    const [playingVideo, setPlayingVideo] = useState(videoDetails[0]);
    const videoList = videoDetails.filter((Video)=> video.id !== playingVideo.id);

    function handleClick (obj) {
        setPlayingVideo(obj);
    }

    return (
        <div className ="NextVideos">
        <playingVideo playingVideo={playingVideo}/>
        <div className="NextVideos__content">
            <div className="NextVideos__playing-video">
                <videoDetails playingVideo={playingVideo}/>
                <CommentForm playingVideo={playingVideo}/>
                <CommentList playingVideo={playingVideo}/>
            </div>
            <videoList NextVideos={videoList} handleClick={handleClick}/>
        </div>
        </div>
    )

};

export default NextVideos;


