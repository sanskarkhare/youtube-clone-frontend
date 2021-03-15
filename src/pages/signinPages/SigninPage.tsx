import React from 'react';
import './SigninPage.css';
import { GoogleLogin } from 'react-google-login';
import Axios from 'axios';

const SigninPage: React.FC = () => {

        const responseGoogle = (res: any) => {
            console.log(res);

            const name = res.profileObj.name;
            const email = res.profileObj.email;
            const googleId = res.profileObj.googleId;

            Axios.post("http://localhost:5000/signin", {
                name: name,
                email: email,
                googleId: googleId,
            }).then((response) => {
                console.log('success');
            });

        }


    return (
        <div className="signinPage">
            <div className="container">
                <div className="top">
                    <h1>Sign In With Google</h1>
                </div>
                <div className="body">
                    <GoogleLogin 
                        clientId="239282461331-pbsrrulqjfurvnpf99gu48prhp82lqkp.apps.googleusercontent.com"
                        buttonText="SignIn"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
            </div>
        </div>
    )
}

export default SigninPage;
