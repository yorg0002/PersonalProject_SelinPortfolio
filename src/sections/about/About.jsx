import AboutImage from '../../assets/assets/about.jpg'
import CV from '../../assets/assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                As a new Computer Programming graduate, I am looking for a chance to gain experience in my field!
                </p>
                <p> 
                Hi, my name is Ece Selin Yorgancilar. I'm a full-stack web developer candidate with a Ontario College Diploma in Computer Programming, graduating with honors and a high GPA from Algonquin College.
                </p>
                <p>
                I have a strong foundation in computer programming and quality assurance, and I'm actively seeking opportunities to gain practical experience in the field. I love working in teams and I'm always eager to learn and grow.
                For a detailed overview of my qualifications, please take a look at my attached resume!
                </p>
                <a href={CV} download className='btn primary'>Download Resume <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About