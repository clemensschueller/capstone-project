import styled from 'styled-components/macro'
import Header from './components/Header'
import ListPage from './pages/ListPage'

function App() {
  return (
    <AppGrid>
      <Header>galleries in hamburg</Header>
      <ListPage />
    </AppGrid>
  )
}

export default App

const AppGrid = styled.section`
  display: grid;
  padding: 10px;
`
