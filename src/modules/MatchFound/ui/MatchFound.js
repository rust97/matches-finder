import React from "react";
import { connect } from "react-redux";
import { postData } from "../../../store/actions/matchesActions";
import { useMutation } from "@apollo/react-hooks";
import { DATA } from "../graphql/query.gql";
import Spinner from "../../../components/Spinner";
import "./MatchFound.scss";
import Match from "../../../components/Match";

function MatchFound(props) {
  const { searcheRsults, postData, isLoading } = props;
  const { team1_name, team2_name, start_ts, url, id } = searcheRsults;

  const [postMatch, { data, loading }] = useMutation(DATA, {
    variables: {
      url: url,
      home: team1_name,
      away: team2_name,
      start: start_ts,
      game: id
    },
    onCompleted: data => postData(data.addMatch)
  });

  return (
    <div className="match-found__container">
      {isLoading || loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {team1_name ? (
            <Match
              team1_name={team1_name}
              team2_name={team2_name}
              start_ts={start_ts}
              url={url}
            />
          ) : (
            ""
          )}
          {team1_name ? (
            <button className="search-form__btn" onClick={() => postMatch()}>
              Добавить
            </button>
          ) : (
            ""
          )}
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.matches.isLoading,
  searcheRsults: state.matches.searcheRsults
});

const mapDispatchToProps = dispatch => ({
  postData: match => dispatch(postData(match))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchFound);
