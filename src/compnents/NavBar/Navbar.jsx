import { useState,  } from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link and NavLink correctly




export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  // in updatin phase of component

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
  
      <nav className=" fixed top-0 left-0 right-0 shadow-nav  bg-white w-full z-40 border-b border-gray-200">
        <div className="flex gap-3 flex-wrap md:flex-nowrap items-center justify-between p-4">
          {/* start logo */}
          <NavLink to="/" className="logo">
            <h1 className="text-main uppercase font-bold text-2xl">فهمني</h1>
          </NavLink>
          <div className="right-nav m-0 inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* start toggle  */}
            <div
              className="toogle button flex items-center justify-center cursor-pointer md:hidden"
             
                 >
             <i className="fa-solid fa-bars-staggered text-2xl rotate-180"  onClick={toggleNav}></i>
            </div>
          </div>
            {/* start items in nav */}
            <div
              className={`items-center justify-center w-full md:flex md:w-auto  md:order-1 ${isOpen?"h-0 overflow-hidden ":""} md:h-auto `}
              id="navbar-sticky"
                  >
              <ul  className="flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
                <li>
                  <NavLink
                    to="/tazkarh"
                    className="navLink block py-2 px-3 rounded md:bg-transparent hover:text-main "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                      تذكرة 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Choose"
                    className="navLink block py-2 px-3 rounded md:bg-transparent hover:text-main "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    اختياري
                  </NavLink>
                </li>
             
                <li>
              
                </li>
              </ul>
            </div>
         
        </div>

      </nav>
    </>
  );
}
