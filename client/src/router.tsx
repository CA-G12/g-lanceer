import { createBrowserRouter, useParams } from 'react-router-dom';
import App from './App';

const Jop = () => {
    const { id } = useParams();
    return <>
        <h1>jop {id}</h1>
    </>
}
const Freelancer = () => {
    const { id } = useParams();
    return <>
        <h1>freelancer {id}</h1>
    </>
}
const Client = () => {
    const { id } = useParams();
    return <>
        <h1>client {id}</h1>
    </>
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <h1>landing</h1> },
            { path: 'login', element: <h1>login</h1> },
            { path: 'signup', element: <h1>signup</h1> },
            { path: '/jobs-search', element: <h1>Search</h1> },
            { path: 'job/:id', element: <Jop /> },
            { path: 'freelancer/:id', element: <Freelancer /> },
            { path: 'client/:id', element: <Client /> },
        ],
    },
    { path: '*', element: <h1>page not found</h1> },
]);

export default router;