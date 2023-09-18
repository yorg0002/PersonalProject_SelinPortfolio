import faqs from './data'
import FAQ from './Q'
import './faqs.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const FAQs = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <section id="faqs">
      <h2>Questions and Answers</h2>
      <p>
      Here are some additional information about me. Click to toggle the answer, and if you have more questions, you can send me message from the contact section!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs