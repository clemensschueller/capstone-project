import styled from 'styled-components/macro'
import Header from '../components/Header'
//import art from '../artPics.json'
import background from '../assets/hhBG.jpeg'

export default function StartPage() {
  return (
    <Wrapper>
      <Header>art2find</Header>
      <p>
        Moin moin und herzlich willkommen bei app2find. Hier findet Ihr die
        schönsten Kunstgalerien in Hamburg!
      </p>
      {/* {art.map(pic => {
        return (
          <ArtShow>
            <img src={} alt="" />
          </ArtShow>
        )
      })} */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(${background});
  background-size: cover;

  p {
    margin-top: 510px;
    font-weight: 600;
  }
`

// const ArtShow = styled.ul`
//   display: flexbox;
//   padding: 0;
//   list-style: none;
//   gap: 10px;
//   overflow-x: scroll;
// `
