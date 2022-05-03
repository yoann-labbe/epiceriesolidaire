import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);

// Pour configuration voir cette video :https://www.youtube.com/watch?v=5-jBzkttbx0
// ce lien : https://www.npmjs.com/package/react-google-login
// https://www.youtube.com/watch?v=3cO_1FUvjrY