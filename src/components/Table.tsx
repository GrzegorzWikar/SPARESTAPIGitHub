import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import CentredModal from './CentredModal';
import { IDataRepo } from '../models';
import Pagination from './Pagination';

function Tabele () {

  const [dataRepo, setDataRepo] = useState<IDataRepo[]>([]);
  const [currentPage, setCurentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);
  
  useEffect(() => {
    async function fetchData () {
      const data = await fetch("https://api.github.com/repositories")
      const json = await data.json()
      let loop =  json.forEach((e : IDataRepo)  => {
        let repo: IDataRepo = {
          id: e.id,
          html_url: e.html_url,
          name: e.name,
          description: e.description,
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

  const indexOfLastPost : number = currentPage * postPerPage
  const indexOfFirstPost : number = indexOfLastPost - postPerPage
  const currentPosts : IDataRepo[] = dataRepo.slice(indexOfFirstPost, indexOfLastPost)
 
  const paginate: any = (pageNumber: number) =>  setCurentPage(pageNumber) as void;
  
  const handleChange = (event: any) =>{
    if(event.target.value > 0){
      setPostPerPage(Number(event.target.value))
    }
  }
  return(
    <div>
    <input type="text" onChange={handleChange} />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File</th>
          <th>Description</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts?.map((res : IDataRepo) => (
          <tr  key={res.id}>
            <td><a href={res.html_url}>{res.name}</a></td>
            <td>{res.description}</td>
            <td><CentredModal avatar_url={res.owner.avatar_url} name={res.owner.login} /></td>
          </tr>
          
      ))}
      </tbody>
    </Table>
    <Pagination postPerPage={postPerPage} totalPosts={dataRepo.length} paginate={paginate} />
    </div>
  );
}


export default Tabele