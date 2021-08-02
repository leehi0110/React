# Router

## react-router-dom

<br>

### 1. path

<br>

> <br>
>
> ```
> <Route path="/" component={Home}>
> <Route path="/about component={About}>
> ```
>
> <br>
> 이때 '/'라는 공통 경로가 있기 때문에 두개의 컴포넌트가 동시에 보여진다. <br> <br>
> 이를 방지하기 위해 exect props를 true로 설정 <br><br>
>
> ```
> <Route path="/" component={Home} exact={true}>
> <Route path="/about component={About}>
> ```

<br>

### 2. Link

<br>

> <br>
> Link 컴포넌트를 사용해 다른 주소로 이동이 가능하다 <br> <br> a 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 가지고 있는 상태를 날리게 된다. <br> 따라서 페이지 전환을 위해서는 Link를 사용한다.
> <br> <br>
> Link 컴포넌트는 HTML Histroy API를 사용해 페이지의 주소만 변경하고, 페이지 전환을 방지하는 기능을 갖고 있다.
> <br> <br>
>
> ```
> <ul>
>   <li>
>     <Link to="/">홈</Link>
>   </li>
>   <li>
>     <Link to="/about">소개</Link>
>   </li>
> </ul>
> ```
>
> <br>

<br>

### 3. 여러개의 Path 지정

<br>

> <br>
> path props를 배열로 설정해주면 여러 경로에서 같은 컴포넌트를 보여줄 수 있다.
> <br> <br>
>
> ```
> <Route path={['/about', '/info']} component={About} />
> ```
>
> <br>

<br>

### 4. URL 파라미터와 쿼리

<br>

> <br>
> 4-1. URL 파라미터
> <br> <br>
> 일반적으로 파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때 사용
> <br> <br>
> URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조한다,
>
> ```
> const { username } = match.params;
> ```
>
> 그 뒤, path 규칙을 정의한다,
>
> ```
> <Route path="/profile/:username" component={Profile} />
> ```
>
> <br>
> 4-2. URL 쿼리
> <br> <br>
> 쿼리는 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달 할 때 사용
> <br> <br>
> URL 쿼리를 사용할 때는 location 객체에 들어있는 search 값을 조회한다. <br>
> location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있다. <br>
> location의 형태는 다음과 같다.
> <br> <br>
>
> ```
> // http://locallhost:3000/about?detail=true 주소일 경우
> {
>  "pathname": "/about",
>  "search": "?/detail=true",
>  "hash": ""
> }
> ```
>
> search 값에서 특정 값을 읽어오기 위해 qs 라이브러리를 이용한다.
> <br> <br>
>
> ```
> const query = qs.parse(location.search, {
>  ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ? 를 생략
> });
> const showDetail = query.detail === "true";
> ```
>
> <br>

<br>

### 5. 서브 라우트

<br>

> <br>
> 라우트 내부에 또 다른 라우트를 정의하는 것이다.
> <br> <br>
> 사용을 위해 단순히 라우트로 사용되는 컴포넌트의 내부에 Route 컴포넌트를 또 사용하면 된다.
> <br> <br>
>
> ```
> <ul>
>  <li>
>    <Link to="/profiles/velopert">velopert</Link>
>  </li>
>  <li>
>    <Link to="/profiles/gildong">gildong</Link>
>  </li>
> </ul>
>
> <Route
>  path="/profiles"
>  exact
>  render={() => <div>사용자를 선택해 주세요.</div>}
> />
> <Route path="/profiles/:username" component=>{Profile}/>
> ```
>
> <br>
> 이 때, Route의 component 대신 render를 사용해 보여주고 싶은 JSX를 넣어 줄 수 있다.
> <br> <br>

<br>

### 6. history

<br>

> <br>
> history 객체는 라우트로 사용된 컴포넌트에서 match, location과 함께 전달되는 props중 하나로, 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출 할 수 있도록 한다.
> <br> <br>
>
> ```
> this.props.history.push(path);
> // path로 이동
> this.props.history.goBack();
> // 뒤로 가기
> ```
>
> <br>

<br>

### 7. withRouter

<br>

> <br>
> withRouter 함수는 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해준다.
> <br> <br>
>
> ```
> export default withRouter(withRouterSample);
> // withRouter를 사용할 때는 컴포넌트를 내보내 줄 때 함수로 감싸준다.
> ```
>
> <br>

<br>

### 7. withRouter

<br>

> <br> <br>
> switch 컴포넌트는 여러 Route를 감싸서 그 중 일치하는 단 하나의 라우트만을 렌더링 시켜준다.
> <br> <br>
> 이를 이용해 규칙이 일치하지 않을 때 보여 줄 Not Found 페이지도 구현 가능
> <br> <br>
>
> ```
> <Switch>
>  <Route path="/" component={Home} exact={true} />
>  <Route path={["/about", "/info"]} component={About} />
>  <Route path="/profiles" component={Profiles} />
>  <Route path="/history" component>={HistorySample} />
>  <Route
>    render={({ location }) => (
>      <div>
>        <h2>이 페이지는 존재하지 않습니다.</h2>
>        <p>{location.pathname}</p>
>      </div>
>    )}
>  />
> </Switch>
> ```
>
> <br>

<br>

### 8. NavLink

<br>

> <br>
> 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트이다.
> <br><br>
>
> ```
> <li>
>  <NavLink activeStyle={activeStyle} to="/profiles/velopert">
>    velopert
>  </NavLink>
> </li>
> <li>
>  <NavLink activeStyle={activeStyle} to="/profiles/gildong">
>    gildong
>  </NavLink>
> </li>
> ```
>
> <br>
