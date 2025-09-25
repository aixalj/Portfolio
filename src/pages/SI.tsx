interface SIProps {
  onBack: () => void;
}

const SI = ({ onBack }: SIProps) => {
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
            alt='Project Three'
            className='w-full h-full object-cover'
          />
        </div>

        <h3 className='text-sm font-hanken text-gray-600 mb-2'>
          Sports Illustrated for Apple News
        </h3>
        <h4 className='text-lg font-hanken font-medium text-gray-800 mb-4 italic'>
          Inventore Veritatis Et Quasi Architecto
        </h4>

        <div className='space-y-4'>
          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Overview
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              A financial management platform that simplifies complex investment
              strategies for everyday users through intuitive design and clear
              data visualization.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Challenge
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Making complex financial concepts accessible to users without
              financial backgrounds while maintaining regulatory compliance.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Solution
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Created interactive dashboards with progressive complexity levels
              and comprehensive educational content integration.
            </p>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
              Results
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Improved user confidence in financial decisions by 70% and
              increased platform adoption by 50%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SI;
