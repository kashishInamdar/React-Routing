import ReactDOM from 'react-dom/client';
import Home from './viwes/Home/Home'
import About from './viwes/About/About';
import Contact from './viwes/Contact/Contact';
import Login from './viwes/Login/Login';

function App() {
    const path = window.location.pathname;
  
    switch (path) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      case "/login":
        return <Login />;
      default:
        return <h1>404 Page Not Found</h1>;
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {" "}
    <App />{" "}
    </>
);