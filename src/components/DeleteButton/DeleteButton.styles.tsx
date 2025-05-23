import styled from "styled-components";

export const ButtonStyle = styled.button`
  justify-self: center;
  align-self: center;
  margin-left: -10px;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 10px;

  :hover {
    color: red;
  }

  @media (max-width: 40rem) {
    margin-left: -30px;
  }
`;
