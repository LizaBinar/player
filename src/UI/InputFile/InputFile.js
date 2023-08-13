import css from "./InputFile.module.css";

const InputFile = ({onChange}) => {
    return (
        <label className={css.customFileInput}>
            Choose Audio File
            <input className={css.inputFile} type="file" accept="audio/*" onChange={onChange} />
        </label>
    );
};

export default InputFile;
