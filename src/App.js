import './App.css';
import { useState, useEffect } from 'react';
import MovieContainer from './MovieContainer';


function App() {

  // 41cf69d2&s
  const API_URL = 'http://www.omdbapi.com/?apikey=41cf69d2&s=';

  const [searchTerm, setSearchTerm] = useState('batman');
  const [result, setResult] = useState([]);

  const onChange = async e => {
    setSearchTerm(e.target.value)

    const respond = await fetch(API_URL + searchTerm);
    const data = await respond.json();

    if (data.Response === 'True') setResult(data);

    console.log(result)
  }

  return (
    <div className='flex flex-col justify-center items-center py-12 px-24 space-y-24'>
      <div>
        <input type='input'
          placeholder='Search for movies...'
          value={searchTerm}
          onChange={onChange}
          className='h-12 border-0 focus:border-0' />
      </div>

      <MovieContainer movies={result.Search} />

    </div>
  )
}

export default App;
