import MySlider from "../../../UI/MySlider/MySlider";

import volumeMax from "../../../assets/icons/volume-max.svg"
import volumeMin from "../../../assets/icons/volume-min.svg"
import css from "./ValueSlider.module.css"

const ValueSlider = ({value, changeVolume}) => {
    const styleValueMax = (value === 1) ? {opacity: 1} : {opacity: 0.5}
    const styleValueMin = (value === 0) ? {opacity: 1} : {opacity: 0.5}

    const handleChange = (value) => {
        changeVolume(value / 100)
    }

    const valueMin = () => {
        changeVolume(0)
    }

    const valueMax = () => {
        changeVolume(1)
    }

    return (
        <div className={css.container}>
            <img style={styleValueMin} onClick={valueMin} className={css.icon} src={volumeMin} alt="volume min"/>
            <MySlider min={0} max={100} onChange={handleChange} value={value * 100}/>
            <img style={styleValueMax} onClick={valueMax} className={css.icon} src={volumeMax} alt="volume max"/>
        </div>
    )
};

export default ValueSlider;
