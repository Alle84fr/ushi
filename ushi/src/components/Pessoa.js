function Pessoa(props){

    return(
        <div>
            <img src = {props.foto} alt="Foto da pessoa" />
            <h2>{props.nomes}</h2>
            <p>idade: {props.idade}</p>
            <p>profissão: {props.profissao}</p>

        </div>
        
    )
}

export default Pessoa