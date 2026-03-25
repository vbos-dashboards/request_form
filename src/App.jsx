import RequestForm from './RequestForm'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Information Request Form</h1>
        <p>Please fill out the form below to submit your request</p>
      </header>
      <main>
        <RequestForm />
      </main>
    </div>
  )
}

export default App
