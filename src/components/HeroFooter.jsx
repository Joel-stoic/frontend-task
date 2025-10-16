import React from 'react'

const HeroFooter = () => {
    return (
        <div className='bg-gray-50 py-10 flex flex-col justify-center items-center'>

            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-20 px-4 max-w-7xl w-full">
                

                <div className="flex-shrink-0 text-center lg:text-left p-2">
                    <p className="text-base sm:text-xl text-teal-800 font-medium">
                        We safeguard your practice with full security and HIPAA compliance.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 py-2">
                    
                    <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
                        <img src="src/assets/brand1.webp" alt="AICPA SOC" className="h-8 lg:h-16" />
                        <img src="src/assets/brand2.webp" alt="ISO/HIPAA" className="h-8 lg:h-16" />
                    
                        <img src="src/assets/brand3.webp" alt="HITRUST CSF Certified" className="h-8 lg:h-16" />
                        <img src="src/assets/brand4.webp" alt="PCI Security Standards Council" className="h-8 lg:h-16" />
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default HeroFooter