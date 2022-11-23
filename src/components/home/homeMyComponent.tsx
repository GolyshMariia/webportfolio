import React from 'react'
import styles from './homeMyComponent.module.scss'


type HomeMyComponentProps = {

}

const HomeMyComponent: React.FC<HomeMyComponentProps> = () => {
  return (
    <div className={styles.container}>
  <h1>Welcome to my page</h1>
  <p>Mariia Golysh</p>
</div>
  )
}

export default HomeMyComponent
