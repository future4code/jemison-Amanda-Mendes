import React, { useState, useEffect } from "react";
import axios from "axios";
import {BoxContainer,
        Container, 
        HeaderMain, 
        HeaderImg, 
        HeaderImg2, 
        ContainerProfile, 
        ImgProfile, 
        TextProfile, 
        NameProfile} from "./Style"
import Logo from "../img/astromatch.png"
import "./TelaProfile.css"

const logo2 = "https://get.pxhere.com/photo/network-people-business-icon-social-friend-technology-concept-management-net-leader-corporation-marketing-community-society-team-connection-organization-communication-networking-crowd-company-connect-line-art-line-circle-clip-art-symbol-graphics-1625055.jpg";


const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-azevedo/person"; 
const url2 =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-azevedo/choose-person";

export default function TelaProfile(props) {
    const [perfil, setPerfil] = useState({});

    useEffect(() => {
        getEscolhaUmPerfil()
    }, [])

    const getEscolhaUmPerfil = () => {
        axios
            .get(url)
            .then((res) => {
                setPerfil(res.data.profile)
            })
            .catch((err) => {
                alert("Erro!")
            })
    }

    const escolhePerfil = (boolean) => {
        const headers = {
            "Content-Type": "application/json"
        }
        const body =
        {
            "id": perfil.id,
            "choice": boolean
        }
        axios
            .post(url2, body, headers)
            .then((res) => {
                getEscolhaUmPerfil()
            })
            .catch((err) => {
                alert("Puxa! Erro...")
            })

    }

    return (
        <BoxContainer>
            <Container>
                <HeaderMain>
                    <HeaderImg src={Logo} alt="Logo Astromatch" />
                    <HeaderImg2 src={logo2} onClick={() => { props.proximaPagina("TelaMatches") }} />
                </HeaderMain>
                <ContainerProfile>
                    <ImgProfile src={perfil.photo} alt={perfil.name} />
                    <TextProfile>
                        <NameProfile>
                            <p>{perfil.name}, {perfil.age}</p>
                            
                        </NameProfile>
                         <p>{perfil.bio}</p>
                    </TextProfile>

                </ContainerProfile>
                <div className="divCurtir">
                    <button className="ncurtir" onClick={() => escolhePerfil(false)}>X</button>
                    <button className="curtir" onClick={() => escolhePerfil(true)}>♥️</button>
                </div>
            </Container>
        </BoxContainer>
    );
}