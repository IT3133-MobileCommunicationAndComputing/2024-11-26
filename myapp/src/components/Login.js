import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const[user, setuser] = useState({username:"", pwd:"", error:""})
    const getTextInput =(e)=>{
        const{name,value}=e.target;
        setuser((prevUser)=>({
            ...prevUser,[name]:value,
        }))
    }
    const aunthenticate = () => {
        if(user.username === "Admin" && user.pwd === "abc@123"){
           setuser({username:"", pwd:"", error:""}) 
           navigate('/dash');
        }
        else{
            setuser({'error':"Please chech your username and password !"})
        }
    }
    return(
        <div>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" onChange={getTextInput}/> </td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="pwd" onChange={getTextInput}/></td>
                </tr>
                <tr>
                    <td style={{color: 'red'}} colSpan={2}>{user.error}</td>
                </tr>
            </table>
            <button onClick={aunthenticate}>Login</button>
        </div>
    );
}