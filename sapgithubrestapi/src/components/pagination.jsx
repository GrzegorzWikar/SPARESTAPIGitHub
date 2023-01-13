import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


function Paginations () {
    let items = [];

    const [active, setActive] = useState(1);

    function ChangePage (){
        for(let number = 1; number<=5; number++){
            items.push(
                <Pagination.Item value = {number} key={number} active = {number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
    }
    ChangePage();

    return (
        <div>
        <Pagination onChange = {event => setActive(event.target.value)??console.log(event.target.value)}>{items}</Pagination>
        </div>
    )
}

export default Paginations;