import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp = (event ) =>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value
        const name=form.name.value
        const password=form.password.value
        createUser(email,password)
        .then(result =>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2  flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           
            <img className='w-3/4' src={signup} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm py-20 shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Sign</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Log In</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;