import { translations, Language } from '../translations';

const YellowBolts = () => {
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

      <div className='max-w-[1200px] mx-auto'>
        <div className='w-full mb-6'>
          <img
            src='/Yellow-Bolts.png?v=2'
            alt='Yellow Bolts'
            className='w-full h-auto object-contain'
          />
        </div>

        <div className='flex flex-col mb-2'>
          <h3 className='text-sm font-hanken text-gray-600 mb-2'>
            {t.yellowBoltsLabel}
          </h3>
          <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
            {t.yellowBoltsTitle}
          </h4>
        </div>
        <div>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.roleLabel}</span> {t.yellowBoltsRole}
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.clientLabel}</span>{' '}
            {t.yellowBoltsClient}
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.scopeLabel}</span>{' '}
            {t.yellowBoltsScope}
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>{t.stackLabel}</span>{' '}
            {t.yellowBoltsStack}
          </h5>
        </div>

        <div className='space-y-4'>
          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.overview}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.yellowBoltsOverview}
            </p>
          </div>

          <div className='w-full mb-6'>
            <img
              src='/Yellow-Bolts-Renovation.png'
              alt='Yellow Bolts renovation cover page'
              className='w-full h-auto object-contain border border-gray-200 rounded'
            />
          </div>

          <div className='w-full mb-6 flex flex-row gap-4 max-sm:flex-col'>
            <img
              src='/Yellow-Bolts-What-We-Do.png'
              alt='Yellow Bolts what we do'
              className='flex-1 w-full h-auto object-contain border border-gray-200 rounded'
            />
            <img
              src='/Yellow-Bolts-What-We-Cover.png'
              alt='Yellow Bolts what we cover'
              className='flex-1 w-full h-auto object-contain border border-gray-200 rounded'
            />
          </div>

          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.process}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.yellowBoltsProcess}
            </p>
          </div>

          <div className='w-full mb-6 grid grid-cols-3 gap-4 max-sm:grid-cols-1'>
            <img
              src='/Yellow-Bolts-How-It-Works.png'
              alt='Yellow Bolts how it works'
              className='w-full h-auto object-contain border border-gray-200 rounded'
            />
            <img
              src='/Yellow-Bolts-Covered.png'
              alt='Yellow Bolts covered in three steps'
              className='w-full h-auto object-contain border border-gray-200 rounded'
            />
            <img
              src='/Yellow-Bolts-Cover-Types.png'
              alt='Yellow Bolts cover types'
              className='w-full h-auto object-contain border border-gray-200 rounded'
            />
          </div>

          <div className='w-full mb-6 flex flex-row gap-4 max-sm:flex-col'>
            <img
              src='/Yellow-Bolts-How-We-Work.png'
              alt='Yellow Bolts how we work'
              className='flex-1 w-full h-auto object-contain border border-gray-200 rounded'
            />
            <img
              src='/Yellow-Bolts-Regulatory.png'
              alt='Yellow Bolts regulatory information'
              className='flex-1 w-full h-auto object-contain border border-gray-200 rounded'
            />
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              {t.results}
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              {t.yellowBoltsResults}
            </p>
          </div>
        </div>

        <div className='hidden lg:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-40'>
          <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
            <button
              onClick={() => (window.location.href = '/polity')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/welleasy')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              NEXT →
            </button>
          </div>
        </div>

        <div className='lg:hidden bg-white px-2 py-4 mt-4 mb-20'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => (window.location.href = '/polity')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/welleasy')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              NEXT →
            </button>
          </div>
        </div>

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

export default YellowBolts;
