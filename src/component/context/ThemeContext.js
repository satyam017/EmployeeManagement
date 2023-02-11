import React , {createContext, useEffect, useState} from 'react'
export const  ThemeContext =  createContext({});


const Theme = ({children})=>{
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
    setTheme('dark')
    }, [])
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    )
}

export default Theme