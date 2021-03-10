import styled from "styled-components";

const StyledUnderline = styled.span`
    display: flex;
    margin: auto;
    width: 75px;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color:  ${props => props.color ? props.color : "white"};
`

const Underline = (props) => {
    console.log(props);
    return <StyledUnderline color={props.color}/>;
}

export default Underline