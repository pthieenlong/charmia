import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import workImage from '@/assets/images/work.jpg'
function Homepage() {

  return (
      <div className="bg-[#F2FAFA] flex flex-col items-center">
        <nav className="flex flex-rows justify-between w-[1280px] bg-white rounded-[2rem] py-[0.25rem] px-[1rem] mt-[2rem]">
          <div className="flex flex-rows gap-[1rem] items-center">
            <GlobeAsiaAustraliaIcon className="w-[3.5rem]"/>
            <p>
              <span className="text-[#1E88E5]">Skill</span>base
            </p>
          </div>
          <div className="flex gap-[2rem] items-center">
            <a href="#">
              Home
            </a>
            <a href="#">
              Find work
            </a>
            <a href="#">
              Find freelancers
            </a>
            <a href="#">Log In</a>
            <a href="#">Sign up</a>
            <a href="#" className="text-white block px-[1rem] py-[0.5rem] rounded-[2rem] bg-[#1E88E5]">Post a project</a>
          </div>
        </nav>
        <div className="banner">
          <div className="">
            <div className="">
              <h1>
                Are you looking for <br /> Freelancers ?
              </h1>
              <p>
                Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice
              </p>
            </div>
            <div className="">
              <a href="#">Hire a freelancer</a>
              <div className="">
                <input type="text" />
                <MagnifyingGlassIcon/>
              </div>
            </div>
          </div>
          <div className="">
            <img src={workImage} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Homepage
