import PropTypes from 'prop-types';
import { SearchBarContainer } from './Searchbar.styled';
import { Formik } from 'formik';
import {
  SearchForm,
  SearchFormBtn,
  BtnLabel,
  Input,
  Icon,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const initialValues = {
    query: '',
  };

  return (
    <SearchBarContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <SearchForm>
          <SearchFormBtn type="submit">
            <Icon width="20" height="20" />
            <BtnLabel>Search</BtnLabel>
          </SearchFormBtn>

          <Input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchBarContainer>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
