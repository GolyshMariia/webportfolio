import React from 'react'
import styles from './cv.module.scss'
import Photo from './forcv.png';
type CVProps = {

}


const CV: React.FC<CVProps> = () => {
  return (
    <div>
      <div className={styles.text}>
      <h1>...</h1>
      <h1>EDUCATION</h1>
      <p>Russian Theater Institute         2008 - 2012</p>
      <p>CareeriaPlus                      26.10.2020 - 28.04.2021</p>
      <p>Vantaan ammattiopisto Varia       16.08.2021 - 06.2024</p>

      <h1>WORK</h1>
      <h2>Theater director    2010 - 2014</h2>
      <p>Children's theater studio (Russia Moscow)</p>
      <h2>Photographer        2014 - 2015</h2>
      <p>Chamber college (Malta)</p>
      <h2>Beauty salon manager     2016 - 2019</h2>
      </div>
      <img className={styles.img} src={Photo} alt='photo'></img>
    </div>
     
    
    
    
  )
}

export default CV
