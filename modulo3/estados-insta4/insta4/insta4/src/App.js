import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

            <Post
            nomeUsuario={'amanda'}
            fotoUsuario={'https://veja.abril.com.br/wp-content/uploads/2018/05/modelo-branca-oculos-20170723-001.jpg'}
            fotoPost={'https://www.melhoresdestinos.com.br/wp-content/uploads/2022/01/lago-peyto-canada.jpg'}
          />

            <Post
            nomeUsuario={'giselle'}
            fotoUsuario={'https://anaclaudiathorpe.ne10.uol.com.br/wp-content/uploads/2022/01/1534257352.jpg'}
            fotoPost={'https://cache.quantocustaviajar.com/blog/wp-content/uploads/2016/10/banff13.jpg'}
          />
        </MainContainer>
)

}


export default App;
