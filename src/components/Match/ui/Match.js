import React from "react";
import { DELETE_MATCH } from "../graphql/match.gql";
import { connect } from "react-redux";
import { removeMatch } from "../../../store/actions/matchesActions";
import { useMutation } from "@apollo/react-hooks";
import Spinner from "../../Spinner";
import "./Match.scss";
import InputLogo from "../component/InputLogo";
import { options } from "../constants/match.constants";

function Match(props) {
  const { removeMatch } = props;
  const { team1_name, team2_name, start_ts, url, idx, id } = props;
  const startUTC = new Date(start_ts * 1000 - 10800000).toLocaleString(
    "ru",
    options
  );
  const startLocal = new Date(start_ts * 1000).toLocaleString("ru", options);
  

  const [deleteMatch, { loading }] = useMutation(DELETE_MATCH, {
    onCompleted: () => removeMatch(idx)
  });

  if (loading) {
    return (
      <div className="match__container">
        <Spinner />
      </div>
    );
  } else
    return (
      <div className="match__container">
        <div className="match-found__wrap">
          <div className="match-found__teams">
            <div className="team__container">
              <p>{team1_name}</p>
              <InputLogo name={team1_name.replace(/ /g, "_")} idx={idx} />
            </div>
            <p>VS</p>
            <div className="team__container">
              <p>{team2_name}</p>

              <InputLogo name={team2_name.replace(/ /g, "_")} idx={idx} />
            </div>
          </div>
          <div className="match-found__time">
            <p>Time UTC : {startUTC}</p>
            <p>Time Local : {startLocal}</p>
          </div>
        </div>
        <p className="match__url">{url}</p>
        {idx || idx === 0 ? (
          <button
            className="search-form__btn"
            onClick={() => deleteMatch({ variables: { id } })}
          >
            Удалить
          </button>
        ) : (
          ""
        )}
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  removeMatch: idx => dispatch(removeMatch(idx))
});

export default connect(
  null,
  mapDispatchToProps
)(Match);
