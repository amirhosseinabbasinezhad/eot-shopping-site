import {faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
function SearchBar() {
    return ( <>
        <InputGroup className="mb-3">
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
            <Button variant="outline-light" id="button-addon1">
            <FontAwesomeIcon className="searchicon" icon={faSearch}size="lg" />
            </Button>
        </InputGroup>
    </> );
}

export default SearchBar;