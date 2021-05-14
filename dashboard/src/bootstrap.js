import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// 1. create a mount function
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};
// if in development and in isolation execute mount
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// export mount for the container to use
export { mount };