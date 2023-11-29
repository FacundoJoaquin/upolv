import React from 'react'
import styles from './Li.module.css'
import clsx from 'clsx'

const Li = ({children}) => {
  return (
    <li className={styles.box}>{children}</li>
  )
}

export default Li