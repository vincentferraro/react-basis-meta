import '../../App.css';
import { useState } from "react";

export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

const Form = ()=>{
    const[firstName, setFirstName]= useState("")
    const[lastName, setLastName]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState({
        value:"",
        isTouched:false
    })

    const [role, setRole] = useState("role")

    const getIsFormValid = () => {
      if(firstName.length > 0 && lastName.length > 0 && validateEmail(email) !== null &&password.length >=8 && role !== "role"){
        return false
      }else{
        return true;
      }
      
    };
    
  
    const clearForm = () => {
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
    };

    const handleSubmit = (e) => {
      alert("Account created!");
      clearForm();
    };

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" onChange={(e)=>{setLastName(e.target.value)}}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            {password.length < 8? <PasswordErrorMessage />: null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={(e)=>{setRole(e.target.value)
            console.log(role)}}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
        </div>
    )
}

export default Form;