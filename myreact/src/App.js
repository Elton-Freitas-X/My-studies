import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social fb={props.facebook} insta={props.instagram}/>
            <hr />
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o {props.nome}</h2>
            <h3>Cargo : {props.cargo}</h3>
            <p>idade : {props.idade} anos</p>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook  </a>|
            <a href={props.insta}>Instagram  </a>|
            <a>Fotos da maravilhosa</a>
        </div>
    );
}

function App(){
    return(
    <div>
        <h1>Conheça nossa equipe</h1>
        <Equipe 
        nome="Cecilia" cargo="Musicista" 
        idade="20" facebook="http://cecilia.com.br" 
        instagram="http://ceciliasouumbebe.com.br"      
        />

        <Equipe
        nome="Petra" cargo="Modelo" idade="17"
        facebook="http://cecilia.com.br"
         />
    </div>
    );
}

export default App;