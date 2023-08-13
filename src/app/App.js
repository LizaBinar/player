import Player from "../components/Player/Player";
import AnimatedBackground from "../UI/AnimatedBackground/AnimatedBackground";
import {useState} from "react";
import InputFile from "../UI/InputFile/InputFile";

import css from './App.module.css'
import audioFile from '../assets/audio/see_you_again.mp3'

function App() {
    const [file, setFile] = useState(audioFile)
    console.log(file)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(URL.createObjectURL(file))
        setFile(URL.createObjectURL(file));
    };

    return (
            <AnimatedBackground className={css.app}>
                    <InputFile onChange={handleFileChange} />
                    <Player src={file} className={css.customPlayer} />
            </AnimatedBackground>
    );
}

export default App;
