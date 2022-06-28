import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div>
        <form action="">
          <input type="text" placeholder='Enter your Name*'/>
          <br />
          <input type="text" placeholder='Enter your Mail Id*'/>
          <br />
          <input type="text" placeholder='Enter your Mobile no.'/>
          <br />
          <input type="text" placeholder='Country'/>
          <br />
          <input type="text" placeholder='City'/>
          <br />
          <input type="text" placeholder='State'/>
          <br />
          <input type="text" placeholder='Message'/>
          <br /><br />
          <button>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default App
