export default function generateTimeString(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return '0:00';
    }
    number = Math.floor(number)

    const seconds = number % 60;
    const minutes = (number - seconds) / 60;
    const minutesString = minutes.toString();
    const secondsString = seconds.toString().padStart(2, '0');

    return `${minutesString}:${secondsString}`;
}
