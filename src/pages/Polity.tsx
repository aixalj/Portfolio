import { useState, useEffect } from 'react';

const Polity = () => {
  const [typedCode, setTypedCode] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const fullCode = `// Scalable & Reusable Component
interface Address {
  id: string;
  contactName: string;
  network: string;
  isFavorite?: boolean;
}

const AddressesTable = ({
  addresses, onEdit, onView,
  onToggleFavorite
}) => {
  // Performance optimization
  const sortedAddresses = useMemo(() => {
    return [...addresses].sort(...)
  }, [addresses, favorites]);

  // Reusable design patterns
  return (
    <div className="flex flex-col">
      {paginatedAddresses.map(...)}
    </div>
  );
};`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCharIndex < fullCode.length) {
        setTypedCode(fullCode.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        // Reset animation when it reaches the end
        setTypedCode('');
        setCurrentCharIndex(0);
      }
    }, 50); // Much faster for character-by-character typing

    return () => clearTimeout(timer);
  }, [currentCharIndex, fullCode]);

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
        <div className='w-full mb-6 flex flex-row gap-4 justify-center items-end'>
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

        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h3 className='text-sm font-hanken text-gray-600 mb-2'>Polity</h3>
            <h4 className='text-lg font-hanken font-medium text-gray-800 mb-4 italic'>
              Web3 Network Platform
            </h4>
          </div>
          <div className='flex justify-center mb-4'>
            <img
              src='/Polity-Logo.png'
              alt='Polity Logo'
              className='h-6 object-contain max-sm:h-5'
            />
          </div>
        </div>
        <div>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Role:</span> UX/UI Designer & Engineer
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Client:</span> Polity
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Scope:</span> UX/UI Design and Frontend
            Engineering
          </h5>
          <h5 className='text-sm font-hanken font-medium text-gray-800 mb-2'>
            <span className='font-bold'>Stack:</span> Figma, React/TypeScript
          </h5>
        </div>

        <div className='space-y-4'>
          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              Overview
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              At Polity, I drive design and engineering efforts across the
              platform, shaping features that are both intuitive and technically
              rigorous. From delivering a production-ready Address Book to
              advancing responsiveness and scalability, my work blends
              high-fidelity design with system-level engineering to position the
              product for long-term evolution.
            </p>
          </div>

          {/* Additional Images Section */}
          <div className='w-full mb-6 flex flex-row gap-4 max-sm:flex-col'>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Address Book • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Address Book</span>
              </div>
              <img
                src='/AddressBook-1.png'
                alt='Address Book'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Address Book • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Address Book</span>
              </div>
              <img
                src='/AddressBook-2.png'
                alt='Address Book'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Address Book • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Address Book</span>
              </div>
              <img
                src='/AddressBook-3.png'
                alt='Address Book'
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
                Process
              </h5>
              <p className='text-sm text-gray-600 leading-relaxed max-lg:w-full'>
                Partnering with product and engineering stakeholders, I apply a
                research-driven, iterative approach - mapping flows, crafting
                prototypes, and translating them into production-ready code.
                This end-to-end process ensures that every decision aligns user
                needs with engineering standards, building a product that feels
                seamless, inevitable, and resilient.
              </p>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className='w-full mb-6 flex flex-row gap-4 max-sm:flex-col'>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Address Book • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Address Book</span>
              </div>
              <img
                src='/AddressBook-4.png'
                alt='Address Book'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Address Book • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Address Book</span>
              </div>
              <img
                src='/AddressBook-5.png'
                alt='Address Book'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
            <div className='flex-1 h-full overflow-y-auto border border-gray-200 rounded relative group cursor-pointer max-lg:group-hover:scale-150 max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:origin-top-left'>
              <div className='absolute top-2 left-2 bg-gray-100/50 bg-opacity-75 text-black text-xs px-2 py-1 rounded z-10'>
                <span className='hidden lg:inline'>
                  Address Book • Scroll • Hover to zoom
                </span>
                <span className='lg:hidden'>Address Book</span>
              </div>
              <img
                src='/AddressBook-6.png'
                alt='Address Book'
                className='w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:origin-top-left'
              />
            </div>
          </div>

          <div className='mb-10 max-sm:mb-5'>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              UX/UI Design
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[50%] max-lg:w-full'>
              I design interfaces and flows that anticipate rather than ask,
              balancing simplicity with depth. Whether refining the Address Book
              or enhancing core platform interactions, my focus is on crafting
              experiences that adapt responsively across devices while
              maintaining brand integrity and user clarity.
            </p>
          </div>

          {/* Mobile Address Book Images */}
          <div className='w-full mb-6 flex justify-start '>
            <div className='flex flex-row max-lg:flex-col gap-40 max-lg:gap-6 w-full items-center'>
              <div className='w-[500px] h-[520px] max-lg:h-[500px] max-lg:w-full bg-gray-700 rounded-lg p-4 overflow-hidden'>
                <div className='text-xs font-mono leading-relaxed text-white'>
                  <pre className='whitespace-pre-wrap'>
                    {typedCode}
                    <span className='animate-pulse'>|</span>
                  </pre>
                </div>
                <div className='mt-3 text-xs text-gray-300 text-center'>
                  Componentized Address Book in React/TypeScript
                </div>
              </div>
              <div className='flex flex-row gap-4 max-sm:flex-col'>
                <img
                  src='/Address-Book-Mobile-2.png'
                  alt='Address Book Mobile'
                  className='w-56 object-contain'
                />
                <img
                  src='/AddressBook-Mobile-1.png'
                  alt='Address Book Mobile'
                  className='w-56 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='flex justify-between items-start'>
            <div className='w-[63%] max-lg:w-[0%]'>
              {/* Left side content can go here if needed */}
            </div>
            <div className='w-[50%] max-lg:w-full mb-10 max-sm:mb-5'>
              <h5 className='text-sm font-hanken font-medium text-gray-800'>
                Design Engineering
              </h5>
              <p className='text-sm text-gray-600 leading-relaxed max-lg:w-full'>
                Bridging the gap between vision and execution, I implement
                scalable, reusable components with React and TypeScript,
                anchored in a shared design system. This integration of design
                intuition and engineering precision ensures consistency,
                performance, and accessibility across the product.
              </p>
            </div>
          </div>

          <div>
            <h5 className='text-sm font-hanken font-medium text-gray-800'>
              Results
            </h5>
            <p className='text-sm text-gray-600 leading-relaxed w-[60%] max-lg:w-full'>
              Shipped the Address Book from concept to production, established
              scalable design-engineering practices that strengthened
              platform-wide consistency, expanded usability through responsive
              design, and refined the UI and codebase foundations to accelerate
              future releases. My impact extends beyond individual features -
              advancing the product as a whole toward stability, scalability,
              and user delight.
            </p>
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className='hidden lg:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4'>
          <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
            <button
              onClick={() => (window.location.href = '/gumroad')}
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

        {/* Mobile/Tablet Bottom Navigation */}
        <div className='lg:hidden bg-white px-2 py-4 mt-4 mb-5'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => (window.location.href = '/gumroad')}
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

export default Polity;
