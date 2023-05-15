import { useState } from 'react'
import './ComponenteComState.css'

export default function ComponenteComState(props: any) {

    const [valor, setValor] = useState(0);


    const somaValor = () => {
        setValor(valor + 1);
    }

    const subtraiValor = () => {
        setValor(valor - 1);
    }


    return (
        <div className='caixa'>
            <span> Sou Um Componente que possui estado interno </span>
            <span> meu estado interno é: {valor} </span>

            <button onClick={somaValor}> + </button>

            <button onClick={subtraiValor}> - </button>
        </div>
    )
}