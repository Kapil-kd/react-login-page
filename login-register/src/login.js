import react,{useState} from "react"

export const Login = (props)=>{
const [email,setEmail] = useState("");
const [pass,setPass] = useState("");

const handlesubmit = (event)=>{
  event.preventDefault();
  console.log(email);
  console.log(pass);
}

return(
    <div className="wrapper">
        <form className="login" onSubmit={handlesubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="********" name="password" id="password"/>
            <button type="submit">Login</button>
        </form>
        <button className="togglebtn" onClick={()=>props.ontoggle("register")}>Don't have an account? Register here.</button>
    </div>
)
}