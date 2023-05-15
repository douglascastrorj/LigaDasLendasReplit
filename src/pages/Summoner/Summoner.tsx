import ComponenteComProps from '../../components/ComponenteComProps/ComponenteComProps'
import ComponenteComState from '../../components/ComponenteComState/ComponenteComState'
import ComponenteSemPropsESemState from '../../components/ComponenteSemPropsESemState/ComponenteSemPropsESemState'
import './Summoner.css'

export default function Summoner(props: any) {
    return (
        <>
       
            <div className='container'>
            
        
                <ComponenteSemPropsESemState />

                <ComponenteComProps nome='Comprops' />

                <ComponenteComState />

            </div>
        </>
    )
}