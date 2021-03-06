import React from "react"
import styled from "styled-components"
const Button = props => {
  return <ButtonStyle onClick={props.onClick}>{props.text}</ButtonStyle>
}

const ButtonStyle = styled.div`
  height: 35px;
  border: none;
  transition: all 0.5s ease 0s;
  outline: none;
  font-size: 14px;
  color: #007acc;
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  margin-top: 15px;
  width: fit-content;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
`
export default Button
