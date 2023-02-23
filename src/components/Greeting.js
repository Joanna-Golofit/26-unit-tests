import React, { useState } from 'react'

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const setTextHandler = () => {
    setChangedText(!changedText)
  }

  return (
    <>
      <div>Greeting</div>
      <p>tutaj</p>
      <button onClick={setTextHandler}>Change text!</button>
      {/* <p>{changedText ? "tak" : "nie"}</p> */}
      {changedText && <p>tak</p>}
      {!changedText && <p>nie!</p>}
    </>
  )
}

export default Greeting