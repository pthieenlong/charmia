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
            <a href="#" className="text-white block px-[1rem] py-[0.5rem] rounded-[2rem] bg-lightblue">Post a project</a>
          </div>
        </nav>
        <div className="flex w-[1280px]">
          <div className="w-[634px] flex flex-col items-center justify-center">
            <div className="">
              <h1 className="font-bold text-[3rem]">
                Are you looking for <br /> Freelancers ?
              </h1>
              <p className="text-[#828282] text-[1rem]" >
                Hire Great Freelancers, Fast. Spacelance helps <br/> you hire elite freelancers at a moment's notice
              </p>
            </div>
            <div className="flex items-center justify-center gap-1 w-full">
              <a href="#" className="bg-lightblue text-white w-[50%]">Hire a freelancer</a>
              <div className="flex flex-rows w-[50%]">
                <input type="text"/>
                <MagnifyingGlassIcon className="w-[1.5rem]"/>
              </div>
            </div>
          </div>
          <div className="w-[768px]">
            <img src={workImage} alt="" className="w-full" />
          </div>
        </div>
      </div>
  )
}

export default Homepage
