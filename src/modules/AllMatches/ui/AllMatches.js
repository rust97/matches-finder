import React from "react";
import { connect } from "react-redux";
import "./AllMatches.scss";

function AllMatches(props) {
  const { allMatches } = props;
  const matchList = allMatches.map(item => {
    console.log(Date.parse(item.start_ts));
    const { team1_name, team2_name, start_ts } = item;
    return (
      <div className="match-found__wrap" key={item.id}>
        <div className="match-found__teams">
          <p>{team1_name ? team1_name : "------"}</p>
          <p>vs</p>
          <p>{team2_name ? team2_name : "------"}</p>
        </div>
        <div className="match-found__time">
          <p>date/time : {start_ts ? start_ts : "------"}</p>
        </div>
      </div>
    );
  });

  return <div className="match-found__container">{matchList}</div>;
}

const mapStateToProps = state => ({
  allMatches: state.matches.allMatches
});

export default connect(mapStateToProps)(AllMatches);
