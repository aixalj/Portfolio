interface WellEasyProps {
  onBack: () => void;
}

const WellEasy = ({ onBack }: WellEasyProps) => {
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
            alt='Project Five'
            className='w-full h-full object-cover'
          />
        </div>

        <h3 className='text-sm font-hanken text-gray-600 mb-2'>WellEasy</h3>
        <h4 className='text-lg font-hanken font-medium text-gray-800 mb-4 italic'>
          Voluptatem Sequi Nesciunt Neque
        </h4>

        <div className='space-y-4'>
          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Overview
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              An educational technology platform that personalizes learning
              experiences through adaptive algorithms and engaging interactive
              content.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Challenge
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Creating personalized learning paths that adapt to individual
              learning styles while maintaining educational standards and
              outcomes.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Solution
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Implemented machine learning algorithms that adjust content
              delivery based on user progress and engagement patterns.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Results
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Improved learning outcomes by 55% and increased student engagement
              by 80% across all age groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellEasy;
