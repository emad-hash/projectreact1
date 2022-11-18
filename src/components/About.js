import React from 'react'
import './style.css'
function About() {
  return (
    <div>
      
      <div className="w-full">
        <div className="flex bg-white h-screen">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
           
     
              <p className="mt-2 text-sm text-gray-500 md:text-lg">Selim Ramia & Co was established in 2007, a total provider of movie entertainment services offering Levant investors, exhibitors and viewers a new standard in the cinema experience. Thanks to an aggressive growth plan, forward-thinking management and an eye for strategic locations and acquisitions by Selim Ramia, co-founder of Gulf Film LLC Group, SR&Co is the fastest growing company in market share acquisition in Lebanon, Jordan and Kuwait. SR&Co sees a future of great promise, determined in our mission to grow the regional market, develop business in new territories, and lead the next phase in the evolution of the Middle East film entertainment industry. www.srndco.com

</p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className=" imf object-cover" >
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='imf' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About