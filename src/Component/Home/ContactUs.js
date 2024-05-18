import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function ContactUs() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-dark-gray md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-lively-orange">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>

            <div className="flex items-center mt-5">
              <svg
                className="h-6 mr-2 text-lively-orange"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 489.536 489.536"
                enableBackground="new 0 0 489.536 489.536"
              >
                <g>
                  <g>
                    <path
                      d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,0 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z"
                    />
                    <rect width="136.5" x="177.054" y="379.1" height="20.8" />
                    <path
                      d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,0-27.1-12.5-27.1-27.1z"
                    />
                  </g>
                </g>
              </svg>
              <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
            </div>
            <div className="flex items-center mt-5">
              {/* <svg
                className="h-6 mr-2 text-lively-orange"
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 60.002 60.002"
                style={{ enableBackground: 'new 0 0 60.002 60.002' }}
              >
                <g>
                  <path
                    d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693
                        c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z"
                  />
                  <path
                    d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1
                        C54.65,34.033,56.267,35.65,58.256,35.65z"
                  />
                  <path
                    d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693
                        c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z"
                  />
                  <path
                    d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1
                        c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z"
                  />
                  <path
                    d="M44.076,37.889c-1.276-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.996,1.546
                        c-1.02,1.22-2.286,2.646-2.592,2.867c-2.367,1.604-4.25,1.415-6.294-0.629L17.987,29.542c-2.045-2.045-2.233-3.928-0.631-6.291
                        c0.224-0.31,1.65-1.575,2.87-2.596c0.778-0.464,1.312-1.152,1.546-1.996c0.311-1.123,0.082-2.444-0.652-3.731
                        c-0.173-0.296-4.291-7.27-8.085-9.277c-1.926-1.019-4.255-0.669-5.796,0.872L4.7,9.059c-4.014,4.014-5.467,8.563-4.321,13.52
                        c0.956,4.132,3.742,8.529,8.282,13.068l14.705,14.706c5.762,5.762,11.258,8.656,16.298,8.656c3.701,0,7.157-1.562,10.291-4.695
                        l2.537-2.537c1.541-1.541,1.892-3.87,0.872-5.795C51.347,42.181,44.371,38.057,44.076,37.889z M49.212,52.287l-2.537,2.537
                        c-4.313,4.313-12.062,2.426-19.518-5.029L12.452,34.09c-4.154-4.154-6.841-8.086-7.72-11.795c-0.953-4.118-0.028-7.859,3.007-10.894
                        l2.538-2.537c1.188-1.188,3.062-1.396,4.578-0.545c3.089,1.637,6.751,8.494,7.737,10.194c0.888,1.516,1.088,2.814,0.599,3.633
                        c-0.181,0.326-1.469,1.382-2.311,1.992c-2.679,2.26-4.224,4.003-5.13,5.307c-2.407,3.34-1.857,7.164,1.609,10.631l13.491,13.491
                        c3.464,3.464,7.288,4.016,10.628,1.609c1.301-0.904,3.045-2.448,5.305-5.129c0.61-0.843,1.666-2.131,1.992-2.311
                        c0.821-0.49,2.118-0.29,3.634,0.599C48.943,45.544,55.8,49.206,57.437,52.297C58.11,53.51,57.94,54.799,57.212,55.528z"
                  />
                  <path
                    d="M7.735,52.068c-0.383,0-0.769-0.146-1.061-0.439l-4.301-4.301c-0.586-0.586-0.586-1.536,0-2.121s1.536-0.586,2.121,0
                        l4.301,4.301c0.586,0.586,0.586,1.536,0,2.121C8.504,51.922,8.118,52.068,7.735,52.068z"
                  />
                  <path
                    d="M20.844,58.68c-0.383,0-0.769-0.146-1.061-0.439l-4.301-4.301c-0.586-0.586-0.586-1.536,0-2.121s1.536-0.586,2.121,0
                        l4.301,4.301c0.586,0.586,0.586,1.536,0,2.121C21.613,58.534,21.227,58.68,20.844,58.68z"
                  />
                  <path
                    d="M32.61,60.002c-0.383,0-0.769-0.146-1.061-0.439l-4.301-4.301c-0.586-0.586-0.586-1.536,0-2.121s1.536-0.586,2.121,0
                        l4.301,4.301c0.586,0.586,0.586,1.536,0,2.121C33.379,59.856,32.993,60.002,32.61,60.002z"
                  />
                </g>
              </svg> */}
              <EmailIcon className='mr-2 text-lively-orange' />
              <span className="text-sm">hello@TheOrangeRV.com</span>
            </div>
            <div className="flex items-center mt-5">
              {/* <svg
                className="h-6 mr-2 text-lively-orange"
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 348.077 348.077"
                style={{ enableBackground: 'new 0 0 348.077 348.077' }}
              >
                <g>
                  <path
                    id="SVGRepo_bgCarrier"
                    d="M0,0v348.077h348.077V0H0z M271.692,221.301c0,45.772-37.272,82.798-83.21,82.798
                        c-15.67,0-30.454-4.375-43.475-12.684l-48.902,13.57l12.973-46.998c-10.646-14.556-16.288-31.831-16.288-49.433
                        c0-45.521,37.092-82.563,83.065-82.563C234.481,126.99,271.692,174.02,271.692,221.301z"
                  />
                  <path
                    id="SVGRepo_tracerCarrier"
                    d="M174.251,139.688c-45.97,0-83.065,37.043-83.065,82.563c0,17.602,5.642,34.877,16.288,49.433l-12.973,46.998
                        l48.902-13.57c13.021,8.308,27.804,12.684,43.475,12.684c45.938,0,83.21-37.027,83.21-82.798
                        C257.416,174.02,220.204,139.688,174.251,139.688z"
                    style={{ fill: 'none' }}
                  />
                  <path
                    d="M174.251,0C78.174,0,0,78.174,0,174.251s78.174,174.251,174.251,174.251s174.251-78.174,174.251-174.251
                        S270.328,0,174.251,0z M174.251,323.285c-16.288,0-32.168-4.268-46.069-12.352L67.9,328.57l12.244-44.371
                        c-10.034-13.743-15.411-30.053-15.411-47.147c0-53.335,43.417-96.8,96.668-96.8c25.854,0,50.164,10.071,68.456,28.362
                        c18.247,18.247,28.321,42.559,28.321,68.439C257.416,279.868,214.208,323.285,174.251,323.285z"
                  />
                  <path
                    d="M257.396,181.743c-4.171-1.041-24.753-12.208-28.6-13.545c-1.218-0.416-2.503-0.637-3.77-0.637
                        c-3.054,0-5.941,1.174-8.062,3.304l-16.532,16.515c-2.758,2.758-7.06,3.729-10.771,2.433c-9.926-3.627-35.946-27.37-43.298-36.914
                        c-2.31-2.987-1.872-7.215,1.091-10.171l16.52-16.52c2.908-2.905,4.021-7.133,2.982-11.236c-1.339-5.26-11.937-28.424-13.391-32.277
                        c-1.802-4.559-5.899-7.586-10.654-7.586c-1.168,0-2.327,0.19-3.449,0.56c-10.013,3.455-27.834,12.217-28.528,24.641
                        c-0.984,17.823,11.2,39.232,33.362,61.404c19.794,19.794,42.186,34.002,60.288,33.362c12.388-0.419,21.227-18.462,24.643-28.528
                        C264.656,188.081,262.127,183.369,257.396,181.743z"
                  />
                </g>
              </svg> */}
              <LocalPhoneIcon className='mr-2 text-lively-orange' />
              <span className="text-sm">(432) 301-9668</span>
            </div>
            <div className="flex items-center mt-5">
              <svg
                className="h-6 mr-2 text-lively-orange"
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="SVGRepo_bgCarrier" />
                  <g id="SVGRepo_tracerCarrier" />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16,0.396C7.235,0.396,0.396,7.235,0.396,16C0.396,24.765,7.235,31.604,16,31.604
                        c8.765,0,15.604-6.839,15.604-15.604C31.604,7.235,24.765,0.396,16,0.396z M16,29.896c-7.664,0-13.896-6.232-13.896-13.896
                        S8.336,2.104,16,2.104S29.896,8.336,29.896,16S23.664,29.896,16,29.896z"
                    />
                    <path
                      d="M20.169,9.42c-1.786,0-2.871,0.959-3.377,1.641h-0.05l-0.165-1.4H13.18c0.044,0.925,0.186,2.039,0.186,2.039h2.095
                        c-0.021,0.233-0.278,2.361-0.307,2.692h-2.065c0.037,0.525,0.29,3.406,0.29,3.406h2.157c0.507,0.679,1.567,1.724,3.307,1.724
                        c4.34,0,4.531-4.471,4.531-5.147C23.674,10.646,21.709,9.42,20.169,9.42z M20.026,18.609c-1.07,0-1.747-0.939-1.747-2.055
                        c0-1.136,0.658-2.059,1.751-2.059c1.127,0,1.747,0.923,1.747,2.059C21.777,17.67,21.188,18.609,20.026,18.609z"
                    />
                  </g>
                </g>
              </svg>
              <span className="text-sm">www.yourwebsite.com</span>
            </div>
            <div className="flex items-center mt-5">
              {/* TWITTER SVG  */}
              {/* <svg
                className="h-6 mr-2 text-lively-orange"
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M30.742,12.268c-0.824-0.306-1.705-0.514-2.616-0.604c0.936-0.56,1.653-1.447,1.991-2.508
                        c-0.876,0.519-1.85,0.896-2.875,1.1c-0.826-0.884-1.927-1.45-3.163-1.45c-2.391,0-4.333,1.942-4.333,4.332
                        c0,0.34,0.038,0.674,0.112,0.993c-3.6-0.18-6.79-1.904-8.921-4.523c-0.373,0.639-0.587,1.38-0.587,2.17
                        c0,1.498,0.763,2.82,1.923,3.595c-0.708-0.022-1.375-0.216-1.956-0.54c0,0.018,0,0.036,0,0.054c0,2.092,1.49,3.837,3.466,4.231
                        c-0.362,0.099-0.744,0.151-1.138,0.151c-0.279,0-0.547-0.027-0.81-0.076c0.548,1.711,2.141,2.957,4.028,2.991
                        c-1.475,1.157-3.333,1.848-5.35,1.848c-0.348,0-0.692-0.02-1.03-0.059c1.907,1.222,4.173,1.936,6.605,1.936
                        c7.927,0,12.261-6.565,12.261-12.259c0-0.186-0.004-0.371-0.012-0.554C28.946,13.975,29.951,13.2,30.742,12.268z"
                  />
                </g>
              </svg> */}
              <FacebookIcon  className='mr-2 text-lively-orange'/>
              <span className="text-sm">@TheOrangeRV</span>
            </div>
          </div>

          {/* FORM STARTS HERE  */}
          <form action="https://fabform.io/f/{form-id}" method="post" className="md:col-span-8 p-10">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            required
          />
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
            Email Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="********@*****.**"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
            Your Message
          </label>
          <textarea
            rows="10"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-message"
          ></textarea>
        </div>
        <div className="flex justify-between w-full px-3">
          <div className="md:flex md:items-center">
            <label className="block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">
                Send me your newsletter!
              </span>
            </label>
          </div>
          <button
            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
      <a href="https://veilmail.io/e/FkKh7o" className="font-medium text-blue-600 hover:underline">Or click here to reveal our protected email address</a>
    </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
