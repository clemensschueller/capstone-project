import { useState } from 'react'
import galleries from './data.json'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'
import { Route, Switch, useHistory } from 'react-router-dom'

export default function App() {
  const [detailedGallery, setDetailedGallery] = useState({})

  const { push } = useHistory()

  return (
    <>
      <Switch>
        <Route exact path="/">
          <ListPage onNavigate={handleClickDetails} galleries={galleries} />
        </Route>
        <Route path="/details">
          <DetailsPage
            onNavigate={handleClickBack}
            gallery={detailedGallery}
            isBookmarked={isBookmarked}
          />
        </Route>
      </Switch>
    </>
  )

  function handleClickDetails(id) {
    const index = galleries.findIndex(gallery => gallery.id === id)
    setDetailedGallery(galleries[index])
    push('/details')
  }

  function handleClickBack() {
    push('/')
  }

  function handleBookmark(id) {}
}
