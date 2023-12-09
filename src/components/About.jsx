const About = () => {
  const data1 = [
    {
      id: 1,
      name: "Diploma Courses",
    },
    {
      id: 2,
      name: "Mechanical Engineering",
    },
    {
      id: 3,
      name: "Civil Engineering",
    },
    {
      id: 4,
      name: "Electrical Engineering",
    },
    {
      id: 5,
      name: "Chemical Engineering",
    } , {
        id: 7,
        name: "ITI Certificates",
      },
  ];
  const data2 = [
    {
      id: 1,
      name: "Fitter",
    },
    {
      id: 2,
      name: "Welder",
    },
    {
      id: 3,
      name: "Electrician",
    },
    {
      id: 4,
      name: "Electronics",
    },
    {
      id: 5,
      name: "Sheet Metal",
    },
    {
      id: 6,
      name: "Painter",
    },
  ];
  const data3 = [
    {
      id: 1,
      name: "Grinder",
    },
    {
      id: 2,
      name: "Turner",
    },
    {
      id: 3,
      name: "MMV (Motor Mechanic Vehicle)",
    },
    
    {
      id: 6,
      name: "Electronics & Telecommunication Engineering",
    },
  
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-16 my-24 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2 items-center">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <p className="text-base text-gray-700 text-md font-thin mt-4">
              At Modern Educational Foundation, we are committed to providing a
              dynamic and enriching educational experience that fosters academic
              excellence and practical skill development. With a legacy of
              nurturing talents and empowering individuals, our foundation
              stands as a beacon of quality education. Our journey began with a
              vision to create a platform that offers a diverse range of
              programs to meet the evolving needs of various industries. We take
              pride in our team of experienced educators, state-of-the-art
              facilities, and industry-aligned curriculum that prepares our
              students to excel in their chosen fields.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Courses
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-3 sm:space-y-0 my-2">
            <ul className="space-y-3">
              {data1.map((item) => (
                <li className="flex" key={item.id}>
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {data2.map((item) => (
                <li className="flex" key={item.id}>
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {data3.map((item) => (
                <li className="flex" key={item.id}>
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="text-md max-w-lg flex space-x-1  ">
          <span className="">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
            <p>

            BA | BCOM | BSc | BBA | BCA | MCA | MA | MCOM | MSC Polytechnic |
            M.Phil | MBA | LLM | BE | B Tech | M Tech BP Ed | D Ed | BSW | MSW |
            PGDBM Montessori Courses
            </p>
          </div> */}
          {/* <p className="my-2 text-md font-thin">
          Our programs are meticulously crafted to meet industry standards and equip students with the knowledge and skills needed to thrive in their careers.
          </p>
          <a
                href="/"
                className={`bg-brandPrimary w-40 text-white font-normal px-8 py-3 rounded font-bold transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Contact Us
              </a> */}
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
