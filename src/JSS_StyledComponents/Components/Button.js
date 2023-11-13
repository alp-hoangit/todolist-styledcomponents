import styled from 'styled-components';


export const Button = styled.button`
            background:${props => props.bgPrimary ? "blue" : "orange"};
            color:#fff;
            border:none;
            border-radius:0.5rem;
            font-weight:bold;
            font-size: ${props => props.fontSize2x ? "2rem" : "1rem"};
            padding:1rem;
            opacity:1;
            &:hover{
                opacity:0.7;
                transition: all 1s;
            }
`