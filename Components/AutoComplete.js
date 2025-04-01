import { useState, useEffect } from 'react';
import './AutoComplete.css';

const AutoComplete = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [cache, setCache] = useState({})

  const fetchResults = async() => {
    console.log(cache)
    if(cache[search]) {
      setResults(cache[search])
      return
    }
    const data = await fetch('https://dummyjson.com/recipes/search?q='+search)
    const json = await data.json();
    setResults(json?.recipes)
    setCache((prev) => ({...prev, [search]: json?.recipes}))
  }

  useEffect(()=>{
    const timer = setTimeout(fetchResults, 300)
    return ()=> clearTimeout(timer)
  }, [search])

  return(
    <div style={{width: '100%'}}>
      <div className='container'>
        <input type="text" className='searchInput' value={search} onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setShowResult(true)} onBlur={()=>setShowResult(false)}/>
        {showResult && <div className='suggestions'>
          <ul>
            {results.map((result) => (
              <li key={result?.id}>{result?.name}</li>
            ))}
          </ul>
        </div>}
      </div>

    </div>
  )
}

export default AutoComplete
