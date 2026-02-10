
//para chamar componentes seprados deve desestruturar os props (objeto inteiro) deve por {}
function Pessoa({nomes, idade, profissao, foto}){

    return(
        <div>
            <img src = {foto} alt="Foto da pessoa"/>
            <h2>{nomes}</h2>
            <p>idade: {idade}</p>
            <p>profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa