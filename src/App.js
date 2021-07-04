import galleriesData from './data.json'
import StartPage from './pages/StartPage'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'
import BookmarkPage from './pages/BookmarkPage'
import Navigation from './components/Navigation'
import { Route, Switch, useHistory } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import styled from 'styled-components/macro'

export default function App() {
  const [galleries, setGalleries] = useLocalStorage('galleries', galleriesData)

  const history = useHistory()

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/list">
          <ListPage
            onNavigate={handleClickDetails}
            galleries={galleries}
            title="Kunstgalerien in Hamburg"
          />
        </Route>
        <Route path="/details/:id">
          <DetailsPage
            onNavigate={handleClickBack}
            handleBookmark={handleBookmark}
            galleries={galleries}
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
      <Route exact path={['/', '/list', '/bookmarks']}>
        <Navigation />
      </Route>
    </AppGrid>
  )

  function handleClickDetails(id) {
    history.push('/details/' + id)
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
  grid-template-rows: auto 48px;
  height: 100vh;
  width: 100vw;
`
