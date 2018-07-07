import React, { PureComponent, Fragment } from 'react';
import './App.css';
import FormComponent from './component/Form';
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <FormComponent />
      </Fragment>
    );
  }
}

export default App;
