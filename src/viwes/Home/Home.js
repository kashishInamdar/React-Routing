import Navbar from '../../component/Navbar/Navbar'
import Button from '../../component/Button/Button'
export default function Home(){
    return(
        <>
        <Navbar/>
        <h1 className='heading'>This is the Home Page</h1>
        <br/>
        <Button text="Home Page"/>
        </>
    )

}