import '../style/Firework.css';

const Firework = () => {
  const randomColor = getRandomColor();

  const randomPosition = {
    top: `${Math.random() * 100}vh`, // Random vertical position
    left: `${Math.random() * 100}vw`, // Random horizontal position
  };

  const randomSize = Math.random() * 10 + 5; // Random size between 5 and 15 pixels

  const randomAnimationDuration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds

  const fireworkStyle = {
    ...randomPosition,
    width: `${randomSize}px`,
    height: `${randomSize}px`,
    backgroundColor: randomColor,
    animation: `explode ${randomAnimationDuration}s ease-out`,
  };

  return <div className="firework" style={fireworkStyle}></div>;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default Firework;
