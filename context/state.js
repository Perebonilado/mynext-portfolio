import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
const [isMenuClosed, setIsMenuClosed] = useState(true)
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [clientWidth, setClientWidth] = useState(null)

const checkWidth = () => {
  setClientWidth((prevState)=>{
    return prevState = window.outerWidth
  })
}

useEffect(() => {
  window.addEventListener('resize', checkWidth)

  if (clientWidth <= 800) {
    setIsMenuClosed(true)
    setIsMenuOpen(false)
  }
  
  return () => {
    window.removeEventListener('resize', checkWidth)
  }
}, [clientWidth])


let sharedState = {
    setIsMenuClosed, 
    setIsMenuOpen, 
    isMenuOpen, 
    isMenuClosed
}

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}