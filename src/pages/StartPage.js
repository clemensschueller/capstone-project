import styled from 'styled-components/macro'
import Header from '../components/Header'
import art from '../artPics.json'

export default function StartPage() {
  return (
    <Wrapper>
      <Header>art2find</Header>
      <ArtShow>
        <img src={art} alt="" />
      </ArtShow>
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
  text-shadow: 1px 1px white;
`

const ArtShow = styled.ul`
  display: flexbox;
  padding: 0;
  list-style: none;
  gap: 10px;
  overflow-x: scroll;
`
