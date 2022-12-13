import React, { useEffect, useState } from 'react'
import { IRepo } from '../types/gitHubData';
import styles from "./projects.module.scss"


type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {

  const endpoint = "https://api.github.com/users/GolyshMariia/repos";
  const [githubData, setGithubData] = useState<IRepo[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then(x => x.json())
      .then(x => setGithubData(x))
  }, [])
  return (
    <div className={styles.cont}>
      <div className={styles.list}>
        {
          githubData && githubData.map(x => (
            <div key={x.id} className={styles.box}>
              <h4 className={styles.title}>{x.name}</h4>
              <p className={styles.text}>{x.description}</p>
              <a href={x.html_url} target="_blanc" rel='noreferrer'><h4 className={styles.a}>Open in GitHub</h4></a>
            </div>
          ))
          
        }
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Is59Cch1g0w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
    </div>
  )
}
export default Projects
