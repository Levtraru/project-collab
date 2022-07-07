import LoginForm from "./LoginForm";
import {useState} from 'react';
function Loginapp() {
    const adminUser={
      email:"1",password:"1"
    }
    const Login=details=>{console.log(details);
      if(details.email==adminUser.email&&details.password==adminUser.password)
      {console.log("Logged In");
      setUser({
        name: details.name,
        email:  details.email
              }
             )
      }
      
      else{
        setError("Details do not Match");
        details.name="";
        details.email="";
        details.password="";
      }
  
    }
    const Logout=()=>{
      setUser({name:"",email:""});
    }
  
    const [user,setUser]=useState({name:"",email:""}); //con esto conseguimos el usuario y el metodo para conseguirlo
    const [error,setError]=useState("");//conseguimos si nuestros detalles son correctos al logear
    return (
      <div>
        {(user.email!="")?(
            <div className='welcome'>
              <h2>Welcome,<span>{user.name}</span></h2>
              <button onClick={Logout}>Logout</button>
              </div>
        ):(
          <LoginForm Login={Login} error={error}/>
        )}
      </div>
    );
  }

  export default Loginapp;