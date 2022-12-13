import React from 'react'
import styles from './homeMyComponent.module.scss'


type HomeMyComponentProps = {

}

const HomeMyComponent: React.FC<HomeMyComponentProps> = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>Welcome to my page</span>
        </h1>
  <p>Maria Golysh</p>
</div>
  )
}

export default HomeMyComponent
