import React from "react";
import { connect } from "react-redux";
import "./MatchFound.scss";

function MatchFound(props) {
  const { isLoading, searcheRsults } = props;
  const { team1_name, team2_name, start_ts } = searcheRsults;
  return (
    <div className="match-found__container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="match-found__wrap">
          <div className="match-found__teams">
            <p>{team1_name}</p>
            <p>vs</p>
            <p>{team2_name}</p>
          </div>
          <div className="match-found__time">
            <p>date/time{start_ts}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.matches.isLoading,
  searcheRsults: state.matches.searcheRsults
});

export default connect(mapStateToProps)(MatchFound);
