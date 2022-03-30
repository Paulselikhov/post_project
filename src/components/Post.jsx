import React from 'react'
import MyButton from './UI/button/MyButton'

const Post = (props) => {

 

  
  return (
    <div className="post">
        <div>
          <div>{props.id+1}. {props.post.title} </div>
          <div>{props.post.body}</div>
        </div>

        <MyButton onClick = { () => {
          props.remove(props.post)
        }}> Удалить</MyButton>
      </div>
  )
}

export default Post