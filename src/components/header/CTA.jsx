import React from 'react'
import CV from '../../assets/RESUME.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} download>Download CV</a>
        <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA