import React from 'react'

const MySelect = ({options, value, onChange}) => {
  return (
    <select value={value} onChange = { (e) => onChange(e.target.value)}>
        <option disabled value = ""> Сортировка по </option>
        {options.map( option => {
         return <option key = {option.value} value = {option.value} >{option.name}</option>
    })}
    </select>
  )
}

export default MySelect













function test(){
  console.log('test')
}

let a = test





