import React from 'react';
import './SigninPage.css';
import { GoogleLogin } from 'react-google-login';
import Axios from 'axios';
import { useState } from 'react';

const SigninPage: React.FC = () => {

        const [channelName, setChannelName] =  useState<string>("") 
        const [signinOption, setSigninOption] = useState<string>("")

        const responseGoogle = (res: any) => {
            console.log(res);

            const name = res.profileObj.name;
            const email = res.profileObj.email;
            const googleId = res.profileObj.googleId;
            const imageUrl = res.profileObj.imageUrl

            Axios.post("http://localhost:5000/user", {
                name: name,
                email: email,
                googleId: googleId,
                channelName: channelName,
                imageUrl: imageUrl,
            }).then((response) => {
                sessionStorage.setItem("loggedIn", "true");
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("imageUrl", imageUrl);
                sessionStorage.setItem("googleId", googleId);
            });

        }


    return (
        <div className="signinPage">
            <div className="container">
                {signinOption === "" ? (
                    <div className="body">
                        <button id="btn" onClick={() => setSigninOption('create')}>
                            {" "}
                            Create account
                        </button>
                        <button id="btn" onClick={() => setSigninOption('signin')}>
                            {" "}
                            Sign In
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="top">
                            <h1>{signinOption === "create" ? "Create Account": "Sign In"} With Google</h1>
                        </div>
                        <div className="body">
                            {signinOption === "create" && (
                                <input type='text' 
                                    placeholder='Channel name...' 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setChannelName(event.target.value)
                                    }}
                                /> 
                            )}   
                        <GoogleLogin 
                            clientId="239282461331-pbsrrulqjfurvnpf99gu48prhp82lqkp.apps.googleusercontent.com"
                            buttonText="SignIn"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
                        </div>                    
                    </>
                )}
            </div>
        </div>
    )
}

export default SigninPage;
