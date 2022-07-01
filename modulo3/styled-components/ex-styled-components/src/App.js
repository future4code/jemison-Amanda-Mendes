import React from 'react';
import styled from 'styled-components'
import {IconeLogo} from './Components/IconeLogo'
import { Footer } from "./Components/Styles";
import { Formulario } from './Components/Formulario';
import GlobalStyle, { createGlobalStyle } from './Components/GlobalStyle';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Main = styled.div`
  display: flex;
  background-color: white;
  height: 100vh;
  width: 80%;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  align-items: flex-start;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
`

function App() {
  return (
  <MainContainer>
    <Main>
      <Header>
        <IconeLogo
        icone={'https://i.ytimg.com/an/_cy2msyfX-I6vXt0oxRGEg/featured_channel.jpg?v=62829fba'}
        titulo={'WhatsLab'}
        />
     </Header>
    
     <Container>
        <Formulario/>
     </Container>
     <GlobalStyle/>
    </Main>
    <Footer>
      <p>Copyright 2022 Labenu All rights reserved R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</p>
    </Footer>
 </MainContainer>
  );
}

export default App;
