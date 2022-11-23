import styled from "styled-components";

export const Background = styled.View`
flex: 1;
background-color: #000;
`;

export const Container = styled.View`
margin-left: 15px;
margin-right: 15px;
margin-bottom: 10px;
height: 150px;
border-radius: 20px;
background-color: #303030;
`;

export const BoasVindas = styled.Text`
flex-direction: row;
font-size: 19px;
padding-left: 20px;
padding-top: 15px;
`;

export const Nome = styled.Text`
font-size: 19px;
color: #00b94a;
font-style: italic;
margin-top: 20px;
margin-left: 20px;
`;
 
export const Saldo = styled.Text`
margin-top: 5px;
font-size: 20px;
color: #fff;
font-weight: bold;
`;

export const TitleBalance = styled.Text`
font-size: 25px;
color: #fff;
font-weight: 300;
`;

export const Title = styled.Text`
margin-left: 5px;
color: #00b94a;
font-size: 20px;
margin-bottom: 10px;
`;

export const TitleCard = styled.Text`
margin-left: 15px;
margin-bottom: 10px;
color: #fff;
font-size: 25px;
font-weight: 300;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
background-color: #000;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-left: 8px;
margin-right: 8px;
`;

export const Area = styled.View`
flex-direction: row;
margin-left: 15px;
align-items: center;
margin-bottom: 5px;
margin-top: 15px;
`;

export const Tipo = styled.View`
background-color: red;
`;

