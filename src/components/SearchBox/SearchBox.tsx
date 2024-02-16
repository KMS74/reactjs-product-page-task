import { Button, Form } from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';
import classes from './SearchBox.module.scss';

const SearchBox = () => {
  return (
    <Form className={classes.searchBox}>
      <Button variant="">
        <MdSearch size={24} />
      </Button>
      <Form.Control placeholder="Search" aria-label="search-box" />
    </Form>
  );
};

export default SearchBox;
