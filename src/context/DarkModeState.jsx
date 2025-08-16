import React, { useState } from 'react'
import { darkModeContext } from './darkModeContext'
const DarkModeState = (props) => {
    const [isdarkOn, setisdarkOn] = useState(false);
  return (
    <darkModeContext.Provider value={{isdarkOn, setisdarkOn}} >
        {props.children}
    </darkModeContext.Provider>
  )
}

export default DarkModeState