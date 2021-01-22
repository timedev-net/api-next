import HeadCEO from '../src/components/HeadCEO'
import Header from '../src/containers/Header'
import Footer from '../src/containers/Footer'
import { Main, Card, Title, Grid, Descricao, Background } from '../src/styles/Main'

export default function Home() {
  return (<>
      <HeadCEO title="TimeDev.net" />
      <Header />
      <Background>
      <Main>
        <Title>Bem vindo ao
           {/* <a href="#">TimeDev.net!</a> */}
           </Title>
        <img src="/LogoColor.svg" alt="Vercel Logo" />
        <Descricao>Nossa missão é transformar ideias de nossos clientes em soluções personalizadas da tecnologia moderna</Descricao>

        <Grid>
          <Card>
            <a href="#"><h3>Sobre nós &rarr;</h3></a>
            <p>tesssssssssssssstete tete.</p>
          </Card>
          <Card>
            <a href="#"><h3>Produtos &rarr;</h3></a>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
          <Card>
            <a href="#"><h3>Serviços &rarr;</h3></a>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
          <Card>
            <a href="#"><h3>Contato &rarr;</h3></a>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
        </Grid>
      </Main>
      </Background>
      
      <Footer />
  </>)
}
