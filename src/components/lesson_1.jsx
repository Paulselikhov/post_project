import React, { useState } from "react"; // Импортируем по дефолту Реакт и хук состояния UseState


const Counter = () => { // Создаем компонент. Он должен называться также, как и название файла
// Компонент может быть как стрелочной функцией, так и function expression.
      const [count, setCount] = useState(0) // useState это React хук. Хуки - это некоторые функции, которые предоставляет реакт, эти функции всегда начинаются со слова use, при этом хуки можно использовать либо в функциональных компонентах, либо в своих собственных хуках. То-есть мы можем делать на основании стандартных React-хуков свои собственные хуки. Хуки можно использовать только на верхнем уровне вложенности. Мы не можем вкладывать хуки в какие-либо функции, в условия, в циклы. Список хуков:
      // useState()
      // useEffect()
      // useRef()
      // useMemo()
      // useCallback()
      // useContext()

      function increment(){
        setCount(count + 1)
      }
  
      function decrement(){
        setCount(count - 1)
      }

      return ( // Возвращаем JSX
        <div>
          <h1>{count}</h1>
          <button onClick = {increment}> Increment </button>
          <button onClick = {decrement}> Decrement </button>
        </div>
      )
}

export default Counter; // Не забывает про экспорт