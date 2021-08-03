import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

// import React, { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };
// // useState를 통해 선택된 카테고리를 관리하는 코드

export default App;
