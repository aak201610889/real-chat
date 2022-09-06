import React, { useState } from "react";
import logo from '../assets/Capture.PNG'
import smLogo from '../assets/sm.PNG'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Register() {
  const [user, setUser] = useState({name:'',email:"",password:"",confirmPassword:""})

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const Submit = (e) =>  {
  //async
  console.log(user)
   
    e.preventDefault();
    if(user.password!==user.confirmPassword){
      toast.error('password not matching with confirm password.',{
        position:"top-center",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      })
    
    }
     if(user.name.length<3){
      toast.error('username should be more than 3 charcteres.',{
        position:"top-center",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      })}
     if(user.email.length<3){
      toast.error('email should be more than 3 charcteres.',{
        position:"top-center",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      })
     }
     if(user.password.length<8){
      toast.error('password should be more than 8 charcteres.',{
        position:"top-center",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      })
     }
    // try {
    //   await axios.post("/user/register", { ...user });
    //   localStorage.setItem("firstLogin", true);
    //   window.location.href = "/";
    // } catch (err) {
    //   alert(err.response.data.msg);
    // }
  };

  return (
    <div className="bg-[#2c2c2c] h-[100vh] "  >
      <ToastContainer/>
      <div className="lg:flex md:flex block  justify-center items-center w-[100%] h-[100%]">
        <img src={smLogo} alt=""  className="w-[40%] m-auto pt-[10%] pb-[8%] lg:hidden md:hidden  block" />

      <div className="flex justify-center items-center w-[75%] m-auto lg:bg-[#5ACA50] md:bg-[#5aca50]  lg:h-[80vh] md:h-[50%] border-[#5ACA50] border-2
      rounded-3xl
">
      <div className=" bg-[#5ACA50] w-[45%] h-[100%]  rounded-2xl lg:flex md:flex items-center hidden"><img src={logo} alt="" /></div>
      <form action="" onSubmit={Submit} className="lg:w-[55%] md:w-[55%] sm:w-[80%] lg:bg-white md:bg-white h-[100%]   rounded-r-2xl  ">
     
        <input type="text" className="block border-[#5aca50] border-[3px] py-[1%] m-auto mt-[15%] lg:w-[80%] md:w-[80%] w-[95%] lg:text-3xl md:text-2xl text-xl placeholder:text-[#7AC973]  capitalize outline-none pl-[3%]  h-[50px]  rounded-3xl" value={user.name}  onChange={changeInput} placeholder="name" name="name"/>
        <input type="text" className="block border-[#5aca50] border-[3px] py-[1%] m-auto mt-[7%] lg:w-[80%] md:w-[80%] w-[95%] lg:text-3xl md:text-2xl text-xl placeholder:text-[#7AC973]  capitalize outline-none pl-[3%]  h-[50px] rounded-3xl" value={user.email}  onChange={changeInput} placeholder="email" name="email"/>
        <input type="text" className="block border-[#5aca50] border-[3px] py-[1%] m-auto mt-[7%] lg:w-[80%] md:w-[80%] w-[95%] lg:text-3xl md:text-2xl text-xl placeholder:text-[#7AC973]  capitalize outline-none pl-[3%]  h-[50px] rounded-3xl" value={user.password}  onChange={changeInput} placeholder="password" name="password"/>
        <input type="text" className="block border-[#5aca50] border-[3px] py-[1%] m-auto mt-[7%] lg:w-[80%] md:w-[80%] w-[95%] lg:text-3xl md:text-2xl text-xl placeholder:text-[#7AC973]  capitalize outline-none pl-[3%]  h-[50px] rounded-3xl" value={user.confirmPassword}  onChange={changeInput} placeholder="confirm password" name="confirmPassword"/>
        <button  type="submit" className=" block capitalize outline-none pl-[3%] w-[50%] m-auto lg:h-[50px] md:h-[50px] h-[40px] rounded-3xl bg-[#5aca50] mt-[5%] lg:text-3xl md:text-2xl text-xl text-white mb-[15%]">Confirm</button>
      </form>
      </div>
 
      </div>
    </div>
  );
}

export default Register;
