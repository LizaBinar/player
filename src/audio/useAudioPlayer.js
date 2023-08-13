import {useState, useEffect, useRef, useCallback} from 'react';

const useAudioPlayer = (src) => {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const timerRef = useRef(null);

    const updateAudio = useCallback(() => {
        if (audio) {
            audio.src = src;
            setDuration(audio.duration);
            setCurrentTime(0);
            setIsPlaying(false);
        } else {
            const newAudio = new Audio(src);
            newAudio.onloadedmetadata = () => setDuration(newAudio.duration);
            newAudio.onended = () => setIsPlaying(false);
            newAudio.oncanplaythrough = () => setAudio(newAudio);
        }
    }, [audio, src]);

    useEffect(() => {
        updateAudio();
    }, [updateAudio]);

    useEffect(() => {
        if (!audio) return;

        audio.volume = volume;
        audio.onloadedmetadata = () => setDuration(audio.duration);
        audio.onended = () => setIsPlaying(false);

        if (isPlaying) {
            audio.play();
            timerRef.current = setInterval(() => {
                setCurrentTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            audio.pause();
            clearInterval(timerRef.current);
        }

        return () => {
            clearInterval(timerRef.current);
            audio.onloadedmetadata = null;
        };
    }, [isPlaying, audio, volume]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const setVolumeLevel = (level) => {
        if (audio) {
            audio.volume = level;
            setVolume(level);
        }
    };

    const mute = () => {
        if (audio) {
            audio.volume = 0;
            setVolume(0);
        }
    };

    const maxVolume = () => {
        if (audio) {
            audio.volume = 1;
            setVolume(1);
        }
    };

    const seek = (time) => {
        if (audio) {
            audio.currentTime = time;
            setCurrentTime(time);
        }
    };

    return {
        play: () => setIsPlaying(true),
        pause: () => setIsPlaying(false),
        togglePlay,
        setVolume: setVolumeLevel,
        mute,
        maxVolume,
        seek,
        isPlaying,
        volume,
        currentTime,
        duration,
    };
};

export default useAudioPlayer;
