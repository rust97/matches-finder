import React from "react";
import { connect } from "react-redux";
import { addMatch } from "../../../store/actions/matchesActions";
import Spinner from "../../../components/Spinner";
import "./MatchFound.scss";

function MatchFound(props) {
  const { allMatches, searcheRsults, addMatch, isLoading } = props;
  const { team1_name, team2_name, start_ts } = searcheRsults;
  console.log(allMatches);
  return (
    <div className="match-found__container">
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <div className="match-found__wrap">
            <div className="match-found__teams">
              <p>{team1_name ? team1_name : "------"}</p>
              <p>vs</p>
              <p>{team2_name ? team2_name : "------"}</p>
            </div>
            <div className="match-found__time">
              <p>date/time : {start_ts ? start_ts : "------"}</p>
            </div>
          </div>
          <button
            className="search-form__btn"
            onClick={() => addMatch(searcheRsults)}
          >
            Добавить
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  allMatches: state.matches.allMatches,
  searcheRsults: state.matches.searcheRsults,
  isLoading: state.matches.isLoading
});

const mapDispatchToProps = dispatch => ({
  addMatch: match => dispatch(addMatch(match))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchFound);
