import './App.css';

import {useRef} from 'react';

const App = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.style.backgroundColor = 'salmon';
    ref.current.style.color = 'white';
    ref.current.style.padding = '2rem';
    ref.current.style.width = '300px';
  };

  return (
    <div>
      <button onClick={handleClick}>Change styles</button>

      <br />
      <br />

      <div ref={ref}>bobbyhadz.com</div>
    </div>
  );
};

export default App;
