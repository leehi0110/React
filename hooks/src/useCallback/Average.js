import React, {useState, useMemo, useCallback} from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  // 두 번째 파라미터에 빈배열이 들어갈 경우는 컴포넌트가 처음 렌더링될 때만 함수를 생성하고 재사용한다.

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  },[number, list]);
  // 두 번째 파라미터 안 배열에 값을 넣어줄 경우 해당 값이 변경될 때마다 함수 생성 => number or list가 변경될 때마다 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;