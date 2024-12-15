const Sec2 = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="https://images.pexels.com/photos/163944/pexels-photo-163944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="md:max-w-lg sm:rounded-lg"
              alt=""
            />
          </div>
         
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">
              Traceability of Medicines in the Supply Chain
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Welcome to PharPhat
            </p>
            <p className="mt-3 text-gray-600">
              We are an innovative platform that uses blockchain technology to improve drug traceability,
              Our system allows users to follow the status of medications, from their manufacture to their
              final delivery, ensuring the quality and safety of pharmaceutical products.
            </p>
            <a
              href="/"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;