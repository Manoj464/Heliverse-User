import React from 'react'
import DisplayUsers from './components/DisplayUsers'
import { Provider } from 'react-redux'
import store from './redux/store'; // Update the path to your store file

const App = () => {
  return (
    <DisplayUsers/>
  )
}

export default App
