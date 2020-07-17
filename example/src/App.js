import React from 'react'
import photos from './photos'
import 'itb_web_player/src/scss/style.scss'

import { ReactBnbGallery } from 'itb_web_player'

const App = () => {
  return (
    <ReactBnbGallery
      show={true}
      photos={photos}
      onClose={() => {}}
      wrap={false}
      backgroundColor='rgba(0, 0, 0, 0.9)'
    />
  )
}

export default App
