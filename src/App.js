import { useState } from 'react'
import galleries from './data.json'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function App() {
  const [activePage, setActivePage] = useState('list')
  const [detailedGallery, setDetailedGallery] = useState({})

  const { push } = useHistory()

  return (
    <>
      <Switch>
        <Route exact path="/">
          <ListPage onNavigate={handleClickDetails} galleries={galleries} />
        </Route>
        <Route path="/details">
          <DetailsPage onNavigate={handleClickBack} gallery={detailedGallery} />
        </Route>
      </Switch>
      {/* {activePage === 'list' && (
        <ListPage onNavigate={handleClickDetails} galleries={galleries} />
      )}
      {activePage === 'details' && (
        <DetailsPage onNavigate={handleClickBack} gallery={detailedGallery} />
      )} */}
    </>
  )

  function handleClickDetails(id) {
    const index = galleries.findIndex(gallery => gallery.id === id)
    setDetailedGallery(galleries[index])
    setActivePage('details')
    push('/details')
  }

  function handleClickBack() {
    setActivePage('list')
    push('/')
  }
}
