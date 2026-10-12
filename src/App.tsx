import React, { useRef, useState, useEffect } from 'react';
import { translations, Language } from './translations';
import Polity from './pages/Polity';
import WellEasy from './pages/WellEasy';
import AppleNews from './pages/AppleNews';
import TBD from './pages/TBD/Block';
import Gumroad from './pages/Gumroad';

function App() {
  const rightPaneRef = useRef<HTMLDivElement>(null);
  const cvPaneRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  const [activePage, setActivePage] = useState(() => {
    // Check localStorage for saved active page on initial load
    const savedPage = localStorage.getItem('activePage');
    return savedPage || 'home';
  });

  // Check if we should show case studies on load
  useEffect(() => {
    const shouldShowCaseStudies = localStorage.getItem('showCaseStudies');
    if (shouldShowCaseStudies === 'true') {
      setActivePage('case-studies');
      localStorage.removeItem('showCaseStudies');
    }
  }, []);

  // Save active page to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentCaseStudy, setCurrentCaseStudy] = useState<string | null>(null);

  const t = translations[language];

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
          className={`text-sm font-hanken px-3 py-2 ${
            activePage === 'home' ? 'text-gray-800 underline' : 'text-gray-800'
          }`}
        >
          {t.info}
        </button>
        <button
          onClick={() => setActivePage('case-studies')}
          className={`text-sm font-hanken px-3 py-2 ${
            activePage === 'case-studies'
              ? 'text-gray-800 underline'
              : 'text-gray-800'
          }`}
        >
          {t.caseStudies}
        </button>
        <button
          onClick={() => setActivePage('cv')}
          className={`text-sm font-hanken px-3 py-2 ${
            activePage === 'cv' ? 'text-gray-800 underline' : 'text-gray-800'
          }`}
        >
          {t.cv}
        </button>
        <a
          href='mailto:aixa.jemmottmusin@gmail.com'
          className='text-sm font-hanken px-3 py-2 text-gray-800'
        >
          {t.contact}
        </a>
        <button
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className='text-sm font-hanken px-3 py-2 text-gray-800 underline hover:text-gray-600'
        >
          {t.language}
        </button>
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
            {t.title}
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
          <p className='text-sm font-hanken text-gray-900 mb-2'>{t.portfolio}</p>
          <a
            href='https://www.aixajemmottmusin.com/'
            className='text-sm font-hanken text-gray-900 mb-4'
          >
            {t.name}
          </a>
          <div className='space-y-2 mb-4 mt-4 flex flex-col'>
            <a
              href='https://www.linkedin.com/in/aixa-jemmott-musin/'
              className='text-sm text-gray-900 underline'
              target='_blank'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/aixalj'
              className='text-sm text-gray-900 underline'
              target='_blank'
            >
              Github
            </a>
          </div>
          

          <p className='text-sm text-gray-900 leading-relaxed mb-4 w-[100%]'>
            {t.bio}
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
              {t.contact}
            </a>
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className='block text-sm text-gray-800 underline cursor-pointer hover:text-gray-600'
            >
              {t.language}
            </button>
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
        <div className='lg:hidden w-full h-screen overflow-y-auto bg-white px-3 py-8 pb-20'>
          <div className='mb-8'>
            <p className='text-sm font-hanken text-gray-900 mb-2'>
              {t.title}
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
          <div className='h-[350px] min-[641px]:h-[450px] min-[768px]:h-[550px] min-[930px]:h-[650px] mb-4'>
            <div className='relative w-full h-full overflow-hidden rounded'>
              <div
                className='w-full h-full flex items-center justify-center transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 0 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                <div className='flex flex-row gap-4 justify-center items-end'>
                  <img
                    src='/Polity-Desktop.png'
                    alt='Polity'
                    className='flex-1 w-1/2 object-contain'
                  />
                  <img
                    src='/Polity-Mobile.png'
                    alt='Polity'
                    className='w-1/5 object-contain'
                  />
                </div>
              </div>
              <div
                className='w-full h-full flex items-center justify-center transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 1 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                <div className='flex flex-row gap-4 justify-center items-end'>
                  <img
                    src='/WellEasy-Tablet.png'
                    alt='WellEasy'
                    className='w-[45%] object-contain'
                  />
                  <img
                    src='/WellEasy-Mobile.png'
                    alt='WellEasy'
                    className='w-1/5 object-contain'
                  />
                </div>
              </div>
              <div
                className='w-full h-full flex items-center justify-center transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 2 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                <div className='flex flex-row gap-4 justify-center items-end'>
                  <img
                    src='/tbd-desktop.png'
                    alt='TBD/Block'
                    className='flex-1 w-1/2 object-contain'
                  />
                  <img
                    src='/tbd-mobile.png'
                    alt='TBD/Block'
                    className='w-1/5 object-contain'
                  />
                </div>
              </div>
              <div
                className='w-full h-full flex items-center justify-center transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 3 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                <div className='flex flex-row gap-4 justify-center items-end'>
                  <img
                    src='/SI-Tablet-Final.png'
                    alt='Sports Illustrated for Apple News'
                    className='w-[72%] object-contain'
                  />
                  <img
                    src='/SI-Mobile.png'
                    alt='Sports Illustrated for Apple News'
                    className='w-1/5 object-contain'
                  />
                </div>
              </div>
              <div
                className='w-full h-full transition-opacity duration-1000'
                style={{
                  opacity: currentImageIndex === 4 ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                <video
                  className='w-[100%] h-full object-contain'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                  poster='/Gumroad-Proto-3.jpg'
                  onError={(e) => console.error('Video failed to load:', e)}
                >
                  <source src='/Gumroad-Proto-3.mp4' type='video/mp4' />
                  <p>{t.videoFallback}</p>
                </video>
              </div>
            </div>
          </div>

          <div className='mb-8'>
            <p className='text-sm font-hanken text-gray-900 mb-2'>{t.portfolio}</p>
            <a
              href='https://www.aixajemmottmusin.com/'
              className='text-sm font-hanken text-gray-700 mb-4 block'
            >
              {t.name}
            </a>
            <div className='space-y-2 mb-4 mt-4 flex flex-col gap-2'>
              <a
                href='https://www.linkedin.com/in/aixa-jemmott-musin/'
                className='text-sm text-gray-700 underline block'
                target='_blank'
              >
                LinkedIn
              </a>
              <a
                href='https://github.com/aixalj'
                className='text-sm text-gray-700 underline block'
                target='_blank'
              >
                Github
              </a>
            </div>
            <p className='text-sm text-gray-800 leading-relaxed mb-4 w-full'>
              {t.bio}
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
              : screenWidth === 1024
              ? '68px'
              : '87px',
          paddingBottom: '10px',
        }}
      >
        <div>
          {/* Header */}
          <div className='mb-4'>
            <p className='text-sm font-hanken text-gray-900'>{t.caseStudiesTitle}</p>
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
              <div className='w-full h-full mb-4 overflow-hidden'>
                <a
                  href='/polity'
                  className='w-full mb-1 flex flex-row gap-4 justify-center items-end cursor-pointer block'
                >
                  <img
                    src='/Polity-Desktop.png'
                    alt='Polity'
                    className='flex-1 w-1/2 object-contain'
                  />
                  <img
                    src='/Polity-Mobile.png'
                    alt='Polity'
                    className='w-1/5 object-contain'
                  />
                </a>
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <a
                  href='/polity'
                  className='text-sm font-hanken text-gray-900 mb-2 hover:text-gray-700 text-left block'
                >
                  1. {t.polityLabel}
                </a>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    {t.polityTitle}
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    {t.polityDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className='py-6'>
              <div className='w-full h-full mb-4 overflow-hidden'>
                <a
                  href='/welleasy'
                  className='w-full mb-1 flex flex-row gap-4 justify-center items-end cursor-pointer block'
                >
                  <img
                    src='/WellEasy-Tablet.png'
                    alt='WellEasy'
                    className='w-1/2 object-contain'
                  />
                  <img
                    src='/WellEasy-Mobile.png'
                    alt='WellEasy'
                    className='w-1/5 object-contain'
                  />
                </a>
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <a
                  href='/welleasy'
                  className='text-sm font-hanken text-gray-900 mb-2 hover:text-gray-700 text-left block'
                >
                  2. {t.welleasyLabel}
                </a>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    {t.welleasyTitle}
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    {t.welleasyDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className='py-6'>
              <div className='w-full h-full overflow-hidden'>
                <a
                  href='/tbd'
                  className='w-full mb-4 flex flex-row gap-4 justify-center items-end cursor-pointer block'
                >
                  <img
                    src='/tbd-desktop.png'
                    alt='TBD/Block'
                    className='flex-1 w-1/2 object-contain'
                  />
                  <img
                    src='/tbd-mobile.png'
                    alt='TBD/Block'
                    className='w-1/5 object-contain'
                  />
                </a>
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <a
                  href='/tbd'
                  className='text-sm font-hanken text-gray-900 mb-2 hover:text-gray-700 text-left block'
                >
                  3. {t.tbdLabel}
                </a>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    {t.tbdTitle}
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    {t.tbdDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className='py-6'>
              <div className='w-full h-full mb-4 overflow-hidden'>
                <a
                  href='/SI'
                  className='w-full mb-1 flex flex-row gap-4 justify-center items-end cursor-pointer block'
                >
                  <img
                    src='/SI-Tablet-Final.png'
                    alt='Sports Illustrated for Apple News'
                    className=' w-[72%] object-contain'
                  />
                  <img
                    src='/SI-Mobile.png'
                    alt='Sports Illustrated for Apple News'
                    className='w-1/5 object-contain'
                  />
                </a>
              </div>
              <div className='flex flex-row gap-2 justify-between'>
                <a
                  href='/SI'
                  className='text-sm font-hanken text-gray-900 mb-2 hover:text-gray-700 text-left block'
                >
                  4. {t.appleNewsLabel}
                </a>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    {t.appleNewsTitle}
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    {t.appleNewsDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className='py-6'>
              <a
                className='w-full h-full mb-4 overflow-hidden block'
                href='/gumroad'
              >
                <video
                  className='w-full h-full object-contain'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                  poster='/Gumroad-Proto-3.jpg'
                  onError={(e) => console.error('Video failed to load:', e)}
                >
                  <source src='/Gumroad-Proto-3.mp4' type='video/mp4' />
                  <p>{t.videoFallback}</p>
                </video>
              </a>
              <div className='flex flex-row gap-2 justify-between'>
                <a
                  href='/gumroad'
                  className='text-sm font-hanken text-gray-900 mb-2 hover:text-gray-700 text-left block'
                >
                  5. {t.gumroadLabel}
                </a>
                <div className='flex flex-col gap-2 w-[60%]'>
                  <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                    {t.gumroadTitle}
                  </h4>
                  <p className='text-sm text-gray-800 leading-relaxed'>
                    {t.gumroadDesc}
                  </p>
                </div>
              </div>
            </div>
            {/* Copyright Section */}
            <div className='mt-4'>
              <p className='text-xs font-hanken text-gray-600 font-medium'>
                {t.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Case Studies Page */}
      {activePage === 'case-studies' && !currentCaseStudy && (
        <div className='lg:hidden w-full h-screen overflow-y-auto bg-white px-3 py-8 pb-20'>
          <div className='mb-6'>
            <p className='text-sm font-hanken text-gray-900'>{t.caseStudiesTitle}</p>
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
              <div className='w-full h-full mb-4 overflow-hidden'>
                <div
                  className='w-full mb-1 flex flex-row gap-4 justify-center items-end'
                  onClick={() => {
                    setCurrentCaseStudy('polity');
                  }}
                >
                  <img
                    src='/Polity-Desktop.png'
                    alt='Polity'
                    className='flex-1 w-1/2 object-contain'
                  />
                  <img
                    src='/Polity-Mobile.png'
                    alt='Polity'
                    className='w-1/5 object-contain'
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  setCurrentCaseStudy('polity');
                }}
                className='text-sm font-hanken text-gray-600 mb-2 hover:text-gray-800 text-left'
              >
                1. {t.polityTitle}
              </button>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                {t.polityTitle}
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {t.polityDesc}
              </p>
            </div>

            {/* Project 2 */}
            <div className='py-8'>
              <div className='w-full h-full mb-4 overflow-hidden'>
                <div
                  className='w-full mb-1 flex flex-row gap-4 justify-center items-end'
                  onClick={() => setCurrentCaseStudy('welleasy')}
                >
                  <img
                    src='/WellEasy-Tablet.png'
                    alt='WellEasy'
                    className=' w-1/2 object-contain'
                  />
                  <img
                    src='/WellEasy-Mobile.png'
                    alt='WellEasy'
                    className='w-1/5 object-contain'
                  />
                </div>
              </div>
              <button
                onClick={() => setCurrentCaseStudy('welleasy')}
                className='text-sm font-hanken text-gray-600 mb-2'
              >
                2. {t.welleasyTitle}
              </button>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                {t.welleasyTitle}
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {t.welleasyDesc}
              </p>
            </div>

            {/* Project 3 */}
            <div className='py-8'>
              <div className='w-full h-full mb-4 overflow-hidden'>
                <div
                  className='w-full mb-1 flex flex-row gap-4 justify-center items-end cursor-pointer'
                  onClick={() => setCurrentCaseStudy('TBD')}
                >
                  <img
                    src='/tbd-desktop.png'
                    alt='TBD/Block'
                    className='flex-1 w-1/2 object-cover'
                  />
                  <img
                    src='/tbd-mobile.png'
                    alt='TBD/Block'
                    className='w-1/5 object-cover'
                  />
                </div>
              </div>
              <button
                onClick={() => setCurrentCaseStudy('TBD')}
                className='text-sm font-hanken text-gray-600 mb-2'
              >
                3. {t.tbdTitle}
              </button>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                {t.tbdTitle}
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {t.tbdDesc}
              </p>
            </div>

            {/* Project 4 */}
            <div className='py-8'>
              <div className='w-full h-full mb-4 overflow-hidden'>
                <div
                  className='w-full mb-1 flex flex-row gap-4 justify-center items-end'
                  onClick={() => setCurrentCaseStudy('AppleNews')}
                >
                  <img
                    src='/SI-Tablet-Final.png'
                    alt='Sports Illustrated for Apple News'
                    className='w-[72%] object-cover'
                  />
                  <img
                    src='/SI-Mobile.png'
                    alt='Sports Illustrated for Apple News'
                    className='w-1/5 object-cover'
                  />
                </div>
              </div>
              <button
                onClick={() => setCurrentCaseStudy('AppleNews')}
                className='text-sm font-hanken text-gray-600 mb-2'
              >
                4. {t.appleNewsTitle}
              </button>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                {t.appleNewsTitle}
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {t.appleNewsDesc}
              </p>
            </div>

            {/* Project 5 */}
            <div className='py-8 mb-0'>
              <div className='w-full h-full mb-4 overflow-hidden'>
                <video
                  onClick={() => setCurrentCaseStudy('Gumroad')}
                  className='w-full h-full object-cover'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                  poster='/Gumroad-Proto-3.jpg'
                  onError={(e) => console.error('Video failed to load:', e)}
                >
                  <source src='/Gumroad-Proto-3.mp4' type='video/mp4' />
                  <p>{t.videoFallback}</p>
                </video>
              </div>
              <button
                onClick={() => setCurrentCaseStudy('Gumroad')}
                className='text-sm font-hanken text-gray-600 mb-2'
              >
                5. {t.gumroadTitle}
              </button>
              <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
                {t.gumroadTitle}
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {t.gumroadDesc}
              </p>
            </div>

            {/* Copyright Section */}
            <div className='mt-8'>
              <p className='text-xs font-hanken text-gray-500 font-medium'>
                {t.copyright}
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
              {t.cvTitle}
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
              <p className='text-sm font-hanken text-gray-700 mb-4 w-[22%]'>
                {t.education}
              </p>
              <div className='space-y-4 w-[70%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.educationCourse}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    {t.educationDegree}
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
              <p className='text-sm font-hanken text-gray-700 mb-4 w-[22%]'>
                {t.experience}
              </p>
              <div className='space-y-4 w-[70%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceTasteMakers}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experiencePolity}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceSimpatica}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceFlatPlan}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceZacht}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceEasol}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    {t.experienceB12}
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
                <p className='text-sm font-hanken text-gray-700 mb-4 w-[22%]'>
                  {t.skills}
                </p>
                <div className='space-y-4 w-[70%]'>
                  <div>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsUxUiDesign}
                    </p>

                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsFigma}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsResponsiveDesign}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsWebflow}
                    </p>
                    <p className='text-sm hidden font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsAdobeCreativeSuite}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsAppleNewsDesign}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsHtmlCss}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsJavascript}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsBootstrapTailwind}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsReactTypescript}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsNextNode}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsGithubVercel}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                      {t.skillsFluentSpanish}
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
                {t.lastUpdated}
              </p>
              <div className='w-[60%] font-hanken '>
                <p className='text-xs font-hanken  text-gray-600 font-medium'>
                  {__BUILD_DATE__}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CV Page */}
      {activePage === 'cv' && (
        <div className='lg:hidden w-full h-screen overflow-y-auto bg-white px-6 max-sm:px-3 py-8 pb-20'>
          <div className='mb-6'>
            <p className='text-sm font-hanken text-gray-900'>{t.cvTitle}</p>
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
              <p className='text-sm font-hanken text-gray-700 mb-4 w-[25%]'>
                {t.education}
              </p>
              <div className='space-y-4 w-[100%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.educationCourse}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    {t.educationDegree}
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className='flex flex-row gap-4'>
              <p className='text-sm font-hanken text-gray-700 mb-4 w-[25%]'>
                {t.experience}
              </p>
              <div className='space-y-4 w-[100%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceTasteMakers}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experiencePolity}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceSimpatica}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceFlatPlan}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceZacht}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                    {t.experienceEasol}
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                    {t.experienceB12}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className='flex flex-row gap-4'>
                <p className='text-sm font-hanken text-gray-700 mb-4 w-[25%]'>
                  {t.skills}
                </p>
                <div className='space-y-4 w-[100%]'>
                  <div>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsUxUiDesign}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsFigma}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsResponsiveDesign}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsWebflow}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsAppleNewsDesign}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsHtmlCss}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsJavascript}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsBootstrapTailwind}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsReactTypescript}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsNextNode}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-2'>
                      {t.skillsGithubVercel}
                    </p>
                    <p className='text-sm font-hanken font-medium text-gray-800 mb-0'>
                      {t.skillsFluentSpanish}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated Section */}
            <div className='flex flex-row gap-1 font-hanken'>
              <p className='text-xs font-hanken text-gray-500 font-medium'>
                {t.lastUpdated}
              </p>
              <div className='w-[60%] font-hanken'>
                <p className='text-xs font-hanken text-gray-500 font-medium'>
                  {__BUILD_DATE__}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Individual Case Study Pages - Mobile/Tablet Only */}
      {currentCaseStudy === 'polity' && (
        <div className='lg:hidden'>
          <Polity />
        </div>
      )}

      {currentCaseStudy === 'welleasy' && (
        <div className='lg:hidden'>
          <WellEasy />
        </div>
      )}

      {currentCaseStudy === 'AppleNews' && (
        <div className='lg:hidden'>
          <AppleNews />
        </div>
      )}

      {currentCaseStudy === 'TBD' && (
        <div className='lg:hidden'>
          <TBD />
        </div>
      )}

      {currentCaseStudy === 'Gumroad' && (
        <div className='lg:hidden'>
          <Gumroad />
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}

export default App;
