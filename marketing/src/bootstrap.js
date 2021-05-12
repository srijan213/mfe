import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1. create a mount function
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el,
    );
};
// if in development and in isolation execute mount
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// export mount for the container to use
export { mount };