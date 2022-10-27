import { createBrowserRouter } from "react-router-dom";
import Login from "../../authentications/Login/Login";
import Register from "../../authentications/Register/Register";
import Main from "../../Main/Main";
import About from "../../pages/About/About";
import Blogs from "../../pages/Blogs/Blogs";
import Categories from "../../pages/Categories/Categories";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import MainHome from "../../pages/MainHome/MainHome";
import NotFound from "../../pages/NotFound/NotFound";
import Programming from "../../pages/Programming/Programming";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },
            {
                path: '/home',
                element: <MainHome></MainHome>
            },
            {
                path: '/courses',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/main')
            },
            {
                path: '/courses',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/main')
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/programming/:id',
                element: <Programming></Programming>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            }
            
        ]
        
    },
    {
        path: '*',
        element: <div className="fs-2 text-center"> Wrong URL, Please Provide A valid URL!!! Thank You!!!</div>
    }
    
])