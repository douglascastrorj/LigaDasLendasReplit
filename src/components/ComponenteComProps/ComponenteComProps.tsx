import './ComponenteComProps.css'

export default function ComponenteComProps(props: any) {
    return (
        <div className='caixa'>
            <span> Sou Um Componente que recebe propriedades por parametro </span>
            <span> Meu Nome é {props.nome} </span>
        </div>
    )
}