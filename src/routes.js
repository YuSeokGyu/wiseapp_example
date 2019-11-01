import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';

const routes = [
    { path: '/', name: '서비스소개', component: Main, exact: true },
    { path: '/dashboard', name: '전체 대시보드', component: Dashboard },
];

export default routes;
