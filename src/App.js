import styled from 'styled-components/macro'
import ListPage from './pages/ListPage'

function App() {
  return (
    <AppGrid>
      <ListPage />
    </AppGrid>
  )
}

export default App

const AppGrid = styled.section`
  display: grid;
  padding: 10px;
`
