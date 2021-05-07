import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const isUserLoggedIn = localStorage.getItem('user')



const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1  },
    { path: '/auth/signin', exact: true, name: 'Giriş Yap', component: Signin1 }
];

export default route;