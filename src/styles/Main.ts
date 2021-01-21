import styled from "styled-components";

export const Main = styled.section`
    padding: 3rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("background/ceu.jpg");
    background-size: cover;
    /* opacity: 0.5; */
    img {
      width: 400px;
    }
`
export const Background = styled.section`
    
`
export const Title = styled.h3`
  font-size: 30px;
  display: flex;
  justify-content: center;
  a {
    color: orange;
    /* color: inherit; */
    text-decoration: none;
    &:hover {
      color: #555
    }
  }
`
export const Descricao = styled.a`
    text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
export const Grid = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
`

export const Card = styled.section`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid orange;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    a {
    color: orange;
    /* color: inherit; */
    text-decoration: none;
    &:hover {
      color: #555
    }
  }
`




