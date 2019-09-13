import React, { useEffect } from "react";
import { connect } from "react-redux";
import Match from "../../../components/Match";
import { getAllMatches } from "../../../store/actions/matchesActions";
import { DATA } from "../graphql/matches.gql";
import { useLazyQuery } from "@apollo/react-hooks";
import "./AllMatches.scss";

function AllMatches(props) {
  const { allMatches, getAllMatches } = props;
  console.log(allMatches);

  const [getDatafromApi, { data, loading }] = useLazyQuery(DATA, {
    onCompleted: () => getAllMatches(data.allMatches)
  });

  useEffect(() => {
    getDatafromApi();
  }, []);

  const matchList = allMatches.map((item, i) => {
    return (
      <Match
        team1_name={item.home}
        team2_name={item.away}
        start_ts={item.start}
        url={item.url}
        key={item.id}
        idx={i}
        id={item.id}
      />
    );
  });

  return <div className="match-found__container">{matchList}</div>;
}

const mapDispatchToProps = disptch => ({
  getAllMatches: matches => disptch(getAllMatches(matches))
});

const mapStateToProps = state => ({
  allMatches: state.matches.allMatches
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMatches);
