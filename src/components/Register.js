
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactJsAlert from "reactjs-alert"

import { Link } from 'react-router-dom'


const Register = () => {

    //Handel Register
    const navigate = useNavigate();
    const [registerInputs, setRegisterInputs] = useState({
        firstName: '',
        lastName: '',
        registerEmail: '',
        registerPassword: ''
    })

    const [status, setStatus] = useState(false);
    const [type, setType] = useState("error");
    const [title, setTitle] = useState("All fileds are requierd! ");

    const array = [];
    const user1 = { firstName: 'emad', lastName: 'hashash', registerEmail: 'emad@gmail.com', registerPassword: '12345' }
    localStorage.setItem('users', JSON.stringify(array))



    //On submit for the form ------>
    const handelRegisterSumbit = (e) => {
        e.preventDefault();

        if (!registerInputs.firstName || !registerInputs.lastName || !registerInputs.registerEmail || !registerInputs.registerPassword) {
            return setStatus(true)
        }
        //here we need to check the local storage data if exist
        const localData = JSON.parse(localStorage.getItem('users')) || [];

        let isExist = localData.find((e) => e.registerEmail === registerInputs.registerEmail)
        if (isExist) {
            return alert('This email is used')
        }
        array.push(registerInputs)
        localStorage.setItem('users', JSON.stringify(array));

        navigate('/')

        return console.log('user registered successfully');
    }



    return (
        <>
            <div>
                <div className="-400 h-screen w-full">
                    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: '500px' }}>
                            <div className="flex flex-col w-full md:w-1/2 p-4">
                                <div className="flex flex-col flex-1 justify-center mb-8">
                                    <h1 className="text-4xl text-center font-thin">Register</h1>
                                    <div className="w-full mt-4">
                                        <form className="form-horizontal w-3/4 mx-auto" onSubmit={handelRegisterSumbit} id='register'>
                                            <div className="flex flex-col mt-4">
                                                <input id="fname" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="firstName" placeholder="First Name" value={registerInputs.firstName}
                                                    onChange={(e) => setRegisterInputs({
                                                        ...registerInputs, [e.target.name]: e.target.value
                                                    })} />
                                            </div>
                                            <div className="flex flex-col mt-4">
                                                <input id="lname" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="lastName" placeholder="Last Name" value={registerInputs.lastName}
                                                    onChange={(e) => setRegisterInputs({
                                                        ...registerInputs, [e.target.name]: e.target.value
                                                    })} />
                                            </div>
                                            <div className="flex flex-col mt-4">
                                                <input id="email" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="registerEmail" placeholder="Email" value={registerInputs.registerEmail}
                                                    onChange={(e) => setRegisterInputs({
                                                        ...registerInputs, [e.target.name]: e.target.value
                                                    })} />
                                            </div>
                                            <div className="flex flex-col mt-4">
                                                <input id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="registerPassword" required placeholder="Password" value={registerInputs.registerPassword}
                                                    onChange={(e) => setRegisterInputs({
                                                        ...registerInputs, [e.target.name]: e.target.value
                                                    })} />
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                                            </div>
                                            <div className="flex flex-col mt-8">
                                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                        {<ReactJsAlert
                                            status={status} // true or false
                                            type={type} // success, warning, error, info
                                            title={title}
                                            Close={() => setStatus(false)}
                                        />}
                                        <div className="text-center mt-4">
                                            <Link className="no-underline hover:underline text-blue-dark text-2xl" to="/Login">
                                                Login
                                            </Link>
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


export default Register;
