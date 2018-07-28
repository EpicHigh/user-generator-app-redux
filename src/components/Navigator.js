import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { nextIsDisabled, previousIsDisabled } from "../selectors/selectors";
import { increaseIndex, decreaseIndex } from "../actions/index";
import { generateUser } from "../actions/users";

class Navigator extends Component {
  onClickNext = () => {
    this.props.dispatch(increaseIndex());
  };

  onClickPrevious = () => {
    this.props.dispatch(decreaseIndex());
  };

  onClickGenerate = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    const data = await response.data;
    const {
      results: { 0: user }
    } = data;
    const {
      gender,
      email,
      name: { title, first, last },
      picture: { large: picture }
    } = user;
    this.props.dispatch(
      generateUser({ gender, title, first, last, email, picture })
    );
  };

  render() {
    return (
      <div className="flex items-center justify-center pa4">
        <button
          className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
          disabled={this.props.IsPreviousBtnBeDisabled}
          onClick={this.onClickPrevious}
        >
          <svg
            className="w1"
            data-icon="chevronLeft"
            viewBox="0 0 32 32"
            style={{ fill: "currentcolor" }}
          >
            <title>chevronLeft icon</title>
            <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
          </svg>
          <span className="pl1">Previous</span>
        </button>
        <button
          className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
          onClick={this.onClickGenerate}
        >
          <span className="pl1">Generate</span>
        </button>
        <button
          className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
          disabled={this.props.IsNextBtnBeDisabled}
          onClick={this.onClickNext}
        >
          <span className="pr1">Next</span>
          <svg
            className="w1"
            data-icon="chevronRight"
            viewBox="0 0 32 32"
            style={{ fill: "currentcolor" }}
          >
            <title>chevronRight icon</title>
            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
          </svg>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    IsNextBtnBeDisabled: nextIsDisabled(state.user.length, state.index),
    IsPreviousBtnBeDisabled: previousIsDisabled(state.user.length, state.index)
  };
};

export default connect(mapStateToProps)(Navigator);
