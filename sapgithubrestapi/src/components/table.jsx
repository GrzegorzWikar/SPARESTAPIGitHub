import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import CentredModal from './centredModal';

function Tabele () {

    const [repoData, setRepoData] = useState();
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch("https://api.github.com/repositories")
        .then((res) => res.json())
        .then(
            (result) => {
                setRepoData(result)
            },
            (error) =>{
                console.log(error)
            }
        )
    }, [])

    return(
        <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>File</th>
              <th>Description</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {repoData?.map((res) => (
                    <tr key={res.id}>
                        <td><a href={res.html_url}>{res.name}</a></td>
                        <td>{res.description}</td>
                        <td>
                            <CentredModal repo={res}/>
                        </td>
                    </tr>
            ))}
          </tbody>
        </Table>
        </>
      );
    }


export default Tabele