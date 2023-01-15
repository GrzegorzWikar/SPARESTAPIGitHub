import { useState, useEffect } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Tabele from './components/Table';
import { IDataRepo, IDataRepoLan } from './models';

const App: React.FC = () => {

  const [dataRepo, setDataRepo] = useState<IDataRepo[]>([]);
  const [currentPage, setCurentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);
  const [filterLanguage, setFilterLanguage] = useState<string>("");
  const [filterPhrase, setFilterPhrase] = useState<string>("");
  const [filterUserName, setFilterUserName] = useState<string>("");
  
  const indexOfLastPost : number = currentPage * postPerPage
  const indexOfFirstPost : number = indexOfLastPost - postPerPage
  const currentPosts : any = dataRepo.slice(indexOfFirstPost, indexOfLastPost)
 
  const paginate: any = (pageNumber: number) =>  setCurentPage(pageNumber) as void;
  
  const handleChange = (event: any) =>{
    if(event.target.value > 0){
      setPostPerPage(Number(event.target.value))
    }
  }

  async function fetchLanguage(url:string) :Promise<string[]>  {
    let language: string[] = []
    let data = await fetch(url)
    let json = await data.json()
    json.array.forEach((row : string) => {
      language.concat(row)
    });
    return language
  }



  useEffect(() => {
    async function fetchData () {
      const data = await fetch("https://api.github.com/repositories")
      const json = await data.json()
      json.forEach((e : any)  => {
        let repo: IDataRepo = {
          id: e.id,
          html_url: e.html_url,
          name: e.name,
          description: e.description,
          languages: e.languages_url,
          owner: {
            id: e.owner.id,
            login: e.owner.login,
            avatar_url: e.owner.avatar_url
          }
        }
        setDataRepo(data => data.concat(repo))
      })
    }
    fetchData();
  }, [])

  function filter () {
    let timeRepo : IDataRepo[] = dataRepo
    if(filterUserName !== ""){
      timeRepo = timeRepo.filter((repo => repo.owner.login === filterUserName ))
    }
    if(filterPhrase !== ""){
      timeRepo = timeRepo.filter((repo) => (repo.description.includes(filterPhrase)))
    }
    if(filterLanguage !== ""){
      let repoTime: IDataRepoLan[] = []
      timeRepo.forEach(repos => {
      let language: Promise<string[]> = fetchLanguage(repos.languages)
      let repo: IDataRepoLan = {
        id: repos.id,
        html_url: repos.html_url,
        name: repos.name,
        description: repos.description,
        languages: language,
        owner: {
          id: repos.owner.id,
          login: repos.owner.login,
          avatar_url: repos.owner.avatar_url
        }
      }
      repoTime.concat(repo)
      })
      repoTime = repoTime.filter((repo) => repo.languages.then((lang : string[]) => {lang.forEach((lang) => (!filterLanguage.includes(lang)))}))
    }
    setDataRepo(timeRepo)
  }

return (
  <div className="App">
    <form>
        <label>
            Phrase:
            <input type="text" onChange={(event) => setFilterPhrase(event.target.value)} />
        </label>
        <label>
            User:
            <input type="text" id="user" onChange={event => setFilterUserName(event.target.value)}/>
        </label>
        <label>
            Language:
            <select id="language"  onChange={event => setFilterLanguage(event.target.value)}>
                <option>All</option>
                <option>Go</option>
                <option>Java</option>
                <option>JavaScript</option>
            </select>
        </label>
        <button onClick={() => filter()} type="button" className="btn btn-primary" >Submite</button>
    </form>
    <input type="text" onChange={handleChange} value={postPerPage}/>
    <Tabele  currentPosts={currentPosts}/>
    <Pagination postPerPage={postPerPage} totalPosts={dataRepo.length} paginate={paginate} />

  </div>
);
}

export default App;