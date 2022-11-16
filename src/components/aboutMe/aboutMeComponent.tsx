import React from 'react'
import styles from './aboutMeComponent.module.scss'


type AboutMeComponentProps = {

}

const AboutMeComponent: React.FC<AboutMeComponentProps> = () => {
  return (
    <div className={styles.container}>
  <h1>Welcome to my page</h1>
  <p>Mariia Golysh</p>
</div>
  )
}

export default AboutMeComponent
