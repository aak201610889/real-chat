import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Capture.PNG'
import smLogo from '../assets/sm.PNG'
function Login() {
  const [user, setUser] = useState({email:"",password:""})

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const Submit = (e) =>  {
  //async
   
    e.preventDefault();
    // try {
    //   await axios.post("/user/Login", { ...user });
    //   localStorage.setItem("firstLogin", true);
    //   window.location.href = "/";
    // } catch (err) {
    //   alert(err.response.data.msg);
    // }
  };

  return (
    <div className="bg-[#2c2c2c] h-[100vh] "  >
      <div className="lg:flex md:flex block  justify-center items-center w-[100%] h-[100%]">
        <img src={smLogo} alt=""  className="w-[40%] m-auto pt-[10%] pb-[8%] lg:hidden md:hidden  block" />

      <div className="flex justify-center items-center w-[75%] m-auto lg:bg-[#5ACA50] md:bg-[#5aca50]  lg:h-[80vh] md:h-[50%] border-[#5ACA50] border-2
      rounded-3xl
">
      <div className=" bg-[#5ACA50] w-[45%] h-[100%]  rounded-2xl lg:flex md:flex items-center hidden"><img src={logo} alt="" /></div>
      <form action="" onSubmit={Submit} className="lg:w-[55%] md:w-[55%] sm:w-[80%] lg:bg-white md:bg-white h-[100%]   rounded-r-2xl  ">
     
        <input type="text" className="block border-[#5aca50] border-[3px] py-[1%] m-auto mt-[25%] lg:w-[80%] md:w-[80%] w-[95%] lg:text-3xl md:text-2xl text-xl placeholder:text-[#7AC973]  capitalize pl-[3%]  h-[50px]  rounded-3xl" value={user.email}  onChange={changeInput} placeholder="Email" name="email"/>
        <input type="text" className="block border-[#5aca50] border-[3px] py-[1%] m-auto mt-[7%] lg:w-[80%] md:w-[80%] w-[95%] lg:text-3xl md:text-2xl text-xl placeholder:text-[#7AC973]  capitalize pl-[3%]  h-[50px] rounded-3xl" value={user.password}  onChange={changeInput} placeholder="password" name="password"/>
        <button  type="submit" className=" block capitalize pl-[3%] w-[50%] m-auto lg:h-[50px] md:h-[50px] h-[40px] rounded-3xl bg-[#5aca50] mt-[5%] lg:text-3xl md:text-2xl text-xl text-white mb-[15%]">Confirm</button>
        <p className="m-auto lg:text-3xl md:text-2xl text-sm lg:w-[75%] lg:text-[#2c2c2c] md:text-[#2c2c2c] text-white mb-[15%]">if you don't have account <Link to='/register' className="text-[#5aca50]">Register</Link> </p>
      </form>
      </div>
 
      </div>
    </div>
  );
}

export default Login;
