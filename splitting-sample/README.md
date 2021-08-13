# Splitting

### npm install package

> npm install @loadable/component

<br>

### 1. React.lazy() + Suspense

> 리액트에 내장된 유틸 함수인 lazy와 Suspense를 이용한 코드 스플리팅
> <br>
>
> ```
> const SplitMe = React.lazy(() => import("./SplitMe"));
>
> <Suspense fallback={<div>loadding...</div>}>
>  {visible && <SplitMe />}
> </Suspense>
> // fallback props를 이용해 로딩중에 보여줄 JSX를 지정
> ```
>
> <br>

<br>

### 2. @loadable/component

> SSR을 지원하는 코드스플리팅 라이브러리
> <br>
>
> ```
> const SplitMe = loadable(() => import("./SplitMe"), {
>  fallback: <div>loading...</div>,
> });
>
> SplitMe.preload();
> // preload를 이용해 특정 이벤트가 실행될 때, 코드를 미리 불러올 수 있다.
> {visible && <SplitMe />}
> ```
>
> <br>
