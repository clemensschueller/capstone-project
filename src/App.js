import { useState } from 'react'
import galleries from './data.json'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'

export default function App() {
  const [activePage, setActivePage] = useState('list')
  const [detailedGallery, setDetailedGallery] = useState({})
  return (
    <>
      {activePage === 'list' && (
        <ListPage onNavigate={handleClickDetails} galleries={galleries} />
      )}
      {activePage === 'details' && (
        <DetailsPage onNavigate={handleClickBack} gallery={detailedGallery} />
      )}
    </>
  )

  function handleClickDetails(id) {
    const index = galleries.findIndex(gallery => gallery.id === id)
    setDetailedGallery(galleries[index])
    setActivePage('details')
  }

  function handleClickBack() {
    setActivePage('list')
  }
}
