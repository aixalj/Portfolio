import { translations, Language } from '../translations';

const WellEasy = () => {
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
          className='text-sm font-hanken text-gray-500 mb-4 hover:text-gray-800 cursor-pointer'
        >
          ← Back
        </button>
        <p className='text-sm font-hanken text-gray-900'>{t.caseStudyLabel}</p>
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
            src='/WellEasy-Tablet.png'
            alt='Polity'
            className='w-1/2 object-contain'
          />
          <img
            src='/WellEasy-Mobile.png'
            alt='Polity'
            className='w-1/5 object-contain'
          />
        </div>

        <div className='flex justify-between'>
          <div className='flex flex-col mb-2'>
            <h3 className='text-sm font-hanken text-gray-600 mb-2'>
              {t.welleasyLabel}
            </h3>
            <h4 className='text-sm font-hanken font-medium text-gray-800 mb-2 italic'>
              {t.welleasyTitle}
            </h4>
            <a
              href='https://welleasy.co.uk/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-gray-500 underline hover:text-gray-700'
            >
              https://welleasy.co.uk/
            </a>
          </div>
          <div className='flex justify-center mb-4'>
            <img
              src='/welleasy-logo.webp'
              alt='WellEasy Logo'
              className='h-20 object-contain max-sm:h-15 max-sm:-mt-4'
            />
          </div>
        </div>
        <div>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.roleLabel}</span> {t.welleasyRole}
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.clientLabel}</span> {t.welleasyClient}
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.scopeLabel}</span> {t.welleasyScope}
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.stackLabel}</span> {t.welleasyStack}
          </h5>
        </div>

        

        <div className='space-y-4'>

          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.challengeLabel}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.welleasyChallenge}
            </p>
          </div>

          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.overview}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.welleasyOverview}
            </p>
          </div>

          {/* Additional Images Section */}
          <div className='w-full mb-6 grid grid-cols-2 gap-4 max-sm:flex max-sm:flex-col'>
            <div className='h-[120px] overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  User Flows • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>User Flows</span>
              </div>
              <img
                src='/WellEasy-UX-1.png'
                alt='WellEasy'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='h-[120px] overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Low-Fidelity Wireframes • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Low-Fidelity Wireframes</span>
              </div>
              <img
                src='/WellEasy-UX-2.png'
                alt='WellEasy'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Low-Fidelity Wireframes • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Low-Fidelity Wireframes</span>
              </div>
              <img
                src='/WellEasy-UX-3.png'
                alt='WellEasy'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Low-Fidelity Wireframes • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Low-Fidelity Wireframes</span>
              </div>
              <img
                src='/WellEasy-UX-4.png'
                alt='WellEasy'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
          </div>

          <div className='flex justify-between items-start'>
            <div className='w-[63%] max-lg:w-[0%]'>
              {/* Left side content can go here if needed */}
            </div>
            <div className='w-[50%] max-lg:w-full mb-10 max-sm:mb-5'>
              <h5 className='text-sm font-hanken font-medium text-gray-800'>
                {t.process}
              </h5>
              <p className='text-sm text-gray-600 leading-relaxed max-lg:w-full'>
                {t.welleasyProcess}
              </p>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className='w-full mb-6 flex flex-row gap-4 max-sm:flex-col'>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  High-Fidelity Mockups, UI Components • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>High-Fidelity Mockups</span>
              </div>
              <img
                src='/WellEasy-1.png'
                alt='WellEasy'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='flex-1 h-[315px] overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  High-Fidelity Mockups, UI Components • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>High-Fidelity Mockups</span>
              </div>
              <img
                src='/WellEasy-3.png'
                alt='WellEasy'
                className='w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
          </div>

          <div className='w-full mb-6 flex flex-row gap-4 max-sm:flex-col'>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  High-Fidelity Mockups, UI Components • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>High-Fidelity Mockups</span>
              </div>
              <img
                src='/WellEasy-4.png'
                alt='WellEasy'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='flex-1 h-[280px] overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  High-Fidelity Mockups, UI Components • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>High-Fidelity Mockups</span>
              </div>
              <img
                src='/WellEasy-5.png'
                alt='WellEasy'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
          </div>

          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.welleasyDesignLabel}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[50%] max-lg:w-full'>
              {t.welleasyDesignDesc}
            </p>
          </div>

          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.welleasyAutoshipLabel}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[50%] max-lg:w-full whitespace-pre-line'>
              {t.welleasyAutoshipDesc}
            </p>
          </div>

          {/* Video Section */}
          <div className='w-full mb-6 flex flex-row gap-4 items-center max-sm:flex-col'>
            <div className='w-1/5 max-sm:w-1/5'>
              <img
                src='/WellEasy-8.png'
                alt='WellEasy'
                className='w-full object-contain'
              />
            </div>
            <div className='w-3/4 max-sm:w-3/4'>
              <img
                src='/WellEasy-7.png'
                alt='WellEasy'
                className='w-full object-contain'
              />
            </div>
          </div>

          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.welleasyKeyFeaturesLabel}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full whitespace-pre-line'>
              {t.welleasyKeyFeaturesDesc}
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.results}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.welleasyResults}
            </p>
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className='hidden lg:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-40'>
          <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
            <button
              onClick={() => (window.location.href = '/polity')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/tbd')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Bottom Navigation */}
        <div className='lg:hidden bg-white px-2 py-4 mt-4 mb-20'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => (window.location.href = '/polity')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/tbd')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* Main Mobile Navigation */}
        <div className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-9999'>
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

export default WellEasy;
