import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

function CentredModal ({repo}) {

    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div>
            <Button  onClick={() => setModalShow(true)}> {repo.owner.login} </Button> 
            <Modal show={modalShow}
            onHide={()=>setModalShow(false)}
            size="lg"  
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton />
                <Modal.Body>
                    <Card.Img variant='top' src={repo.owner.avatar_url} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CentredModal