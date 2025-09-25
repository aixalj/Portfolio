import React, { useRef, useState, useEffect } from 'react';

function App() {
  const rightPaneRef = useRef<HTMLDivElement>(null);
  const cvPaneRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activePage, setActivePage] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleLeftWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (rightPaneRef.current) {
      rightPaneRef.current.scrollTop += event.deltaY;
    }
  };

  const handleCvWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (cvPaneRef.current) {
      cvPaneRef.current.scrollTop += event.deltaY;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Image carousel effect
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageTimer);
  }, []);

  // Screen width tracking
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Mobile Navigation Component
  const MobileNav = () => (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50'>
      <div className='flex justify-around py-3'>
        <button
          onClick={() => setActivePage('home')}
          className={`text-xs font-hanken px-3 py-2 ${
            activePage === 'home' ? 'text-gray-800 underline' : 'text-gray-800'
          }`}
        >
          INFO
        </button>
        <button
          onClick={() => setActivePage('case-studies')}
          className={`text-xs font-hanken px-3 py-2 ${
            activePage === 'case-studies'
              ? 'text-gray-800 underline'
              : 'text-gray-800'
          }`}
        >
          CASE STUDIES
        </button>
        <button
          onClick={() => setActivePage('cv')}
          className={`text-xs font-hanken px-3 py-2 ${
            activePage === 'cv' ? 'text-gray-800 underline' : 'text-gray-800'
          }`}
        >
          CV
        </button>
        <a
          href='mailto:aixa.jemmottmusin@gmail.com'
          className='text-xs font-hanken px-3 py-2 text-gray-800'
        >
          CONTACT
        </a>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-white flex flex-col lg:flex-row'>
      {/* Left Side - Static - Desktop Only */}
      <div
        className='hidden lg:flex w-[24%] fixed left-0 top-0 bg-white flex-col'
        style={{
          height: 'calc(100vh - 0px)',
          borderRight: '1px solid #d9d9d9',
          paddingRight: '15px',
          paddingLeft: '15px',
          paddingTop: '10px',
          paddingBottom: '10px',
          borderImage:
            'linear-gradient(to bottom, transparent 15px, #d9d9d9 15px, #d9d9d9 calc(100% - 15px), transparent calc(100% - 20px)) 1',
        }}
        onWheel={handleLeftWheel}
      >
        {/* Header */}
        <div className='mb-6'>
          <p className='text-sm font-hanken text-gray-900 mb-2 whitespace-nowrap'>
            UX/UI Design Engineer
          </p>
          <div
            style={{
              borderTop: '1px solid #d9d9d9',
              width: '100%',
              marginTop: '25px',
            }}
          />
        </div>

        {/* Profile Section */}
        <div className=''>
          <p className='text-sm font-hanken text-gray-900 mb-2'>Portfolio</p>
          <a
            href='https://www.aixajemmottmusin.com/'
            className='text-sm font-hanken text-gray-900 mb-4 underline'
          >
            aixajemmottmusin.com
          </a>
          <div className='space-y-2 mb-4'>
            <a
              href='https://www.linkedin.com/in/aixa-jemmott-musin/'
              className='text-sm text-gray-900 underline'
              target='_blank'
            >
              LinkedIn
            </a>
          </div>

          <p className='text-sm text-gray-900 leading-relaxed mb-4 w-[100%]'>
            I design at the intersection of intuition and engineering - where
            form whispers to function and technology feels almost invisible. My
            work extends beyond aesthetics or code; it’s about building
            experiences that move seamlessly, grounded in research, testing, and
            technical precision. I thrive on solving complex problems with
            elegant simplicity, shaping digital products that feel inevitable -
            interfaces that anticipate, rather than ask. With equal fluency in
            design and engineering, I bring ideas from concept to reality,
            always with the user at the center.
          </p>
        </div>

        {/* Contact Links */}
        <div className=''>
          <div />
          <div className='space-y-2'>
            <a
              href='mailto:aixa.jemmottmusin@gmail.com'
              className='block text-sm text-gray-800 underline'
              target='_blank'
            >
              Contact
            </a>
          </div>
        </div>

        {/* Time Clock */}
        <div className='mt-auto pt-8 font-hanken'>
          <div className='text-left font-hanken'>
            <div className='text-xs font-hanken text-gray-600 font-medium'>
              {currentTime.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Home Page */}
      {activePage === 'home' && (
        <div className='lg:hidden w-full h-screen overflow-y-auto bg-white px-6 py-8 pb-20'>
          <div className='mb-8'>
            <p className='text-sm font-hanken text-gray-900 mb-2'>
              UX/UI Design Engineer
            </p>
            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                width: '100%',
                marginTop: '25px',
              }}
            />
          </div>

          {/* Fading Image Carousel */}
          <div className='mb-8'>
            <div className='relative w-full h-80 overflow-hidden rounded'>
              <img
                src='/diagonal-placeholder.svg'
                alt={`Portfolio image ${currentImageIndex + 1}`}
                className='w-full h-full object-cover transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 0 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <img
                src='/diagonal-placeholder.svg'
                alt={`Portfolio image ${currentImageIndex + 1}`}
                className='w-full h-full object-cover transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 1 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <img
                src='/diagonal-placeholder.svg'
                alt={`Portfolio image ${currentImageIndex + 1}`}
                className='w-full h-full object-cover transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 2 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <img
                src='/diagonal-placeholder.svg'
                alt={`Portfolio image ${currentImageIndex + 1}`}
                className='w-full h-full object-cover transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 3 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <img
                src='/diagonal-placeholder.svg'
                alt={`Portfolio image ${currentImageIndex + 1}`}
                className='w-full h-full object-cover transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 4 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          </div>

          <div className='mb-8'>
            <p className='text-sm font-hanken text-gray-900 mb-2'>Portfolio</p>
            <a
              href='https://www.aixajemmottmusin.com/'
              className='text-sm font-hanken text-gray-700 mb-4 underline block'
            >
              aixajemmottmusin.com
            </a>
            <div className='space-y-2 mb-4'>
              <a
                href='https://www.linkedin.com/in/aixa-jemmott-musin/'
                className='text-sm text-gray-700 underline block'
                target='_blank'
              >
                LinkedIn
              </a>
            </div>
            <p className='text-sm text-gray-800 leading-relaxed mb-4 w-full'>
              I design at the intersection of intuition and engineering - where
              form whispers to function and technology feels almost invisible.
              My work extends beyond aesthetics or code; it’s about building
              experiences that move seamlessly, grounded in research, testing,
              and technical precision. I thrive on solving complex problems with
              elegant simplicity, shaping digital products that feel inevitable
              - interfaces that anticipate, rather than ask. With equal fluency
              in design and engineering, I bring ideas from concept to reality,
              always with the user at the center.
            </p>
          </div>

          <div className='mt-auto pt-8'>
            <div className='text-left'>
              <div className='text-xs font-hanken text-gray-500 font-medium'>
                {currentTime.toLocaleTimeString('en-US', {
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Right Side - Scrollable - Desktop Only */}
      <div
        ref={rightPaneRef}
        className='hidden lg:block w-[100%] overflow-y-auto'
        style={{
          height: 'calc(100vh - 0px)',
          marginLeft: '19%',
          paddingTop: '10px',
          paddingRight: '15px',
          paddingLeft:
            screenWidth >= 2000
              ? '115px'
              : screenWidth >= 1900
              ? '110px'
              : screenWidth >= 1800
              ? '105px'
              : screenWidth >= 1700
              ? '102px'
              : screenWidth >= 1650
              ? '100px'
              : screenWidth >= 1600
              ? '98px'
              : screenWidth >= 1525
              ? '95px'
              : '87px',
          paddingBottom: '10px',
        }}
      >
        <div>
          {/* Header */}
          <div className='mb-4'>
            <p className='text-sm font-hanken text-gray-900'>Case Studies</p>
            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                marginTop: '25px',
                width: '100%',
                marginBottom: '15px',
              }}
            />
          </div>

          {/* Projects Grid */}
          <div>
            {/* Project 1 */}
            <div className='py-3'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <h3 className='text-sm font-hanken text-gray-900 mb-2'>
                  1. Polity
                </h3>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    Nemo Ipsum Dolorem, quae Amet Id Magna
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className='py-6'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <h3 className='text-sm font-hanken text-gray-900 mb-2'>
                  2. WellEasy
                </h3>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    Nemo Ipsum Dolorem, quae Amet Id Magna
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className='py-6'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <h3 className='text-sm font-hanken text-gray-900 mb-2'>
                  3. TBD/Block
                </h3>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    Nemo Ipsum Dolorem, quae Amet Id Magna
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className='py-6'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <h3 className='text-sm font-hanken text-gray-900 mb-2'>
                  4. SI for Apple News
                </h3>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    Nemo Ipsum Dolorem, quae Amet Id Magna
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className='py-6'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <h3 className='text-sm font-hanken text-gray-900 mb-2'>
                  5. Gumroad
                </h3>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    Nemo Ipsum Dolorem, quae Amet Id Magna
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>
            {/* Copyright Section */}
            <div className='mt-4'>
              <p className='text-xs font-hanken text-gray-600 font-medium'>
                © 2025 Aixa Jemmott-Musin
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Case Studies Page */}
      {activePage === 'case-studies' && (
        <div className='lg:hidden w-full h-screen overflow-y-auto bg-white px-6 py-8 pb-20'>
          <div className='mb-6'>
            <p className='text-sm font-hanken text-gray-900'>Case Studies</p>
            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                marginTop: '25px',
                width: '100%',
                marginBottom: '15px',
              }}
            />
          </div>

          {/* Projects Grid */}
          <div>
            {/* Project 1 */}
            <div className='py-3'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-sm font-hanken text-gray-600 mb-2'>
                1. Project One
              </h3>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                Nemo Ipsum Dolorem, quae Amet Id Magna
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            {/* Project 2 */}
            <div className='py-8'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-sm font-hanken text-gray-600 mb-2'>
                2. Project Two
              </h3>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                Duis Voluptas Officia Est Commodo
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </p>
            </div>

            {/* Project 3 */}
            <div className='py-8'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-sm font-hanken text-gray-600 mb-2'>
                3. Project Three
              </h3>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                Inventore Veritatis Et Quasi Architecto
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
            </div>

            {/* Project 4 */}
            <div className='py-8'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-sm font-hanken text-gray-600 mb-2'>
                4. Project Four
              </h3>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                Beatae Vitae Dicta Sunt Explicabo
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>

            {/* Project 5 */}
            <div className='py-8 mb-0'>
              <div className='w-full h-96 mb-4 overflow-hidden'>
                <img
                  src='/diagonal-placeholder.svg'
                  alt='Project placeholder'
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-sm font-hanken text-gray-600 mb-2'>
                5. Project Five
              </h3>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                Voluptatem Sequi Nesciunt Neque
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur.
              </p>
            </div>

            {/* Copyright Section */}
            <div className='mt-8'>
              <p className='text-xs font-hanken text-gray-500 font-medium'>
                © 2025 Aixa Jemmott-Musin
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CV Column - Scrollable - Desktop Only */}
      <div
        ref={cvPaneRef}
        className='hidden lg:block w-2/5 overflow-y-auto'
        style={{
          height: 'calc(100vh - 0px)',
          borderLeft: '1px solid #d9d9d9',
          marginLeft: '0%',
          paddingRight: '15px',
          paddingTop: '10px',
          paddingLeft: '15px',
          paddingBottom: '10px',
          borderImage:
            'linear-gradient(to bottom, transparent 15px, #d9d9d9 15px, #d9d9d9 calc(100% - 15px), transparent calc(100% - 20px)) 1',
        }}
        onWheel={handleCvWheel}
      >
        <div>
          {/* Header */}
          <div className='mb-6'>
            <p className='text-sm font-hanken text-gray-900 mt-0-custom mb-5'>
              CV
            </p>
            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                marginTop: '25px',
                width: '100%',
              }}
            />
          </div>

          {/* CV Content */}
          <div className='space-y-8'>
            {/* Education Section */}
            <div className='flex flex-row gap-4'>
              <p className='text-sm font-hanken text-gray-700 mb-4'>
                Education
              </p>
              <div className='space-y-4 w-[70%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    SuperHi, Online Courses Design & Coding - 2020
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    UAL (Central Saint Martin’s) - BA Textiles Design 2015 -
                    2019
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                marginTop: '8px',
                width: '100%',
              }}
            />

            {/* Experience Section */}
            <div className='flex flex-row gap-4'>
              <p className='text-sm font-hanken text-gray-700 mb-4'>
                Experience
              </p>
              <div className='space-y-4 w-[70%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    UX/UI Design Engineer Polity (Contract) 09.2024 - Current
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    UI Designer Simpatica (Freelance) 07.2024 - Current
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    Creative Developer FlatPlan (Freelance) - 03.2024 - 05.2024
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    Creative Coder Zacht Studios (Full-time) - 11.2021 - 10.2023
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    Web Designer/Developer EASOL (Freelance) - 10.2021 - 12.2023
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    Web Designer B12 Designs (Contract) - 05.2020 - 05.2021
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                marginTop: '8px',
                width: '100%',
              }}
            />

            {/* Skills Section */}
            <div>
              <div className='flex flex-row gap-4'>
                <p className='text-sm font-hanken text-gray-700 mb-4 w-[25%]'>
                  Skills
                </p>
                <div className='space-y-4 w-[70%]'>
                  <div>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      UX/UI Design
                    </p>

                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Figma
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Responsive design
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Webflow
                    </p>
                    <p className='text-sm hidden font-hanken font-medium text-gray-800 mb-2'>
                      Adobe Creative Suite
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Apple News Design
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      HTML, CSS
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Javascript
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Boostrap, Tailwind CSS
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      React, Typescript
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Next.js, Node.js
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      GitHub, Vercel
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                      Fluent in Spanish
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                marginTop: '8px',
                width: '100%',
              }}
            />

            {/* Last Updated Section */}
            <div className='flex flex-row gap-1 font-hanken'>
              <p className='text-xs font-hanken  text-gray-600 font-medium'>
                Last Updated
              </p>
              <div className='w-[60%] font-hanken '>
                <p className='text-xs font-hanken  text-gray-600 font-medium'>
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CV Page */}
      {activePage === 'cv' && (
        <div className='lg:hidden w-full h-screen overflow-y-auto bg-white px-6 py-8 pb-20'>
          <div className='mb-6'>
            <p className='text-sm font-hanken text-gray-900'>CV</p>
            <div
              style={{
                borderTop: '1px solid #d9d9d9',
                marginTop: '25px',
                width: '100%',
              }}
            />
          </div>

          {/* CV Content */}
          <div className='space-y-8'>
            {/* Education Section */}
            <div className='flex flex-row gap-4'>
              <p className='text-sm font-hanken text-gray-700 mb-4'>
                Education
              </p>
              <div className='space-y-4 w-[70%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    SuperHi, Online Courses Design & Coding - 2020
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    UAL (Central Saint Martin's) - BA Textiles Design 2015 -
                    2019
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className='flex flex-row gap-4'>
              <p className='text-sm font-hanken text-gray-700 mb-4'>
                Experience
              </p>
              <div className='space-y-4 w-[70%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    UX/UI Design Engineer Polity (Contract) 09.2024 - Current
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    UI Designer Simpatica (Freelance) 07.2024 - Current
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    Creative Developer FlatPlan (Freelance) - 03.2024 - 05.2024
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    Creative Coder Zacht Studios (Full-time) - 11.2021 - 10.2023
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    Web Designer/Developer EASOL (Freelance) - 10.2021 - 12.2023
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    Web Designer B12 Designs (Contract) - 05.2020 - 05.2021
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className='flex flex-row gap-4'>
                <p className='text-sm font-hanken text-gray-700 mb-4 w-[25%]'>
                  Skills
                </p>
                <div className='space-y-4 w-[70%]'>
                  <div>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      UX/UI Design
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Figma
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Responsive design
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Webflow
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Apple News Design
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      HTML, CSS
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Javascript
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Boostrap, Tailwind CSS
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      React, Typescript
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      Next.js, Node.js
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      GitHub, Vercel
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                      Fluent in Spanish
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated Section */}
            <div className='flex flex-row gap-1 font-hanken'>
              <p className='text-xs font-hanken text-gray-500 font-medium'>
                Last Updated
              </p>
              <div className='w-[60%] font-hanken'>
                <p className='text-xs font-hanken text-gray-500 font-medium'>
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}

export default App;
