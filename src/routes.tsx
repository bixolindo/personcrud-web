import { Route,BrowserRouter } from 'react-router-dom'
import PersonList from './pages/PersonList'
import PersonForm from './pages/PersonForm'
import PersonEdit from './pages/PersonEdit'

const Routes = () => {
  return (
    
    <BrowserRouter>
      <Route path={'/'} exact component={PersonList}/>
      <Route path={'/person'} exact component={PersonForm}/>
      <Route path={'/person/:id'} exact component={PersonEdit}/>
    </BrowserRouter>
  )
}

export default Routes;