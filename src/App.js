import React, {useState, useMemo} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css"

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Тестовый пост #1', body: 'Первый пост - описание'},
    {id: 2, title: 'Тестовый пост #2', body: 'Второй пост - описание'},
    {id: 3, title: 'Тестовый пост #3', body: 'Третий пост - описание'},

  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchLetter, setSearchLetter] = useState('')


  const createPost = (newPost) => {  // Функция принимает аргументом пост и добавляет его в конец массива posts
    console.log(newPost)
    setPosts([...posts, newPost])
  }
  
  const remove = (post) => { // Функция проходится по каждому элементу массива и если коллбек вернул true, то элемент добавляется в массив 
    setPosts(posts.filter( item => item.id != post.id))
  }

  const sortPosts = (sort) => { // Функция срабатывает при изменении селекта.

    setSelectedSort(sort)
  }

  const sortedPosts = useMemo( () => {
      if(selectedSort){
      return [...posts].sort( (a, b) => a[selectedSort].localeCompare(b[selectedSort]))}
      return posts
  }, [selectedSort, posts ])

  const searchPosts = useMemo( () => { 
    
    console.log('сработал use memo')

    return sortedPosts.filter( item => item.title.toLowerCase().includes(searchLetter)) // Возвращается отсортированный пост
  }, [searchLetter, sortedPosts]) // массив зависимости

  
  return (
    <div className="App">
      
      <PostForm create = {createPost}/>
      <MyInput value = {searchLetter} onChange = { (e) => setSearchLetter(e.target.value)} placeholder = '...поиск'/>
      <MySelect
        value = {selectedSort}
        onChange = {sortPosts}
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      { searchPosts !='' ? <PostList remove = {remove} posts = {searchPosts} title='Список постов'/> 
      : <div> Постов не найдено</div>
      } 
      
    </div>
  );
}

export default App;
