import React from 'react'
import styles from "./styles.module.css"

const index = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default index