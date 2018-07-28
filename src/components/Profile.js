import React from "react";
import { connect } from "react-redux";
import { selectUser } from "../selectors/selectors";

const Profile = ({ user: { picture, title, first, last, email, gender } }) => (
  <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <img
        src={picture}
        className="br-100 h4 w4 dib ba b--black-05 pa2"
        alt={`The photo of ${title} ${first} ${last}`}
      />
      <h1 className="f3 mb2">{String(title).toLocaleUpperCase()}</h1>
      <h2>
        {first} {last}
      </h2>
      <h2 className="f5 fw4 gray mt0">Gender: {gender}</h2>
      <h2 className="f5 fw4 gray mt0">
        <b>Email</b>
      </h2>
      <h3 className="f5 fw4 gray mt0">{email}</h3>
    </div>
  </article>
);

const mapStateToProps = state => {
  return {
    user: selectUser(state.user, state.index)
  };
};

export default connect(mapStateToProps)(Profile);
