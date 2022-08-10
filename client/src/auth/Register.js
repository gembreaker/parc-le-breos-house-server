import {useState} from 'react';
import RegisterForm from '../Components/RegisterForm';
import { toast } from 'react-toastify';
import {register} from '../actions/auth';

const Register = ({ history }) => {
    const [first_name, setFname] = useState('');
    const [last_name, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await register({
                first_name, 
                last_name, 
                email, 
                password,
                phone_number, 
            });
        toast.success('Registration successful. Please Login.');
        history.push('/login');
        } catch(err){
            console.log(err);
            if(err.response.status === 400) toast.error(err.response.data);
        }
    };

    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center login">
                <h1 style={{color: 'white'}}>Register</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <RegisterForm 
                            handleSubmit={handleSubmit} 
                            first_name={first_name} 
                            setFname={setFname} 
                            last_name={last_name} 
                            setLname={setLname} 
                            email={email} 
                            setEmail={setEmail} 
                            password={password} 
                            setPassword={setPassword} 
                            phone_number={phone_number} 
                            setPNumber={setPNumber} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;