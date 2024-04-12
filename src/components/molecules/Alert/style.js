import styled from "styled-components";

const statusColors = {
  alert: "#E54545",
  info: "#0B63E5",
  success: "#0F9918",
  warning: "#FF8800",
};

export const AlertStyle = styled.div`
  /* color: ${(props) => (props.text === "black" ? "black" : "blue")};
  font-size: ${(props) => (props.size ? props.size : "20px")};
  font-weight: ${(props) => (props.weight ? props.weight : "300")}; */
  display: flex;
  border: 1px solid #e6e8ec;
  padding: 20px 16px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  text-align: left;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${(props) =>
      props.status ? statusColors[props.status] : "#0B63E5"};
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  > img {
    margin: 10px 16px 10px 4px;
  }
`;
