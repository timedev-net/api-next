import styled from "styled-components";

const Section = styled.section`
    background-color: gold;
    padding: 1rem 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* button {
        color: orange;
        background-color: #333;
        border: 1px solid #000;
        border-radius:4px;
        padding:10px 20px;
        :hover {
            background-color: #555
        }
    } */
`
const Container = styled.section`
/* flex: 1; */
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    min-width: 50%;
`
const Container2 = styled.section`
/* flex: 1; */
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    /* background-color: green; */
    max-width: 250px;
    img {
        /* background-color: red; */
        margin-left: -15px;
        margin-right: -15px;
        height: 35px;
    }
`
const Button = styled.button`
    color: orange;
    background-color: #333;
    border: 1px solid #000;
    border-radius:4px;
    width: 120px;
    /* display:inline-block; */
    padding:10px 20px;
    :hover {
        background-color: #555
    }
`

export default function Header() {
    // console.log(props)

    return (
    <Section>
        <Container>
            <Button onClick={() => alert('teste')}>Home</Button>
            <Button onClick={() => alert('teste')}>Serviços</Button>
            <Button onClick={() => alert('teste')}>Sobre Nós</Button>
            <Button onClick={() => alert('teste')}>Contato</Button>
        <Container2>
            <img src="/social/whats.svg" alt="Logo" />
            <img src="/social/face.svg" alt="Logo" />
            <img src="/social/insta.svg" alt="Logo" />
            <img src="/social/youtube.svg" alt="Logo" />
        </Container2>
        </Container>
    </Section>
    )}