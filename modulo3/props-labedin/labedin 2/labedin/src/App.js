import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MEw_uxTBRaOt_qPOQvI3PU_yYX5q9p_iJ-c23dvRDwk-Swnu1YJBG50Ox_9c7tHkB5k&usqp=CAU" 
          nome="Amanda Azevedo" 
          descricao="Oi, eu sou a Amanda. Sou estudante da Labenu. Estou cursando Desenvolvimento Web Full Stack, no momento estou aprendendo React. Sou apaixonada por desafios e aventuras."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/115/115757.png" 
          nome="Email"
          info="amandaazevedo62@gmail.com"
          
        /> 

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/126/126341.png" 
          nome="Telefone"
          info="(21) 99691-9828"
          
        /> 
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fgig4-1.fna.fbcdn.net/v/t1.6435-9/67585723_722090941578719_512692891823374336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEyoFYvUzGNXetLFVyDiyz40hwVOg5y4j3SHBU6DnLiPS3bQ3mY0vCNiaoqldGDAWezAc98ylzviz3BUJ_OR3Y5&_nc_ohc=GB29w6Ln4esAX_sqHw2&_nc_ht=scontent.fgig4-1.fna&oh=00_AT9nTDG4yEUVjUpASwGSPYppaQYwL8KU1u-53MSILvFeMw&oe=62DD5ED7" 
          nome="Amanda Azevedo - Confeitaria Artesanal" 
          descricao="Confeitaria" 
        />
        
        <CardGrande 
          imagem="https://ultraflux-1278.kxcdn.com/wp-content/uploads/2015/08/UltrafluxLogoTypoPantone-e1439281649737.jpg" 
          nome="USE-Ultraflux" 
          descricao="Área Comercial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
