import {useForm} from "react-hook-form";
import {useState}from 'react';
function LoginForm ({Login,error}) {
  const[details,setDetails]=useState({name:"",password:"",email:""});
  const submitHandler=e=>{ //cuando le das al submit esto permite que pasen cosas
    e.preventDefault(); //evita renderizados
    Login(details);//usamos la funcion login que pasamos por prop
  }
  // const {register,handleSubmit}=useForm(); 
    return (
      <form onSubmit={submitHandler} >
        {(error!="")?(<div className="error">{error}</div>):""}
        <label htmlFor="name">Username</label>
        <input  name="name" onChange={e=>setDetails({...details,name:e.target.value})}value={details.name}/>
        <label htmlFor="Email">Email</label>
        <input placeholder="Email" name="email" onChange={e=>setDetails({...details,email:e.target.value})}value={details.email} />
        <label htmlFor="Password">Password</label>
        <input placeholder="Password"name="password" onChange={e=>setDetails({...details,password:e.target.value})}value={details.password} />

        <select> 
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="NonBinary">NonBinary</option>
        </select>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
  
  export default LoginForm;
