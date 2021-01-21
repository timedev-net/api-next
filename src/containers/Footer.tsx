import styled from "styled-components";

const Footers = styled.footer`
    background-color: gold;
    padding: 1rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        /* background-color: red; */
        width: 200px;
    }
`


export default function Footer() {

    return (
    
      <Footers>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Powered by{' '} */}
          <img src="/Logo.svg" alt="Vercel Logo" />
        {/* </a> */}
      </Footers>
    
    )}