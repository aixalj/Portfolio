import { translations, Language } from '../translations';

const AppleNews = () => {
  const language: Language =
    typeof window !== 'undefined' && localStorage.getItem('language') === 'es'
      ? 'es'
      : 'en';
  const t = translations[language];

  return (
    <div className='w-full h-screen overflow-y-auto bg-white px-3 py-4 pb-20'>
      <div className='mb-6 max-w-[1200px] mx-auto'>
        <button
          onClick={() => {
            window.location.href = '/';
            localStorage.setItem('showCaseStudies', 'true');
          }}
          className='text-lg font-hanken text-gray-500 mb-4 hover:text-gray-800 cursor-pointer'
        >
          ← Back
        </button>
        <p className='text-lg font-hanken text-gray-900'>{t.caseStudyLabel}</p>
        <div
          style={{
            borderTop: '1px solid #d9d9d9',
            marginTop: '25px',
            width: '100%',
            marginBottom: '15px',
          }}
        />
      </div>

      {/* Case Study Content */}
      <div className='max-w-[1200px] mx-auto'>
        <div className='w-full mb-6 flex flex-row gap-4 justify-center items-end'>
          <img
            src='/SI-Tablet-Final.png'
            alt='Sports Illustrated for Apple News'
            className='flex-1 w-2/3 object-contain'
          />
          <img
            src='/SI-Mobile.png'
            alt='Sports Illustrated for Apple News'
            className='w-1/5 object-contain'
          />
        </div>

        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h3 className='text-lg font-hanken text-gray-600 mb-2'>
              {t.appleNewsPageTitle}
            </h3>
            <h4 className='text-lg font-hanken font-medium text-gray-800 mb-4 italic'>
              {t.appleNewsLabel}
            </h4>
          </div>
          <div className='flex justify-center mb-4'>
            <img
              src='/Apple_News_logo.svg.png'
              alt='Block Logo'
              className='h-6 max-sm:h-4 object-contain'
            />
          </div>
        </div>
        <div>
          <h5 className='text-lg font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.roleLabel}</span> {t.appleNewsRole}
          </h5>
          <h5 className='text-lg font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.clientLabel}</span> {t.appleNewsClient}
          </h5>
          <h5 className='text-lg font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.scopeLabel}</span> {t.appleNewsScope}
          </h5>
          <h5 className='text-lg font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.toolsLabel}</span> {t.appleNewsTools}
          </h5>
        </div>

        <div className='space-y-4'>
          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-lg font-hanken font-medium text-gray-800'>
              {t.overview}
            </h5>
            <p className='text-lg text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.appleNewsOverview}
            </p>
          </div>

          {/* Additional Images Section */}
          <div className='w-full mb-6 grid grid-cols-2 max-sm:grid-cols-1 gap-4'>
            <div className='h-72 max-lg:h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Process • Hover to zoom
                </span>
                <span className='lg:hidden'>Process</span>
              </div>
              <img
                src='/SI-Research-1.png'
                alt='Sports Illustrated Research 1'
                className='w-full object-contain max-lg:object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='h-72 max-lg:h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Process • Hover to zoom
                </span>
                <span className='lg:hidden'>Process</span>
              </div>
              <img
                src='/SI-Research-2.png'
                alt='Sports Illustrated Research 2'
                className='w-full object-contain max-lg:object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='h-72 max-sm:h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Process • Hover to zoom
                </span>
                <span className='lg:hidden'>Process</span>
              </div>
              <img
                src='/SI-Research-4.png'
                alt='Sports Illustrated Research 3'
                className='w-full object-contain max-sm:object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='h-72 max-sm:h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Process • Hover to zoom
                </span>
                <span className='lg:hidden'>Process</span>
              </div>
              <img
                src='/SI-Research-5.png'
                alt='Sports Illustrated Research 4'
                className='w-full object-contain max-sm:object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
          </div>

          <div className='flex justify-between items-start'>
            <div className='w-[63%] max-lg:w-[0%]'>
              {/* Left side content can go here if needed */}
            </div>
            <div className='w-[50%] mb-10 max-lg:w-full max-sm:mb-5'>
              <h5 className='text-lg font-hanken font-medium text-gray-800'>
                {t.process}
              </h5>
              <p className='text-lg text-gray-600 leading-relaxed max-lg:w-full'>
                {t.appleNewsProcess}
              </p>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className='w-full mb-6 flex flex-row gap-4 max-sm:flex-col'>
            <div className='flex-1 h-[21rem] max-lg:h-[15rem] overflow-y-auto max-lg:overflow-x-auto border border-gray-200 rounded relative group cursor-pointer'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Process • Hover to zoom
                </span>
                <span className='lg:hidden'>Process</span>
              </div>
              <img
                src='/Research-Cont-1.png'
                alt='Sports Illustrated Research 1'
                className='w-full h-full object-cover max-lg:min-w-full max-lg:overflow-x-auto transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='flex-1 flex flex-col gap-4'>
              <div className='h-40 max-sm:h-full max-lg:h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer'>
                <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                  <span className='hidden lg:inline'>
                    Process • Hover to zoom
                  </span>
                  <span className='lg:hidden'>Process</span>
                </div>
                <img
                  src='/Research-Cont-2.png'
                  alt='Sports Illustrated Research 2'
                  className='w-full object-contain max-sm:object-cover max-lg:object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
                />
              </div>
              <div className='h-40 max-sm:h-full max-lg:h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer'>
                <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                  <span className='hidden lg:inline'>
                    Process • Hover to zoom
                  </span>
                  <span className='lg:hidden'>Process</span>
                </div>

                <img
                  src='/Research-Cont-3.png'
                  alt='Sports Illustrated Research 3'
                  className='w-full object-contain max-sm:object-cover max-lg:object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
                />
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className='w-full mb-6 h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
              preload='metadata'
              poster='/SI-Video-poster.jpg'
              onError={(e) => console.error('Video failed to load:', e)}
            >
              <source src='/Si-Video-Final.mp4' type='video/mp4' />
              <p>{t.videoFallback}</p>
            </video>
          </div>

          <div>
            <h5 className='text-lg font-hanken font-medium text-gray-800'>
              {t.results}
            </h5>
            <p className='text-lg text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.appleNewsResults}
            </p>
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className='hidden lg:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-40'>
          <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
            <button
              onClick={() => (window.location.href = '/tbd')}
              className='text-lg font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/gumroad')}
              className='text-lg font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Bottom Navigation */}
        <div className='lg:hidden bg-white px-2 py-4 mt-4 mb-20'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => (window.location.href = '/tbd')}
              className='text-lg font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/gumroad')}
              className='text-lg font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* Main Mobile Navigation */}
        <div className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50'>
          <div className='flex justify-around py-3'>
            <button
              onClick={() => (window.location.href = '/')}
              className='text-xs font-hanken px-3 py-2 text-gray-800'
            >
              INFO
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className='text-xs font-hanken px-3 py-2 text-gray-800 underline'
            >
              CASE STUDIES
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className='text-xs font-hanken px-3 py-2 text-gray-800'
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
      </div>
    </div>
  );
};

export default AppleNews;
