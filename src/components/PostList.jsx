import React from 'react'
import Post from './Post'

function PostList({title, posts,remove}) {


  return (
    <div>
        <div className='postList__title'>{title}</div>
        {posts.map( (item, value) => 
            <Post remove = {remove} post = {item} key = {item.id} id = {value} />
            )}
        </div>
    
  )
}

export default PostList