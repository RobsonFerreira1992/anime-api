import React from 'react'
import { FormInput, MainContent } from './style'

const Main = ({animeList, handleSearch, search, setSearch,getAnimeList, getSearch}) => {
 
  return (
    <>
      <FormInput className="main-head">
        <form  className="search-box" onSubmit={handleSearch}>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Digite o seu anime" />
        </form>
      </FormInput>
      {getSearch ? (
        <MainContent>
        {getAnimeList.map((getAnime)=>(
          <div  key={getAnime.mal_id}>
            <a href={getAnime.url} target="_blank" rel="noopener noreferrer" >
              <img src={getAnime.image_url} alt="thumbnail animes" />
              <h3>{getAnime.title}</h3>
            </a>
          </div>
        ))} 
      </MainContent>
      ) : (
        <MainContent>
          {animeList.map((anime)=>(
            <div  key={anime.mal_id}>
              <a href={anime.url} target="_blank" rel="noopener noreferrer" >
                <img src={anime.image_url} alt="thumbnail animes" />
                <h3>{anime.title}</h3>
              </a>
            </div>
          ))} 
        </MainContent>
       )}
      
    </>
  )
}

export default Main
