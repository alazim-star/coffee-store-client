

import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {

  const {createUser}=useContext(AuthContext)

  const handleSignUp=e=>{
    e.preventDefault()

    const name=e.target.name.value
    const email=e.target.email.value
    const password=e.target.password.value
    console.log('from sign up',email,password);
    createUser(email,password)
    .then(result=> {
     console.log('user created at firebase',result.user);
const createdAt=result?.user?.metadata?.creationTime
     const newUser={name,email,createdAt}

// save new user info to the data base

fetch('http://localhost:5000/users',{
  method:'POST',
  headers: {
    'content-type':'application/json'
  },

  body: JSON.stringify(newUser)

})
.then(res=>res.json())
.then(data=>{

  if (data.insertedId) {
    console.log('user created in db');
    
  }
})



    })
    .catch(error => {
    
      console.log('error',error);
    });



  }
    return (
        <div>


            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
   
    <div className="card bg-base-100 w-[350px] shrink-0 shadow-2xl">
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Sign Up now!</h1>
     
    </div>
      <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default SignUp;