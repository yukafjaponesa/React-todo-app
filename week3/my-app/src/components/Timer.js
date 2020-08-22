import React, {useState, useEffect} from "react"

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <p>You have used {count} seconds on this website.</p>
    </div>
  )
}

export default Timer
