import css from './MySlider.module.css'

const MySlider = ({ min, max, value, onChange }) => {

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value);
        onChange(newValue);
    };

    return (
        <div className={css.sliderContainer}>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleSliderChange}
            />
        </div>
    );
};

export default MySlider;
