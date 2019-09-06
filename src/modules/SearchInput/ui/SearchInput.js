import React, { useState } from "react";
import { connect } from "react-redux";
import { searchMatch } from "../../../store/actions/matchesActions";
import "./SearchInput.scss";

function SearchInput(props) {
  const { isLoading, searcheRsults, searchMatch } = props;
  console.log(props);
  const [url, setUrl] = useState("");

  function getUrl(e) {
    e.preventDefault();
    const num = url.match(/(\w+)(=)(\d+)/gi);
    let obj = {};
    num.forEach(item => {
      const result = item.match(/(\w+)/gi);
      obj[result[0]] = result[1];
    });
    console.log(obj);
    searchMatch(obj);
    console.log(searcheRsults);
  }

  return (
    <form onSubmit={e => getUrl(e)} className="search-form">
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="search-form__input"
      />
      <input
        type="submit"
        value="Получить результат"
        className="search-form__btn"
      />
    </form>
  );
}

const mapStateToProps = state => ({
  isLoading: state.matches.isLoading,
  searcheRsults: state.matches.searcheRsults
});

const mapDispatchToProps = dispatch => ({
  searchMatch: obj => dispatch(searchMatch(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
