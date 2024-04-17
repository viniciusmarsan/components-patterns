import styled from "styled-components";

export const AlertStyle = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #e6e8ec;
  padding: 20px 20px 20px 16px;
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
      props.statusColor ? props.statusColor : "#0B63E5"};
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  > img {
    margin: 10px 16px 10px 4px;
  }
`;

export const TextLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  > :not(:first-child) {
    margin-left: 6px;
    cursor: pointer;
  }
`;

export const ButtonsAction = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCloseButton = styled.img`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 10px;
  right: 10px;
`;
