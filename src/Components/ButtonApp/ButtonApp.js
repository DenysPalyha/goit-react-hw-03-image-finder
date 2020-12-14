import React from 'react';
import styles from './ButtonApp.module.scss';


const ButtonApp = ({hendleButtonApp}) =>{
   return (
      <button type="button" className={styles.buttonApp} onClick={hendleButtonApp}></button>
   )
}

export default ButtonApp;