import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeaderWrapper = styled.div`
  width: 100%;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  background: white;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  padding: 16px 16px;
  color: grey;
  text-decoration: none;
  font-size: 20px;
  align-items: center;
  &:hover {
    border-radius: 4px;
    text-decoration: none;
    color: red;
  }
`;
export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
    background-color: rgb(230,230,230);
    width: 100%;
    padding: 10px 0;
`;
export const StyledSettingsWrapper = styled.div`
  float: right;
`;

export const SearchImg = styled.img`
    margin-left: 3px;
    height: 25px;
`
export const StyledInput = styled.input`
  // width: 20%;
`;