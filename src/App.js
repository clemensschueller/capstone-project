import styled from 'styled-components/macro'
import Card from './components/Card'

function App() {
  return (
    <AppGrid>
      <Card />
    </AppGrid>
  )
}

export default App

const AppGrid = styled.section`
  display: grid;
  padding: 10px;
`
