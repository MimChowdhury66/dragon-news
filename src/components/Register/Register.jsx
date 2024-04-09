import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // const name = form.get('name');
        // const photo = form.get('photo url');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        createUser(email, password)
            .then(result => {
            console.log(result)
        })
            .catch(error => {
    console.log(error)
})

    }



    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl">Please Register Here</h2>


            <form onSubmit={handleRegister} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo url' placeholder="Photo URL" className="input input-bordered" required />
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
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-3">Already have an account? <Link className="text-blue-600" to='/login'>LogIn</Link> </p>
        </div>
    );
};

export default Register;