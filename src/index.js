import React from 'react'
import ReactDOM from 'react-dom'

// Import styles
import './styles/reset.less'
import './styles/global.less'
import './styles/fonts/icons.less'

import { App } from './app'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
