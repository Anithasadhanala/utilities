import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

  const [showModal, setShowModal] = useState(false);
  
  return (
    <div
      id="NavBar"
      className=" w-screen"
    >
      {!showModal && (
        <div className="w-80p 2xl:w-60vw flex justify-between bg-white py-4 md:py-3 md:pt-4 md:px-10 px-4 shadow-md ">
            <img  className="ml-4 md:ml-0 sm:h-[20px] md:h-[40px] w-[90px]" src="/favicon/koin-logo.png" alt="logo"/>
          
          <div className="md:flex hidden gap-10">
            <a className="nav-element py-2 sans-serif" href="#CrypoTaxes">
              Crypo Taxes
            </a>
            <a className="nav-element py-2 sans-serif" href="#FreeTools">
              Free Tools
            </a>
            <a className="nav-element py-2 sans-serif" href="#ResourceCenter">
              Resource Center
            </a>
            <a
              className="nav-element"
             
              href="#GetStarted"
            >
                <button className="  bg-blue-600 text-white text-base sans-serif rounded-lg  w-32 my-2 p-1 "> Get started</button>
            </a>
           
          </div>
          <div className="block md:hidden mr-4  justify-center items-center">
            <span
              onClick={() => setShowModal(true)}
              className="material-symbols-outlined"
            >
              <IoMdMenu className="h-[20px] w-[20px] mt-2" />
            </span>
          </div>
        </div>
      )}
      {/* mobile modal */}
      {showModal && (
        <div className="flex flex-col justify-center bg-white items-center md:hidden h-100vh w-100vw mt-2 ">
          <div className="w-full flex justify-end ">
            <span
              onClick={() => setShowModal(false)}
              className="material-symbols-outlined p-10 text-xl mb-4"
            >
              <RxCross2 />
            </span>
          </div>
          <div className="text-base h-full font-normal bg-white sans-serif flex flex-col justify-center items-center gap-5">
            <a href="#CrypoTaxes" onClick={() => setShowModal(false)}>
            Crypo Taxes
            </a>
            <a onClick={() => setShowModal(false)} href="#FreeTools">
            Free Tools
            </a>
            <a onClick={() => setShowModal(false)} href="#ResourceCenter">
            Resource Center
            </a>
            <a
              onClick={() => setShowModal(false)}
              href="#GetStarted"
            >
                <button className="  bg-indigo-500 text-white text-base font-normal sans-serif rounded-lg p-4 mb-8 "> Get Started</button>
            </a>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
