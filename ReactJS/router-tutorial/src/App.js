import React from 'react';

import {Route, Link, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Profiles from './Components/Profiles';
import HistorySample from './Components/HistorySample';

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path={['/about','/info']} component={About}/>
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route
          render={({ location })=> (
            <div>
              <h2>이 페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
