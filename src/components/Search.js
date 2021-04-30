// import {useState} from 'react';
import {Col, InputGroup, FormControl, Button} from 'react-bootstrap'

// // initialId will be set by either Denver's information or 
// the users current location
// // what is the onSave for? 
// const Search = ({initialId, onSave}) => {
const Search = () => {

    //     const [newId, setNewId] = useState(initialId);
    return (
    //     // would we go ahead and have the whole search button set up on this side
    //     // or just do the search actions on index?
    //     //   <li>
    //     //     <input 
    //     //       type="text" 
    //     //       placeholder="Enter new ID" 
    //     //       onChange={(e) => setNewId(e.target.value)} 
    //     //     />
    //     //     <button onClick={() => onSave(newId)}>Save</button>
    //     //   </li>
    <Col id="searchId">
      
        <InputGroup className="mb-3" >
            <FormControl
                placeholder="City, State"
                aria-label="CityState"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary">Submit</Button>
            </InputGroup.Append>
        </InputGroup>

        <h3>And then down here would be the recently searched cities as a component?</h3>
        <br/>
        <h3>What normally goes down  here huh?</h3>
        <br/>
        <h3>I want a cute rounded corners boarder around this beast ASAP</h3> 

    </Col>

    )

}


export default Search;