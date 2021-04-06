import React, {setEstate, useState} from 'react'


const Buscador = () =>{
    const Barra = {width: "40rem", height: "2rem", background:"#F2F1F9", border:"5rem", align:"center"}
    const [keyword, setKeyword] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleChange = e =>{
        setKeyword(e);
    }
    return(
        
    <div>
        <input
        style={Barra}
        key="palabraClave1"
        value={keyword}
        placeholder={"Buscar restaurante..."}
        onChange={(e)=> handleChange(e.target.value)} /> 
        


        <button type="submit" onSubmit={handleSubmit(onSubmit)} className="btn btn-primary"> Buscar </button>
    </div>
     
    );
}

export default Buscador;