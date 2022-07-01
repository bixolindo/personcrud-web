import { Route, Switch } from 'react-router-dom'
import { useLocation, __RouterContext } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import PersonList from './pages/PersonList'
import PersonForm from './pages/PersonForm'
import PersonEdit from './pages/PersonEdit'
import Header from './components/Header'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import Creche from './pages/Creche'

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Header title="Crud Manipulator" />
      <Switch location={location} key={location.key}>
        <Route path={'/'} exact component={Login}/>
        <Route path={'/person'} exact component={PersonForm}/>
        <Route path={'/person/:id'} exact component={PersonEdit}/>
        <Route path={'/cadastro'} exact component={SingUp}/>
        <Route path={'/home'} exact component={PersonList}/>
        <Route path={'/creche'} exact component={Creche}/>
      </Switch>
    </AnimatePresence>
  )
}

export default Routes;