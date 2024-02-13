import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <h1>{count}</h1>
        <div className="d-flex flex-row gap-2">
          <Button
            className={styles.addToCartBtn}
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </Button>
          <Button
            variant="secondary"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
