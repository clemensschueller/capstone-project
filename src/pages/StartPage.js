import styled from 'styled-components/macro'
import Header from '../components/Header'
//import art from '../artPics.json'
import background from '../assets/hhBG.jpeg'
import logo from '../assets/art2findLogo3.png'

export default function StartPage() {
  return (
    <Wrapper>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <p>
        Moin moin und herzlich willkommen bei art2find. Hier findet Ihr die
        schönsten Kunstgalerien in Hamburg!
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(${background});
  background-size: cover;

  Header {
    opacity: 80%;
    height: 4em;
    font-style: serif;
    font-weight: 400;

    img {
      height: 60px;
      width: 130px;
    }
  }

  p {
    margin-top: 510px;
    font-weight: 600;
  }
`
