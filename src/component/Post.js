
import React, { useState, useEffect } from 'react';
import '../style/Post.css'

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // Шаг 1: Получение данных
  useEffect(() => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  // Шаг 3: Фильтрация постов
  const filteredPosts = posts.filter(post =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.text?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Шаг 4: Открытие/закрытие попапа
  const openPopup = (post) => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
  };

  return (
    <main>
      
      <input
        className='input_search_post'
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div className='main_posts'>
      {filteredPosts.map(post => (
        <div className='post_flex' key={post.id} onClick={() => openPopup(post)}>
          <img 
          src={post.img} 
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          alt={post.title} />
          <p className='post_tag'>{post.tags}</p>
          <h2 className='title_post' >{post.title}</h2>
          <div className='post_meta'>
            <span className='post_autor'>{post.autor}</span>
            <spa className='post_date'> {post.date}</spa>
            <span className='post_views'> {post.views} Views</span>
          </div>
          <p className='post_text'>{post.text}</p>
       

        </div>
      ))}

      
      {selectedPost && (
        <div className="popup">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.text}</p>
          <button onClick={closePopup}>Закрыть</button>
        </div>
      )}
      </div>

    </main>
  );
};

export default Post;