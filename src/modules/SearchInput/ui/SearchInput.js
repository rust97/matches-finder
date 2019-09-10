import React, { useState } from "react";
import { connect } from "react-redux";
import { searchMatch } from "../../../store/actions/matchesActions";
import "./SearchInput.scss";

function SearchInput(props) {
  const { isLoading, searchMatch } = props;
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
    searchMatch(obj);
  }

  return (
    <form onSubmit={e => getUrl(e)} className="search-form">
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="search-form__input"
      />

      <button className="search-form__btn" onClick={e => getUrl(e)}>
        Получить результат
      </button>
    </form>
  );
}

const mapStateToProps = state => ({
  isLoading: state.matches.isLoading
});

const mapDispatchToProps = dispatch => ({
  searchMatch: obj => dispatch(searchMatch(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
