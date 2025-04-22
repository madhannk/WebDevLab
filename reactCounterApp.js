import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif',
    },
    count: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    button: {
      margin: '0 5px',
      padding: '10px 15px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.count}>Counter: {count}</div>
      <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
      <button style={styles.button} onClick={() => setCount(count - 1)}>-</button>
      <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
