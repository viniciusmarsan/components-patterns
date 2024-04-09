import styled from "styled-components";

export const LexendStyle = styled.div`
  color: ${(props) => (props.text === "black" ? "black" : "blue")};
`;
