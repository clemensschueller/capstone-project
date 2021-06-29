import { useState } from 'react'
import galleriesData from './data.json'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'
import BookmarkPage from './pages/BookmarkPage'
import Navigation from './components/Navigation'
import { Route, Switch, useHistory } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import styled from 'styled-components/macro'

export default function App() {
  const [detailedGallery, setDetailedGallery] = useState({})
  const [galleries, setGalleries] = useLocalStorage('galleries', galleriesData)

  const history = useHistory()

  return (
    <AppGrid>
      {/* <Route exact path={['/', '/bookmarks']}>
        <Navigation />
      </Route> */}
      <Switch>
        <Route exact path="/">
          <ListPage
            onNavigate={handleClickDetails}
            galleries={galleries}
            title="Kunstgalerien in Hamburg"
          />
        </Route>
        <Route path="/details">
          <DetailsPage
            onNavigate={handleClickBack}
            handleBookmark={handleBookmark}
            gallery={detailedGallery}
          />
        </Route>
        <Route path="/bookmarks">
          <BookmarkPage
            onNavigate={handleClickDetails}
            galleries={galleries}
            title="Gespeicherte Galerien"
          />
        </Route>
      </Switch>
      <Route exact path={['/', '/bookmarks']}>
        <Navigation />
      </Route>
    </AppGrid>
  )

  function handleClickDetails(id) {
    const index = galleries.findIndex(gallery => gallery.id === id)
    setDetailedGallery(galleries[index])
    history.push('/details')
  }

  function handleClickBack() {
    history.goBack()
  }

  function handleBookmark(id) {
    const index = galleries.findIndex(gallery => gallery.id === id)
    const selectedGallery = galleries[index]
    selectedGallery.isBookmarked = !selectedGallery.isBookmarked
    const updatedGalleries = [
      ...galleries.slice(0, index),
      selectedGallery,
      ...galleries.slice(index + 1),
    ]
    setGalleries(updatedGalleries)
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 2rem;
  height: 100vh;
`
