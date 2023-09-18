import Navbar from '../../component/Navbar/Navbar'
import Button from '../../component/Button/Button'
import ProductCard from '../../component/ProductCard/ProductCard'
import './Home.css'

import pizza1 from './pizza1.jpeg'
export default function Home(){
    return(
        <>
        <Navbar/>
        <h1 className='heading'>This is the Home Page</h1>
        <div className='productCard'>
        <ProductCard ImgUrl={pizza1} heading={'Mioniz Pizza'}/> 
        <ProductCard ImgUrl={pizza1} heading={'Mioniz Pizza'}/> 
        <ProductCard ImgUrl={pizza1} heading={'Mioniz Pizza'}/> 
        </div>
        <br/>
        <Button text="Home Page"/>
        </>
    )

}