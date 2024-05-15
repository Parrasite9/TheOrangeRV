import React from 'react'
import { useScreenWidth } from '../Global/ScreenWidthContext'

function About() {

  const isMobile = useScreenWidth()

  return (
    <section className='about p-5 bg-cool-white'>
      {isMobile ? (
        <div className="about__mobile__container flex flex-col items-center px-5 ">
          <div className="about__img__container flex justify-center p-5">
            <img src="/images/about/about.jpeg" alt="about-img" className='w-1/2' />
          </div>
          <h2 className='m-5 font-bold text-lively-orange'>Who Are We?</h2>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil, fugit dolorum nisi voluptas dolor libero. Aspernatur voluptatibus optio eaque blanditiis numquam maxime, earum vero saepe neque, accusantium labore quam expedita quod enim? Officiis quod, praesentium id veniam aliquam voluptatem quisquam illum quo quae non voluptates libero autem consequatur quidem deserunt delectus, ipsa odio fugiat dolore! Eveniet officiis optio laboriosam consequatur harum odit. Cupiditate explicabo reiciendis ut aliquam ullam nam, magnam saepe cumque aut qui dolore minima autem nemo in! Illum nobis dolorum tempora odio, dolor minus odit officiis fugit eaque maxime nulla perspiciatis non unde voluptatem quo eveniet dolorem?</p>
        </div>
      ) : (
        <div className="about__desktop__container flex">
          <div className="about__img__container flex justify-center w-1/2">
            <img src="/images/about/about.jpeg" alt="about-img" className='h-[88%]' />
          </div>

          <div className="desktop__about__text w-1/2 flex items-center p-5">
            <div>
              <h2 className='font-bold text-lively-orange text-xl md:mb-5'>Who Are We?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil, fugit dolorum nisi voluptas dolor libero. Aspernatur voluptatibus optio eaque blanditiis numquam maxime, earum vero saepe neque, accusantium labore quam expedita quod enim? Officiis quod, praesentium id veniam aliquam voluptatem quisquam illum quo quae non voluptates libero autem consequatur quidem deserunt delectus, ipsa odio fugiat dolore! Eveniet officiis optio laboriosam consequatur harum odit. Cupiditate explicabo reiciendis ut aliquam ullam nam, magnam saepe cumque aut qui dolore minima autem nemo in! Illum nobis dolorum tempora odio, dolor minus odit officiis fugit eaque maxime nulla perspiciatis non unde voluptatem quo eveniet dolorem?</p>
            </div>
          </div>
        </div>
      )}
      
    </section>
  )
}

export default About
