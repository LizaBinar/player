import Card from "../../UI/Card/Card";
import useAudioPlayer from "../../audio/useAudioPlayer";
import ValueSlider from "./ValueSlider/ValueSlider";
import TrackLength from "./TrackLength/TrackLength";
import extractFileNameFromURL from "../../helpers/extractFileNameFromURL/extractFileNameFromURL";

import play from '../../assets/icons/play.svg'
import pause from '../../assets/icons/pause.svg'
import css from "./Player.module.css"

const Player = ({src}) => {
    const {
        togglePlay,
        setVolume,
        seek,
        isPlaying,
        volume,
        currentTime,
        duration
    } = useAudioPlayer(src);

    return (
        <Card className={css.card}>
            <p className={css.title}>{extractFileNameFromURL(src)}</p>
            <button className={css.btnPlay} onClick={togglePlay}>
                {isPlaying ?
                    <img src={pause} alt={pause} /> : <img src={play} alt={play} />}
            </button>
            <TrackLength currentTime={currentTime} duration={duration} seek={seek}/>
            <ValueSlider value={volume} aria-label="Volume" changeVolume={setVolume}/>
        </Card>
    );
};

export default Player;
