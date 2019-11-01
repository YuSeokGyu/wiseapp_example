import Main from './components/main/Main';
import Test1 from './components/test/Test1';

const routes = [
    { path: '/', name: '서비스소개', component: Main, exact: true },
    { path: '/test1', name: 'test1', component: Test1 },
];

export default routes;
