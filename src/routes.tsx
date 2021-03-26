import { Route, Router, BrowserRouter } from 'react-router-dom'
import SlideRouter, { initSlideRouter } from 'react-slide-animation-router'
import PersonList from './components/PersonList'
import PersonForm from './pages/PersonForm'


const Routes = () => {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={PersonList}/>
      <Route path={'/person'} component={PersonForm}/>
    </BrowserRouter>
  )
}

export default Routes;