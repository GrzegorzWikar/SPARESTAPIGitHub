import { useState } from "react";

function Filters (){
    const [language, setLanguage] = useState();

    return(
    <form>
        <label>
            Phrase:
            <input type="text" name="phrase" />
        </label>
        <label>
            User:
            <input type="text" name="user" />
        </label>
        
        <label>
            Language:
            <select value={language} onChange={event => setLanguage(event.target.value)}>
                <option></option>
                <option>Go</option>
                <option>Java</option>
                <option>JavaScript</option>
            </select>
        </label>
        <input type="submit" value="Submit" />
    </form>
    
    )
}

export default Filters;