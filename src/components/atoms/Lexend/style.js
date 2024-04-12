import styled from "styled-components";

export const LexendStyle = styled.div`
  color: ${(props) => (props.color ? props.color : "#061C3D")};
  font-size: ${(props) => (props.size ? props.size : "20px")};
  font-weight: ${(props) => (props.weight ? props.weight : "300")};
`;
