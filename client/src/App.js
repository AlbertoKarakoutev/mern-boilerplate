import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Items from './components/Items'
import SearchResults from './components/SearchResults'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Route path='/' exact render={(props) => (
        <>
        <div className="App">
          <Header />
          <Items/>
          <Footer/>
        </div>
        </>
      )}/>
      <Route path='/search' component={SearchResults}/>
    </Router>
  );
}

export default App;
