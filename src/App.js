import React, {useState, useMemo} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css"



function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Artem-test', body: 'Cig'},
    {id: 2, title: 'Boris-test', body: 'angry'},
    {id: 3, title: 'Caul Tretyakov', body: 'Brogrammer'}
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

    console.log('сработала сортировка')
  
    setSelectedSort(sort)
    setPosts([...posts].sort( (a, b) => a[sort].localeCompare(b[sort])))
  }

  const searchPosts = useMemo( () => { // Этот хук сработает один раз вначале и последующие разы при изменении элементов массива зависимости
    console.log('use memo')
    if (searchLetter){ // Если в строке поиска есть буква то:
    return [...posts].filter( item => item.title.toLowerCase().includes(searchLetter))} // Возвращается отсортированный пост
    return posts // Иначе возвращается обычный пост
    
  }, [searchLetter, posts]) // массив зависимости

  
  return (
    <div className="App">
      
      <PostForm create = {createPost}/>
      <div>{selectedSort}</div>
      <div>{searchLetter}</div>

      <MyInput value = {searchLetter} onChange = { (e) => setSearchLetter(e.target.value)} placeholder = '...поиск'/>
      <MySelect
        value = {selectedSort}
        onChange = {sortPosts}
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      {/* А это пример  */}
      { searchPosts !='' ? <PostList remove = {remove} posts = {searchPosts} title='Список постов №1'/> 
      : <div> Постов не найдено</div>
      } 
      
    </div>
  );
}

export default App;
