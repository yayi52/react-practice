import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { createTodo } from './slice/todosSlice'

const Card = ({title, price, children}) => {
  console.log(children);
  return (
    <div className="App">
      <h1>測試遠端請求</h1>
      123
      {title}
      {typeof price === 'number' ? `$${price}` : null}
      {children}
    </div>
    
  );
};

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  // 建議加上 loading 和 data 狀態，這符合合約中「API 串接」的驗收標準
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  
  const{
    register,
    handleSubmit,
    watch,
    control,
    setValue,
  } = useForm()
  
  //redux 練習
  useEffect(() => {
    (async ()=>{
      dispatch(
        createTodo({
          id: todos.length + 1,
          text: 123,
        })
      );
    })()
}, []);
  return (
    <div className="App">
      <h1>測試遠端請求</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user ? (
        <div>
          <p {...register('name')}>姓名：{user.name.first} {user.name.last}</p>
          <img src={user.picture.medium} alt="user" />
        </div>
      ) : (
        <p>載入中...</p>
      )}
      <Card title='ii' price={1000}>
          9487
      </Card>
    </div>

  )
}

export default App