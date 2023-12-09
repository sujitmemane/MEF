export const Header = () => {
    return (
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0  ">
        <div className="flex flex-col  w-full max-w-xl px-4 lg:px-16  lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-4 py-2 mb-4 text-xs  tracking-wider text-white uppercase rounded-full bg-brandPrimary font-thin">
                 Admission Open
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Modern Education Foundation Aurangabad
              </h2>
              <p className="text-base font-thin md:text-lg">
                Join MEF and skyrocket your professional journey.
              All types of ITI, Dip, Degree and Management courses
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3  tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-brandPrimary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none font-thin"
              >
                Admission
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center  font-thin transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds"
            alt=""
          />
        </div>
      </div>
    );
  };

  export default Header