import { IoRocket } from "react-icons/io5";

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto md:px-8   mb-24">
         <div className="flex flex-col items-center justify-center my-24">
         <p className="mt-1 font-bold text-xl  text-brandPrimary uppercase">
             Why Us?
              </p>
              <h3 className=" text-2xl font-thin">Why We Are Special?</h3>
             
            </div>
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            <IoRocket size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5"> Advance Your Education, Kick Start Your Career</h6>
            <p className="mb-3 text-sm text-gray-900">
            Making the leap from the safe and comfortable college life into the intimidating and unpredictable workforce is one of the biggest and most important transitions of our lives.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            <IoRocket size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Aurangabad is One of the Best Student Cities in the World</h6>
            <p className="mb-3 text-sm text-gray-900">
            As of 2017, the QS Best Student Cities ranking now includes a student view indicator, based on ratings from more than 50,000 students and recent graduates which were gathered in our student survey.

​
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            <IoRocket size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">India's Class Faculty at the Finest Facilities</h6>
            <p className="mb-3 text-sm text-gray-900">
            As of 2017, the QS Best Student Cities ranking now includes a student view indicator, based on ratings from more than 50,000 students and recent graduates which were gathered in our student survey.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            <IoRocket size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Internationally Diverse Student Community</h6>
            <p className="mb-3 text-sm text-gray-900">
            As an accessible and friendly college, we attract students from all over India and overseas. As an accessible and friendly college, we attract students from all over India and overseas.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            <IoRocket size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Our Graduates Rank Highest Among Job Recruiters</h6>
            <p className="mb-3 text-sm text-gray-900">
            Using the results of the Global University Employability Survey, Simon Baker reveals which countries and institutions are rated best for graduate digital competency and links to industry.
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            <IoRocket size={30} />
            </div>
            
            <h6 className="mb-2 font-semibold leading-5">Get Degree in One Year | Complete Graduation & Post Graduation in One Year</h6>
            <p className="mb-3 text-sm text-gray-900">
            Complete Your Degree in One Year & Save your Gap Years.

The idea behind the fast track or Lateral Entry system is to solve the problems of youth and working professionals who left out their studies after 12th or discontinued their Graduation. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Services