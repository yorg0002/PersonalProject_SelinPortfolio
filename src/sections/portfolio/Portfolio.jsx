import './portfolio.css'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
       Here are some of the projects I recently worked on.
      </p>
      <div className="container portfolio__container">
       
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio