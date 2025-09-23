import React, { useRef } from 'react';

function App() {
  const rightPaneRef = useRef<HTMLDivElement>(null);
  const cvPaneRef = useRef<HTMLDivElement>(null);

  const handleLeftWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (rightPaneRef.current) {
      rightPaneRef.current.scrollTop += event.deltaY;
    }
  };

  const handleCvWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (cvPaneRef.current) {
      cvPaneRef.current.scrollTop += event.deltaY;
    }
  };
  return (
    <div
      className='min-h-screen bg-gray-50 flex'
      style={{ paddingTop: '10px', marginBottom: '10px' }}
    >
      {/* Left Side - Static */}
      <div
        className='w-[24%] fixed left-0 top-0 h-full bg-white flex flex-col'
        style={{
          borderRight: '1px solid #d9d9d9',
          paddingRight: '15px',
          paddingLeft: '15px',
          paddingTop: '0px',
          paddingBottom: '10px',
        }}
        onWheel={handleLeftWheel}
      >
        {/* Header */}
        <div className='mb-6'>
          <p className='text-sm font-hanken text-gray-600 mb-2 whitespace-nowrap'>
            UX/UI Design Engineer
          </p>
          <div style={{ borderTop: '1px solid #d9d9d9', width: '100%' }} />
        </div>

        {/* Profile Section */}
        <div className='mb-8'>
          <p className='text-sm font-hanken text-gray-600 mb-2'>PORTFOLIO</p>
          <a
            href='https://www.aixajemmottmusin.com/'
            className='text-sm font-hanken text-gray-600 mb-4'
          >
            aixajemmottmusin.com
          </a>
          <div className='space-y-2 mb-6'>
            <a
              href='https://www.linkedin.com/in/aixa-jemmott-musin-7b5577209/'
              className='text-sm text-gray-800'
            >
              LinkedIn
            </a>
          </div>

          <p className='text-sm text-gray-700 leading-relaxed mb-8 w-[100%]'>
            Vestibulum et dignissim magna. Nullam at ultrices felis. Sed
            consectetur nisi eget nisl tincidunt, at tincidunt nisi tincidunt.
            Proin eget consectetur nisi. Sed consectetur nisi eget nisl
            tincidunt, at tincidunt nisi tincidunt. Proin eget consectetur nisi.
          </p>
        </div>

        {/* Contact Links */}
        <div className=''>
          <div />
          <div className='space-y-2'>
            <a
              href='#contact'
              className='block text-sm text-gray-800 hover:text-gray-600 transition-colors'
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Scrollable */}
      <div
        ref={rightPaneRef}
        className='w-[100%] h-screen overflow-y-auto'
        style={{
          marginLeft: '21%',
          paddingTop: '0px',
          paddingBottom: '10px',
          paddingRight: '15px',
          paddingLeft: '90px',
        }}
      >
        {/* Header */}
        <div className='mb-6'>
          <p className='text-sm font-hanken text-gray-600'>Case Studies</p>
          <div
            style={{
              borderTop: '1px solid #d9d9d9',
              marginTop: '8px',
              width: '100%',
              marginBottom: '15px',
            }}
          />
        </div>

        {/* Projects Grid */}
        <div>
          {/* Project 1 */}
          <div className='py-8'>
            <div className='w-full h-64 mb-4 overflow-hidden'>
              <img
                src='/diagonal-placeholder.svg'
                alt='Project placeholder'
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-sm font-hanken text-gray-600 mb-2'>
              1. Project One
            </h3>
            <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
              Nemo Ipsum Dolorem, quae Amet Id Magna
            </h4>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          {/* Project 2 */}
          <div className='py-8'>
            <div className='w-full h-64 mb-4 overflow-hidden'>
              <img
                src='/diagonal-placeholder.svg'
                alt='Project placeholder'
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-sm font-hanken text-gray-600 mb-2'>
              2. Project Two
            </h3>
            <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
              Duis Voluptas Officia Est Commodo
            </h4>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>

          {/* Project 3 */}
          <div className='py-8'>
            <div className='w-full h-64 mb-4 overflow-hidden'>
              <img
                src='/diagonal-placeholder.svg'
                alt='Project placeholder'
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-sm font-hanken text-gray-600 mb-2'>
              3. Project Three
            </h3>
            <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
              Inventore Veritatis Et Quasi Architecto
            </h4>
            <p className='text-sm text-gray-600 leading-relaxed'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </div>

          {/* Project 4 */}
          <div className='py-8'>
            <div className='w-full h-64 mb-4 overflow-hidden'>
              <img
                src='/diagonal-placeholder.svg'
                alt='Project placeholder'
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-sm font-hanken text-gray-600 mb-2'>
              4. Project Four
            </h3>
            <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
              Beatae Vitae Dicta Sunt Explicabo
            </h4>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </div>

          {/* Project 5 */}
          <div className='py-8'>
            <div className='w-full h-64 mb-4 overflow-hidden'>
              <img
                src='/diagonal-placeholder.svg'
                alt='Project placeholder'
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-sm font-hanken text-gray-600 mb-2'>
              5. Project Five
            </h3>
            <h4 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
              Voluptatem Sequi Nesciunt Neque
            </h4>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur.
            </p>
          </div>
        </div>
      </div>

      {/* CV Column - Scrollable */}
      <div
        ref={cvPaneRef}
        className='w-2/5 h-screen overflow-y-auto'
        style={{
          borderLeft: '1px solid #d9d9d9',
          marginLeft: '0%',
          paddingRight: '15px',
          paddingTop: '0px',
          paddingBottom: '10px',
          paddingLeft: '15px',
        }}
        onWheel={handleCvWheel}
      >
        {/* Header */}
        <div className='mb-6'>
          <p className='text-sm font-hanken text-gray-600'>CV</p>
          <div
            style={{
              borderTop: '1px solid #d9d9d9',
              marginTop: '8px',
              width: '100%',
            }}
          />
        </div>

        {/* CV Content */}
        <div className='space-y-8'>
          {/* Education Section */}
          <div className='flex flex-row justify-between gap-8'>
            <p className='text-sm font-hanken text-gray-600 mb-4'>Education</p>
            <div className='space-y-4 w-[60%]'>
              <div>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  SuperHi, Online Courses Design & Coding - 2020
                </p>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  UAL (Central Saint Martin’s) - BA Textiles Design 2015 - 2019
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className='flex flex-row justify-between gap-8'>
            <p className='text-sm font-hanken text-gray-600 mb-4'>Experience</p>
            <div className='space-y-4 w-[60%]'>
              <div>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  UX/UI Design Engineer Polity (Contract) 09.2024 -
                  Current
                </p>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  UI Designer Simpatica (Freelance) 07.2024 - Current
                </p>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Creative Developer FlatPlan (Freelance) - 03.2024 - 05.2024
                </p>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Creative Coder Zacht Studios (Full-time) - 11.2021 - 10.2023
                </p>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Web Designer/Developer EASOL (Freelance) - 10.2021 - 12.2023
                </p>
                <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Web Designer B12 Designs (Contract) - 05.2020 - 05.2021
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className='flex flex-row justify-between'>
              <p className='text-sm font-hanken text-gray-600 mb-4'>Skills</p>
              <div className='space-y-4 w-[60%]'>
                <div>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  UX/UI Design
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'> 
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Figma
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Responsive design
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Webflow
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Adobe Creative Suite
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Apple News Design
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  HTML, CSS
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Javascript
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Boostrap, Tailwind CSS
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  React, Typescript
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Next.js, Node.js
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  GitHub, Vercel
                  </p>
                  <p className='text-sm font-hanken font-medium text-gray-800 mb-1'>
                  Fluent in Spanish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
