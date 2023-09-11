import './Navbar.css';
export default function navbar() {
    return(
        <div className='container'>
            <p className='navbar-heading'>Navbar</p>
            <div className='menu-div'>
                <button type='button' className='menu'>Home</button>
                <button type='button' className='menu'>About</button>
                <button type='button' className='menu'>Contact</button>
                <button type='button' className='menu'>Login</button>
            </div>
        </div>
    );
}