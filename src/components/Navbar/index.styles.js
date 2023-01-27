import styled from "styled-components";

export const Header = styled.div`
  padding: 0 15px;
`;

export const HeaderBant = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  color: #6c757d;
  font-size: 16px;
  padding: 8px 35px;
  span {
    margin-right: 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  padding: 0 35px;
  div {
    border: 1px solid #ced4da;
    padding: 12px;
    min-width: 300px;
    color: #6c757d;
  }
`;

export const NavbarS = styled.div`
  display: flex;
  align-items: center;
  background-color: #6c757d;
  line-height: 1.5;
  padding: 0 35px;
  span {
    padding: 0 30px;
    display: inline-block;
    display: flex;
    align-items: center;
    height: 65px;
    background-color: #ffd333;
    margin-right: 30px;
  }
  a {
    display: inline-block;
    padding: 20px 10px;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ffd333;
    }
  }
`;
