
import react from "react"
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';





const navbarlinks = [
  {
    id : 1,
    LinkTo : "/",
    title : "Home",
},
  {
    id :2,
    LinkTo : "/Cards",
    title : "Cards",
},
  {
    id : 3,
    LinkTo : "/Expense",
    title : "Expense",
},
  {
    id : 4,
    LinkTo : "/Wordcounter",
    title : "Wordcounter",
}
]


    
    const Navbar = () => {
      const [toggle,settoggle]=useState(false);
      function handlemenu(){
        settoggle(!toggle)
        console.log(toggle)
          
      }
      return (
       <>
       <div className='flex justify-around items-center bg-slate-500 flex-wrap '>
        <div className="text-[30px] md:hidden block absolute right-5 top-5">
       {toggle ? (  <div >
          <IoMenu className="text-white " 
           onClick={handlemenu} />
        </div   >)
        :
        ( <div className="text-[22px]">
        <RxCross2 onClick={handlemenu}  className="text-white"/>
      </div>)}
        </div>
        <div  className={`${toggle ? "hidden" : "md:flex items-center gap-[5rem] text-white text-xl '"}`}>
        <img src={logo} alt="" />
        {navbarlinks.map(({ id, LinkTo, title }, index) => {
            return (
              <Link key={id} to={LinkTo}>
                {title}
              </Link>
            );

})}
        </div> 
    </div></>
      )
    }
    
    export default Navbar