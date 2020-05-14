# React_Native_Practice
React_Native_Practice

IN AWS Amplify

./src/aws-exports.js

const config = {
  identityPoolId:'{}',
  region:'{}',
  userPoolId:'{}',
  userPoolWebClientId:'{}',
}

export default config;


in App.js signup function:
Auth.signUp({
        username: '{}',
        password: '{}',
        attributes:{
          email: '{}',
          phone_number:'{}',
        },
      })
