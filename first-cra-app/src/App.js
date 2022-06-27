import { useDispatch, useSelector } from 'react-redux';
import style from './app.module.css';
import {inc} from './features/counterReducer';
import {dic} from './features/counterReducer';
import {res} from './features/counterReducer'

function App() {

  const num = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(inc())
  }
  const handleDic = () => {
    dispatch(dic())
  }
  const handleRes = () => {
    dispatch(res())
  }

  return (
    <div className={style.container}>
    <div className={style.counter_cont}>
      <div className={style.counter}>{num}</div>
    </div>
    <div className={style.btn_cont}>
    <button onClick={handleInc}>+</button>
    <button onClick={handleDic}>-</button>
    <button onClick={handleRes}>Сбросить</button>
    </div>
    </div>
  );
}

export default App;
