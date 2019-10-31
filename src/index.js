import React from 'react'
import ReactDOM from 'react-dom'
import Paltette from './components/Palette'
import seedColor from './components/seedColor'
import {generatePalette}from'./components/colorHelper'
const App = () => {
    return (
        <div>
            <Paltette Paltette={generatePalette(seedColor[4])}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))