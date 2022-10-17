import userData from "../constants/data";

export default function Hero() {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <h2 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Full-Stack
        </h2>
        <h2 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Software Engineer
        </h2>
        <div className="inline-flex flex-col">
          <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
              <a
                href={`mailto:${userData.email}`}
                className="flex flex-row items-center space-x-4 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="my-4">&rarr;</div>
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  E-mail
                </p>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.github}
                className="flex flex-row items-center space-x-4 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="my-4">&rarr;</div>
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  GitHub
                </p>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.linkedin}
                className="flex flex-row items-center space-x-4 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="my-4">&rarr;</div>
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  LinkedIn
                </p>
              </a>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
              I'm flexible and would love to be considered for any open position
            </p>
          </div>
        </div>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <img src={userData.avatarUrl} alt="avatar" className="shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
