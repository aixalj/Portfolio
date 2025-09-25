interface GumroadProps {
  onBack: () => void;
}

const Gumroad = ({ onBack }: GumroadProps) => {
  return (
    <div className='w-full h-screen overflow-y-auto bg-white px-6 py-8 pb-20'>
      <div className='mb-6'>
        <button
          onClick={onBack}
          className='text-sm font-hanken text-gray-500 mb-4 hover:text-gray-800 cursor-pointer'
        >
          ← Back to Case Studies
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
      </div>
    </div>
  );
};

export default Gumroad;
