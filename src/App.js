import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes/Routes';

function App() {
  return (
    <div className="main-page">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
