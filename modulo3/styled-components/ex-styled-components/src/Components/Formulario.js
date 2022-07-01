import React from "react";
import styled from "styled-components";

const EstiloFormulario = styled.div`
display: flex;
`

export function Formulario (props) {
    return(
        <EstiloFormulario>
            <span>
                <form>
                <label>
                Remetente:
                <input type="text" name="name" />
                </label>
                </form>
            </span>
            <span>
                <form>
                <label>
                Nome:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Enviar Mensagem" />
                </form>
            </span>
        </EstiloFormulario>
    )
}