import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

import NavBar from '@/components/navbar';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  name: string;
  children: ReactNode;
};

// const styling = {
//   backgroundImage: "url('/assets/images/bg.png')",
//   width: '100%',
//   height: '100%',
//   backgroundPosition: 'top',
//   backgroundRepeat: 'no-repeat',
// };

const Main = (props: IMainProps) => {
  return (
    <div className="w-full bg-slate-50 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <div>
          <NavBar needs={props.name} />
          <div className="mx-auto px-7">
            <div className="content py-5 text-xl">{props.children}</div>
          </div>
        </div>
        {props.name.includes('onboard') ? (
          <p></p>
        ) : (
          <div className="mx-auto px-6 md:max-w-screen-xl">
            <footer className="border-t border-gray-200 bg-white px-4 pt-12 pb-8 text-white">
              <div className="container mx-auto flex max-w-6xl flex-col justify-between overflow-hidden px-4 lg:flex-row">
                <div className="mr-4 w-full pl-12 text-left sm:pl-0 sm:text-center lg:w-1/4 lg:text-left">
                  <Link href="/">
                    <a className="flex justify-start text-left sm:justify-center sm:text-center lg:justify-start lg:text-left">
                      <span className="flex items-start sm:items-center">
                        <svg
                          className="h-6 w-auto fill-current text-gray-800"
                          viewBox="0 0 194 116"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fillRule="evenodd">
                            <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z"></path>
                            <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </Link>
                  <p className="mt-6 mr-4 font-manrope text-base text-gray-500">
                    Transforming Climate Innovation Ecosystems through Inclusive
                    Transdisciplinarity (TransCIIT) project
                  </p>
                </div>
                <div className="mt-6 block w-full pl-10 text-sm sm:flex lg:mt-0 lg:w-3/4">
                  <ul className="flex w-full list-none flex-col p-0 text-left font-medium text-gray-700">
                    <li className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase tracking-wide text-gray-800 md:mt-0">
                      Services
                    </li>
                    <li>
                      <a
                        href="#_"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Matched Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="#_"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Entrepreneurs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#_"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Academia
                      </a>
                    </li>
                    <li>
                      <a
                        href="#_"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                  <ul className="flex w-full list-none flex-col p-0 text-left font-medium text-gray-700">
                    <li className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase tracking-wide text-gray-800 md:mt-0">
                      Company
                    </li>
                    <li>
                      <a
                        href="#_"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#_"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                  <ul className="flex w-full list-none flex-col p-0 text-left font-medium text-gray-700">
                    <li className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase tracking-wide text-gray-800 md:mt-0">
                      Contact
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block px-3 py-2 font-manrope text-gray-600 no-underline hover:text-gray-600"
                      >
                        Live Chat
                      </a>
                    </li>
                  </ul>
                  <div className="flex w-full flex-col text-gray-700">
                    <div className="mt-5 inline-block px-3 py-2 font-manrope font-bold uppercase text-gray-800 md:mt-0">
                      Follow Us
                    </div>
                    <div className="mt-2 flex justify-start pl-4">
                      <a
                        className="mr-6  flex items-center font-manrope text-gray-600 no-underline hover:text-gray-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                        </svg>
                      </a>
                      <a
                        className="mr-6  flex items-center text-gray-600 no-underline hover:text-gray-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                        </svg>
                      </a>
                      <a
                        className=" flex items-center text-gray-600 no-underline hover:text-gray-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>

            <div className="border-t border-gray-300 py-8 text-center text-sm">
              © Copyright {new Date().getFullYear()} {AppConfig.title}
              {'. '}{' '}
              <a href="https://transciit.phanuelmutuma.co.ke">
                TransCIIT Project
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Main };