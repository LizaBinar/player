import {useEffect, useState} from 'react';
import generateTimeString from "../../../helpers/generateTimeString/generateTimeString";
import MySlider from "../../../UI/MySlider/MySlider";

import css from './TrackLength.module.css'


const TrackLength = ({currentTime, duration, seek}) => {
    const [value, setValue] = useState(currentTime)
    const [mouseDown, setMouseDown] = useState(false)

    useEffect(() => {
        if(!mouseDown) {
            setValue(currentTime)
        }
    }, [currentTime])

    const onMouseUp = () => {
        setMouseDown(false)
        seek(value)
    }

    const onMouseDown = () => {
        setMouseDown(true)
    }

    const onChange = (value) => {
        setValue(value)
    }

    return (
        <div className={css.container}>
            <p>{generateTimeString(value)}</p>
            <div className={css.sliderContainer} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>
                <MySlider min={0} max={duration} value={value} onChange={onChange}/>
            </div>
            <p>{generateTimeString(duration)}</p>
        </div>
    );
};

export default TrackLength;
