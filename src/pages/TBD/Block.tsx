const TBD = () => {
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
        <p className='text-sm font-hanken text-gray-900'>Case Study</p>
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
        <div className='w-full mb-6 flex flex-row gap-4'>
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

        <div className='flex justify-between'>
          <div className='flex flex-col'>
          <h3 className='text-sm font-hanken text-gray-600 mb-2'>TBD/Block</h3>
          <h4 className='text-lg font-hanken font-medium text-gray-800 mb-4 italic'>
            C=equals
          </h4>
          </div>
          <div className='flex justify-center mb-4'>
            <img
              src='/Block-Logo.png'
              alt='Block Logo'
              className='h-16 object-contain'
            />
          </div>
        </div>
        <div>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Role:</span> UX/UI Design Engineer
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Client:</span> TBD/Block (formerly
            Square)
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Scope:</span> Web Experience Design &
            Frontend Development
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Stack:</span> React / Next.js,
            Contentful, GitHub
          </h5>
        </div>

        <div className='space-y-4'>
          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Overview
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Partnered with TBD/Block (a division of Block, formerly Square) to
              design and engineer the launch platform for The Lightning Network.
              The goal was to simplify complex financial concepts into a clear,
              scalable, and responsive digital experience.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Process
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Collaborated with TBD stakeholders to define user needs and
              technical requirements, prioritising clarity, security, and
              long-term scalability. Translated high-fidelity designs into
              responsive React/Next.js components, integrated Contentful for
              modular content management, and aligned workflows with TBD’s
              engineering standards to ensure seamless design-to-code execution.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Testing & Deployment
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Validated usability, accessibility, and performance across
              devices, iterating with TBD stakeholders to refine the experience.
              Deployed via Netlify with a “Big Bang” strategy, resolving React
              SSR issues to ensure a smooth, stable launch.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Results
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              The platform successfully launched in Winter 2023. Recognised for
              its clarity, scalability, and robust GitHub documentation, the
              project empowered TBD’s team to independently manage and evolve
              the site post-launch.
            </p>
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className='hidden lg:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4'>
          <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
            <button
              onClick={() => (window.location.href = '/welleasy')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/si')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Bottom Navigation */}
        <div className='lg:hidden fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-40'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => (window.location.href = '/welleasy')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/si')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
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

export default TBD;
