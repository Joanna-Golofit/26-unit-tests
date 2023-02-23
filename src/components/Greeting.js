import React, { useState } from 'react'
import Output from './Output';

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
      {changedText && <Output>tak</Output>}
      {!changedText && <Output>nie!</Output>}
    </>
  )
}

export default Greeting