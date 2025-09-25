interface TBDProps {
  onBack: () => void;
}

const TBD = ({ onBack }: TBDProps) => {
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
            alt='Project Four'
            className='w-full h-full object-cover'
          />
        </div>

        <h3 className='text-sm font-hanken text-gray-600 mb-2'>TBD/Block</h3>
        <h4 className='text-lg font-hanken font-medium text-gray-800 mb-4 italic'>
          Beatae Vitae Dicta Sunt Explicabo
        </h4>

        <div className='space-y-4'>
          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Overview
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              A healthcare management system that connects patients with
              providers through secure, user-friendly interfaces that prioritize
              privacy and accessibility.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Challenge
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Balancing HIPAA compliance with user experience while ensuring the
              platform is accessible to users with varying technical abilities.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Solution
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Developed a multi-layered security system with intuitive user
              flows and comprehensive accessibility features.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Results
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Achieved 100% HIPAA compliance while improving patient
              satisfaction scores by 45% and reducing appointment scheduling
              time by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TBD;
