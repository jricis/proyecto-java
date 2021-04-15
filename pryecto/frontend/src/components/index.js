import React from 'react';
import Buscador from './Buscador';
import CardsRestaurantes from './CardsRestaurantes';
import Footer from './Footer';
import LoginUser from './LoginUser';
const Home = () =>{

        return( 
            
            <div className="home">
                <div className="bloque1">
                    <div className="logo">
                            <img src="logo1.png" alt="logo"/>
                    </div>
                </div>
                
                    
                    <div className="bloque2 h-800">      
                            <div className="tags">
                                <CardsRestaurantes></CardsRestaurantes>
                                
                            </div> 
                                <Footer></Footer>
                        </div>
                



            </div>
        );  
    }  

export default Home;