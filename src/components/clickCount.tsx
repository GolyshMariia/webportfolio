import React, { useEffect, useState } from 'react'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   document.title = 'Clicked the button ${count} times';
  }
  )

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ClickCount
