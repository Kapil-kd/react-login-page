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
        <div className=".wrapper">
        <form className="register" onSubmit={handlesubmit}>
        <label htmlFor="name">Email</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="name" placeholder="Full name" name="name" id="name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="********" name="password" id="password"/>
            <button type="submit">Register</button>
        </form>
        <button className="togglebtn" onClick={()=>props.ontoggle("login")}>Already have an account? Login here.</button>
        </div>
    )
}