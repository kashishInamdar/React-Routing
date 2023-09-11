import Navbar from '../../component/navbar/navbar'
import Button from '../../component/button/button'
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