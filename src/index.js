import ReactDOM from 'react-dom/client';
import Home from './viwes/home/home';
import About from './viwes/about/about';
import Contact from './viwes/contact/contact';
import Login from './viwes/login/login';

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