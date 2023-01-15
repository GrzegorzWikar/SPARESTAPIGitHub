import Table from 'react-bootstrap/Table';
import CentredModal from './CentredModal';
import { IDataRepo } from '../models';

function Tabele ({currentPosts}: any) {


  return(
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
  );
}


export default Tabele