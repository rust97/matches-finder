import React, { useState } from "react";
import { connect } from "react-redux";
import { searchMatch } from "../../../store/actions/matchesActions";
import "./SearchInput.scss";

function SearchInput(props) {
  const { isLoading, searcheRsults, searchMatch } = props;
  console.log(props);
  const [url, setUrl] = useState("");

  function getUrl() {
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
    <div>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={() => getUrl()}>get id</button>
    </div>
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
