import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import Notfound from "./components/pages/Notfound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar
            brand="Jason"
            addContact="addContact"
            contacts="contacts"
            about="About"
          />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/addcontact" component={AddContact} />
            <Route exact path="/editcontact/:id" component={EditContact} />
            <Route exact path="/about" component={About} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
