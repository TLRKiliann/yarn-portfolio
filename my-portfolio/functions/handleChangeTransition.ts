import React from 'react'
import styles from '@/styles/Evolution.module.scss'

interface BoolStylesProps {
  boolStyles: boolean
}

export const handleChangeTransition = ({ boolStyles }: BoolStylesProps) => {
  if (boolStyles === true) {
    return `${styles.paragraphevofirst}`
  } else {
    return `${styles.paragraphevorevert}`
  }
}