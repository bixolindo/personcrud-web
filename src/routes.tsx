import { Route, Switch } from 'react-router-dom'
import { useLocation, __RouterContext } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import PersonList from './pages/PersonList'
import PersonForm from './pages/PersonForm'
import PersonEdit from './pages/PersonEdit'
import Header from './components/Header'

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Header title="Crud Manipulator" />
      <Switch location={location} key={location.key}>
        <Route path={'/'} exact component={PersonList}/>
        <Route path={'/person'} exact component={PersonForm}/>
        <Route path={'/person/:id'} exact component={PersonEdit}/>
      </Switch>
    </AnimatePresence>
  )
}

export default Routes;