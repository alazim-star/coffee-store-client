import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const SignIn = () => {
const {signInUser}=useContext(AuthContext)


const handleSignIn=e=>{
  e.preventDefault()
  const email=e.target.email.value 
  const password=e.target.password.value 
  console.log(email,password);
  signInUser(email,password)
  .then(result=>{ 
    console.log(result.user);

// update last login time 
const lastSignInTime=result?.user?.metadata?.lastSignInTime

const loginInfo ={email,lastSignInTime}

fetch(`http://localhost:5000/users`,{
    method:'PATCH',
    headers:{
        'content-type':'application/json'
},
      body:JSON.stringify(loginInfo)
})
.then(res=>res.json())
.then(data=>{
  console.log('sign in info update in db',data);
})

  })
  .catch(error=>{
    console.log(error);
  })
}




    return (
        <div>
            

            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
   
    <div className="card bg-base-100 w-[350px] shrink-0 shadow-2xl">
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Sign In now!</h1>
     
    </div>
      <form onSubmit={handleSignIn} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
       <Link to="/signUp"><p>new to coffee drinker Sign Up</p></Link>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default SignIn;