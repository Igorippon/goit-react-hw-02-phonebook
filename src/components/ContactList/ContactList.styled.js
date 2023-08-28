import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction:column;
align-items: center;
gap: 20px;
width: 400px;
margin-top:30px;
`;

export const Item = styled.li`
display: flex;
width: 100%;
justify-content: space-between;
align-items:center;
padding:8px;
border-radius: 4px;
border: 1px solid rgba(229, 236, 231, 0.99);
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`
cursor: pointer;
border-radius: 4px;
&:hover
 {   
background-color: rgba(229, 236, 231, 0.99);
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
};
`;