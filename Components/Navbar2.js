import { useState } from "react";
import WalletConnectButton from "./WalletConnectButton";

const Navbar2 = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Medications", path: "/medicamentos" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b w-full">
      <div className="items-center flex-row px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-pill"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
          <path d="M8.5 8.5l7 7" />
        </svg> */}
        <div className="flex flex-row items-center py-3 md:py-5 md:block">
          <a href="/" className="text-gray-800 text-3xl font-bold">
            VitalEdge
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-700 hover:text-indigo-600">
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            ))}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <li>
              {/* <a
                href="/"
                className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow md:inline"
              > */}
                <WalletConnectButton />
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
