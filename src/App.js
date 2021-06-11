import { useState } from 'react'
import galleries from '../data.json'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'

function App() {
  const [activePage, setActivePage] = useState()
  return (
    <AppGrid>
      <Header>galleries in hamburg</Header>
      <ListPage />
    </AppGrid>
  )
}

const AppGrid = styled.section`
  display: grid;
  padding: 10px;
`

export default App
