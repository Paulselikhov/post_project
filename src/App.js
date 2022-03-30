import React, {useState} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css"



function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Paul Selikhov', body: 'learn react'},
    {id: 2, title: 'Andrei Ivanov', body: 'like girls'},
    {id: 3, title: 'Paul Tretyakov', body: 'programmer'}
  ])


  const createPost = (newPost) => {  // Функция принимает аргументом пост и добавляет его в конец массива posts
    console.log(newPost)
    setPosts([...posts, newPost])
  }
  
  const remove = (post) => { // Функция проходится по каждому элементу массива и если коллбек вернул true, то элемент добавляется в массив 
    setPosts(posts.filter( item => item.id != post.id))
  }

  const sortPosts = (sort) => {
      setSelectedSort(sort)
      setPosts([...posts].sort( (a, b) => a[sort].localeCompare(b[sort])))
  }

  const [selectedSort, setSelectedSort] = useState('default')

  return (
    <div className="App">
      
      <PostForm create = {createPost}/>
      <div>{selectedSort}</div>
      <MySelect
        value = {selectedSort}
        onChange = {sortPosts}
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      <PostList remove = {remove} posts = {posts} title='Список постов №1'/>
    </div>
  );
}

export default App;
