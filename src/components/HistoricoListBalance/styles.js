import styled from "styled-components";

export const Container = styled.View`
margin-bottom: 5px;
margin-left: 10px;
margin-right: 10px;
padding: 10px;
box-shadow: 2px 2px rgba(0,0,0, 0.40);
background-color: #303030;
border-radius: 5px;
`

export const Tipo = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const IconView = styled.View`
flex-direction: row;
background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
padding-bottom: 3px;
padding-top: 3px;
padding-left: 8px;
padding-right: 8px;
border-radius:  7px;
`

export const TipoText = styled.Text`
color: #fff;
font-size: 16px;
font-style: italic;
`

export const DateMov = styled.Text`
color: #ccc;
font-size: 14px;
font-style: italic;
`

export const ValorText = styled.Text`
color: #fff;
font-size: 22px;
font-weight: bold;
`

