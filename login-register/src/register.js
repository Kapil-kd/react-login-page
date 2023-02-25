import react ,{useState} from "react"


export const Register = (props)=>{
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const[name,setName] = useState("");

    const handlesubmit = (event)=>{
        event.preventDefault();
        console.log(email);
        console.log(pass);
      }
      

    return(
        <div className="main">
        <form className="register" onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="name" placeholder="Full name" name="name" id="name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="********" name="password" id="password"/>
            <button type="submit">Register</button>
        </form>
        <button className="togglebtn" >Already have an account? <span className="clklogin" onClick={()=>props.ontoggle("login")}> Login here.</span></button>
        </div>
    )
}