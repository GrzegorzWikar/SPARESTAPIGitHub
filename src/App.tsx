import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Tabele from './components/Table';
import { IDataRepo, IDataRepoLan } from './models';
import Filter from './components/Filter';

const App: React.FC = () => {

  const [dataRepo, setDataRepo] = useState<IDataRepo[]>([]);
  const [currentPage, setCurentPage] = useState<number>(1);
  const [numberOfPosts, setNumberOfPosts] = useState<number>(10);
  
  const [user, setUser] = useState<string>("")
  const [phrase, setPhrase] = useState<string>("")
  const [language, setLanguage] = useState<string>("")
  const [submit, setSubmit] = useState<boolean>(false);
  
  const setFilterUser : Dispatch<SetStateAction<string>> = (user :  SetStateAction<string>) => setUser(user)
  const setFilterPhrase : Dispatch<SetStateAction<string>> = (phrase: SetStateAction<string>) => setPhrase(phrase)
  const setFilterLanguage: Dispatch<SetStateAction<string>> = (language: SetStateAction<string>) => setLanguage(language)
  const setPostPerPage : Dispatch<SetStateAction<number>> = (numberOfPosts : SetStateAction<number>) => setNumberOfPosts(numberOfPosts)

  const indexOfLastPost : number = currentPage * numberOfPosts
  const indexOfFirstPost : number = indexOfLastPost - numberOfPosts
  const currentPosts : IDataRepo[] = dataRepo.slice(indexOfFirstPost, indexOfLastPost)
 
  const paginate: Dispatch<SetStateAction<number>> = (pageNumber: SetStateAction<number>) =>  setCurentPage(pageNumber)


  useEffect(() =>{
    const repos : IDataRepo[] = []
    async function fetchData(user: string) {
    const data = await fetch(`https://api.github.com/users/${user}/repos`)
    const json : IDataRepoLan[] = await data.json()
    json.forEach((repo : IDataRepoLan) => {
      fetchLanguage(repo.languages_url)
      const row : IDataRepoLan = {
        id: repo.id,
        html_url: repo.html_url,
        name: repo.name,
        description: repo.description,
        languages_url: repo.languages_url,
        languages: [],
        owner: {
          id: repo.owner.id,
          login: repo.owner.login,
          avatar_url: repo.owner.avatar_url
        },
      }
      repos.concat(row)
    })}
    if(user !== ""){ 
    fetchData(user)
  }
  },[submit])

  async function fetchLanguage(url:string) : Promise<string[]>  {
    let language: string[] = []
    let data = await fetch(url)
    let json = await data.json()
    console.log(json)
    return language
  }
  

return (
<div className="App">
  <Filter  user={setFilterUser} phrase={setFilterPhrase} language={setFilterLanguage} submite={() => setSubmit(true)}/>
  <Tabele  currentPosts={currentPosts}/>
  <Pagination totalPosts={dataRepo.length} paginate={paginate} postPerPage={setPostPerPage} numberOfPosts={numberOfPosts}/>
</div>
);}

export default App;