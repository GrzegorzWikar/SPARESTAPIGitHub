import { IFilter } from "../models";


const Form = ({user, phrase, language, submite} : IFilter) => {


    return (
        <form>
            <label>
            User:
            <input type="text" id="user" onChange={(event) => user(event.target.value)}/>
        </label>
        <label>
            Phrase:
            <input type="text" onChange={event => phrase(event.target.value)} />
        </label>
        <label>
            Language:
            <select id="language"  onChange={event => language(event.target.value)}>
                <option>All</option>
                <option>Go</option>
                <option>Java</option>
                <option>JavaScript</option>
            </select>
        </label>
        <button onClick={submite} type="button" className="btn btn-primary" >Submite</button>
    </form>
    )
}

export default Form;