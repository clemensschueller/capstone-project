import styled from 'styled-components/macro'
import Header from '../components/Header'
//import art from '../artPics.json'
import background from '../assets/hhBG.jpeg'

export default function StartPage() {
  return (
    <Wrapper>
      <Header>art2find</Header>
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
  //margin-top: 60px;
  margin: -10px;
  display: grid;
  justify-content: center;
  padding: 10px;
  gap: 12px;
  overflow-y: auto;
  width: 105%;
  background-image: url(${background});
`

const ArtShow = styled.ul`
  display: flexbox;
  padding: 0;
  list-style: none;
  gap: 10px;
  overflow-x: scroll;
`
