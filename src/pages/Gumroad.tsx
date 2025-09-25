interface GumroadProps {
  onBack: () => void;
}

const Gumroad = ({ onBack }: GumroadProps) => {
  return (
    <div className='w-full h-screen overflow-y-auto bg-white px-6 py-8 pb-20'>
      <div className='mb-6'>
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
      <div>
        <div className='w-full h-96 mb-6 overflow-hidden'>
          <img
            src='/diagonal-placeholder.svg'
            alt='Project Two'
            className='w-full h-full object-cover'
          />
        </div>

        <h3 className='text-sm font-hanken text-gray-600 mb-2'>Gumroad</h3>
        <h4 className='text-lg font-hanken font-medium text-gray-800 mb-4 italic'>
          Duis Voluptas Officia Est Commodo
        </h4>

        <div className='space-y-4'>
          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Overview
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              An innovative e-commerce solution that streamlines the shopping
              experience through AI-powered recommendations and seamless
              checkout processes.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Challenge
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Reducing cart abandonment rates while maintaining a smooth user
              experience across multiple devices and platforms.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Solution
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Implemented a one-click checkout system with smart product
              recommendations and real-time inventory updates.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Results
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Reduced cart abandonment by 60% and increased conversion rates by
              35% across all user segments.
            </p>
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className='hidden lg:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4'>
          <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <button
              onClick={() => (window.location.href = '/si')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/polity')}
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
              onClick={() => (window.location.href = '/si')}
              className='text-sm font-hanken text-gray-600 hover:text-gray-800 underline cursor-pointer'
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => (window.location.href = '/polity')}
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

export default Gumroad;
