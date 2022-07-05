import { AnimatePresence } from 'framer-motion'
import { Redirect, useLocation } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Creche from './pages/Creche'
import CrecheList from './pages/CrecheList'
import Login from './pages/Login'
import PersonEdit from './pages/PersonEdit'
import PersonForm from './pages/PersonForm'
import PersonList from './pages/PersonList'
import Relatorio from './pages/Relatorio'
import SingUp from './pages/SingUp'

const Routes = () => {
  const location = useLocation();

  const loggedIn = () => {
    return localStorage.getItem('idUsuario') != null;
  }

  return (
    <AnimatePresence>
      <Header title="Crud Manipulator" />
      <Switch location={location} key={location.key}>
        <Route path={'/'} exact component={Login} />
        <Route path={'/person'} exact >{loggedIn() ? <PersonForm /> : <Redirect to={'/'} />}</Route>
        <Route path={'/person/:id'} exact >{loggedIn() ? <PersonEdit /> : <Redirect to={'/'} />}</Route>
        <Route path={'/cadastro'} exact > <SingUp /> </Route>
        <Route path={'/home'} exact >{loggedIn() ? <PersonList /> : <Redirect to={'/'} />}</Route>
        <Route path={'/creche'} exact >{loggedIn() ? <Creche /> : <Redirect to={'/'} />}</Route>
        <Route path={'/crecheList'} exact >{loggedIn() ? <CrecheList /> : <Redirect to={'/'} />}</Route>
        <Route path={'/relatorio'} exact >{loggedIn() ? <Relatorio /> : <Redirect to={'/'} />}</Route>
      </Switch>
    </AnimatePresence>
  )
}

export default Routes;