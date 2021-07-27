import React, {useState, useEffect} from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  //   useEffect(() => {
  //   console.log('렌더링 완료');
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });
  // // 렌더링 되거나 업데이트 될 경우에 실행

  // useEffect(()=> {
  //   console.log('마운트될 때만 실행')
  // },[]);
  // // 함수의 두번째에 빈 배열을 파라미터로 넣을 경우 컴포넌트가 처음 렌더링 될 경우만 실행되고, 업데이트 될 때는 실행되지 않는다.

  // useEffect(() => {
  //   console.log(name);
  // },[name]);
  // // 변화가 일어나는 값을 배열에 넣어 함수의 두번째 파라미터로 보내는 경우 해당 값이 변화할 때 특정 작업을 수행한다.

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  },[]);
  // 뒷정리 - 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에 뒷정리 함수(cleanup)를 반환해 줘야한다.
  
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;