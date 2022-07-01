import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  display: flex;
  margin-top: 10px;

  h1{
	padding-top: 30px;
  }
`
const IconImage = styled.img`
  margin-right: 5px;
  width: 30%;
`	

export function IconeLogo(props) {
	return <Logo>
		<IconImage alt={'Icone'} src={props.icone}/>
		<h1>{props.titulo}</h1>
	</Logo>
}
