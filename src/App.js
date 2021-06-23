import { useState } from 'react'
import galleries from './data.json'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'
import BookmarkPage from './pages/BookmarkPage'
import Navigation from './components/Navigation'
import { Route, Switch, useHistory } from 'react-router-dom'

export default function App() {
  const [detailedGallery, setDetailedGallery] = useState({})
  const [isBookmarked, setIsBookmarked] = useState(false)

  const history = useHistory()

  return (
    <>
      <Route exact path={['/', '/bookmarks']}>
        <Navigation />
      </Route>
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
        <Route path="/bookmarks">
          <BookmarkPage
            onNavigate={handleClickDetails}
            galleries={galleries}
            isBookmarked={isBookmarked}
          />
        </Route>
      </Switch>
    </>
  )

  function handleClickDetails(id) {
    const index = galleries.findIndex(gallery => gallery.id === id)
    setDetailedGallery(galleries[index])
    history.push('/details')
  }

  function handleClickBack() {
    history.push('/')
  }

  function handleBookmark(id) {
    const index = galleries.findIndex()
  }
}
