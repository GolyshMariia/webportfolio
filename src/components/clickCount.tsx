import React, { useEffect, useState } from 'react'
import styles from "./clickCount.module.scss";

 type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   document.title = `Clicked the button ${count} times`;
  }
  )

  return (
    <div className={styles.container}>
        <p>You clicked {count} times</p>
        <button className={styles.btn} onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ClickCount 
