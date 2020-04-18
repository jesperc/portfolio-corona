import React from 'react'
import Routes from './components/routes/Routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import './style/global.scss'

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes />
      </div>
    </Provider>
  )
}

export default App
