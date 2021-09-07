import React from "react";
import GlobalStyle from './styles/global'
import { ThemeProvider } from "styled-components";
import crunchyroll from "./styles/crunchyroll";
import funimation from "./styles/funimation";
import Header from "./components/Header/Header";
import  useTheme  from "./hooks/useTheme";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {
  const [theme, setTheme] = useTheme("theme", crunchyroll);

  const [items, setItems] = React.useState([]);
  const [getAnimeList , setGetAnimeList] = React.useState([]); 
  const [animeList , setAnimeList] = React.useState([]); 
  const [getSearch, setGetSearch] = React.useState(false);

  const [search, setSearch] = React.useState("");


  const toogleTheme = () =>{
    setTheme(theme.title === 'crunchyroll' ? funimation : crunchyroll)
  }

  const handleSearch = (e) =>{
    e.preventDefault();
  if(search === ""){
    fetchItems();
    setGetSearch(false)
  }else{
    fetchAnime(search);
    setGetSearch(true)
  }
    
  }

  const fetchAnime = async (query) => {
    const temp = await axios(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=30`)
    setGetAnimeList(temp.data.results);
    console.log(temp.data.results)
  }
  const fetchItems = async () =>{
    const temp = await axios(`https://api.jikan.moe/v3/top/anime/1/bypopularity`);
    setItems(temp.data.top.slice(0,5)) 
    setAnimeList(temp.data.top);
  }
  React.useEffect(()=>{
    fetchItems();
  },[])
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header toogleTheme={toogleTheme}/>
      <Navbar items={items}/>
      <Main animeList={animeList} handleSearch={handleSearch} search={search} setSearch={setSearch} getAnimeList={getAnimeList} getSearch={getSearch}/>
    </ThemeProvider>
  );
}

export default App;
