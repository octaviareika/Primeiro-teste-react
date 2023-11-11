import { useState } from "react";




export default function MeuContador (){

    const [contador, setContador] = useState(0); // usado para renderizar 

    function aumentar(){
        setContador(contador + 1)
    }
    function diminuir(){
        setContador(contador -1)
    }

    if (contador > 5){
        return (
            <div>
                <h1>Valor muito grande!!</h1>
                <button onClick={aumentar}>aumentar</button>
                <button onClick={diminuir}>diminuir</button>
            </div>
        )
    }
    return (

        <div>
            <h1>Meu contador : {contador}</h1> 
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )
        
    
}

