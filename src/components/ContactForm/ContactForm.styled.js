import { Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
display: flex;
flex-direction:column;
width: 400px;

padding: 30px 12px;
justify-content: start;
 box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
 border: 1px solid  rgba(229, 236, 231, 0.99);
`;

export const Label = styled.label`
display: flex;
flex-direction:column;
gap: 10px;
margin-bottom:20px;
`;

export const Button = styled.button`
font-weight: 500;
font-size: 18px;
line-height: 1.11;
cursor: pointer;
margin-top: 20px;
border-radius: 4px;
&:hover
 {
    color: var(--mien-title-color);
    background-color: rgba(229, 236, 231, 0.99);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
}`;

export const ErrorMsg = styled(ErrorMessage)`
color: red;
`;