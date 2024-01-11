import classes from './audioButton.module.css';

const AudioButton = ({ src }: { src: string }) => {
  const audio = new Audio(src);

  const handleAudio = () => {
    void audio.play();
  };

  return (
    <button onClick={handleAudio} className={classes.wrapper}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#BFD1FF" />
        <path d="M43 32L26.5 41.5263L26.5 22.4737L43 32Z" fill="#3F6EE6" />
      </svg>
    </button>
  );
};
export default AudioButton;
