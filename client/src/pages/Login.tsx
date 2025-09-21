import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../compenents/Nav';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse: any) => {

    const token = credentialResponse.credential

    const res = await axios.post(`${BACKEND_URL}/auth`,{
      token
    })
    localStorage.setItem("token", res.data.client_token);
    navigate("/account");
  };

  return (
    <>
    <Nav></Nav>
    <div className="flex justify-center items-center h-[90vh] bg-gradient-to-br from-gray-50 to-gray-100">
      
      <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center space-y-6 w-[380px]">
        
        
        <h1 className="text-2xl  text-gray-800">Login</h1>
        <p className="text-gray-500 text-center text-sm">
          Sign in to continue to your account
        </p>

        
        <div className="w-full flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => navigate("/login")}
            theme="outline"
            size="large"
            width="200"
          />
        </div>

       
        
      </div>
    </div>
    </>
  );
};

export default Login;
