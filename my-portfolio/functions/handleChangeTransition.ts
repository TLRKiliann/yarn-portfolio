import React from 'react'
import styles from '@/styles/About.module.scss'

interface BoolStylesProps {
  boolStyles: boolean
}

export const handleChangeTransition = ({ boolStyles }: BoolStylesProps) => {
  if (boolStyles === true) {
    return `${styles.paragraphaboutfirst}`
  } else {
    return `${styles.paragraphaboutrevert}`
  }
}