'use client'
import React, { FC, ReactNode } from 'react';
import styles from './Button.module.scss';


interface IProps {
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void
  type?: 'button' | 'reset' | 'submit'
}

const Button: FC<IProps> = ({children, onClick, type}) => {
  return (
    <button type={type} onClick={ (e)=> onClick ? onClick(e) : null}  className={styles.root} >{children}</button>
  )
}

export default Button