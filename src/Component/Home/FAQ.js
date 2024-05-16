import React from 'react'

function FAQ() {
  return (
    <section className='faq__container mb-5 px-8'>
      <ul className="max-w-2xl mx-auto mt-20 divide-y shadow shadow-lively-orange rounded-xl text-center">
        <li>
          <details className="group">
            <summary className="flex items-center justify-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
              <svg className="w-5 h-5 text-lively-orange transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg>
              <span className="w-full text-center">Do you do financing?</span>
            </summary>
            <article className="px-4 pb-4 text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
        </li>
        <li>
          <details className="group">
            <summary className="flex items-center justify-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
              <svg className="w-5 h-5 text-lively-orange transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg>
              <span className="w-full text-center">Can I make payments on a RV?</span>
            </summary>
            <article className="px-4 pb-4 text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
        </li>
        <li>
          <details className="group">
            <summary className="flex items-center justify-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
              <svg className="w-5 h-5 text-lively-orange transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg>
              <span className="w-full text-center">How often do you get new inventory?</span>
            </summary>
            <article className="px-4 pb-4 text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
        </li>
        <li>
          <details className="group">
            <summary className="flex items-center justify-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
              <svg className="w-5 h-5 text-lively-orange transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg>
              <span className="w-full text-center">Do I get a title on purchase?</span>
            </summary>
            <article className="px-4 pb-4 text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
        </li>
      </ul>
    </section>

  )
}

export default FAQ
