import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactJsAlert from "reactjs-alert"
import { Link } from 'react-router-dom'



const Login = () => {

    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: ''
    })
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("error");
    const [title, setTitle] = useState("Email or Password is not correct!! please try again");
    const navigate = useNavigate();

    //Handel login
    const handelLogin = (e) => {
        e.preventDefault();

        const localData = JSON.parse(localStorage.getItem('users')) || [];
        // const users = JSON.parse(localStorage.getItem("users")) || [];

        console.log(localData);
        // console.log(localData);
        let isRegistered = localData.map((e) => e.registerEmail === userLoginData.email && e.password === userLoginData.password);

        if (!isRegistered) {
            return setStatus(true)
        }

        localStorage.setItem('loggedin', true);

        navigate('/');

        //the best practice for this situation is to let the home page as the default page of the  webiste

    }

    return (

        <>
            <div    >

                <div className="bg--400 h-screen w-full">
                    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: '500px' }}>
                            <div className="flex flex-col w-full md:w-1/2 p-4">
                                <div className="flex flex-col flex-1 justify-center mb-8">
                                    <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
                                    <div className="w-full mt-4">
                                        <form className="form-horizontal w-3/4 mx-auto" onSubmit={handelLogin} method='get' >
                                            <div className="flex flex-col mt-4">
                                                <input id="email" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="email" placeholder="Email" value={userLoginData.email}
                                                    onChange={(e) => setUserLoginData({
                                                        ...userLoginData, [e.target.name]: e.target.value
                                                    })} />
                                            </div>
                                            <div className="flex flex-col mt-4">
                                                <input id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" value={userLoginData.password}
                                                    onChange={(e) => setUserLoginData({
                                                        ...userLoginData, [e.target.name]: e.target.value
                                                    })} />
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                                            </div>
                                            <div className="flex flex-col mt-8">
                                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                        {
                                            <ReactJsAlert
                                                status={status} // true or false
                                                type={type} // success, warning, error, info
                                                title={title}
                                                Close={() => setStatus(false)} />
                                        }
                                        <div className="text-center mt-4 ">
                                            <Link className="no-underline hover:underline text-blue-dark text-2xl " to="/Register" style={{ color: 'blue' }}>
                                                Register</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{ background: 'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Login;