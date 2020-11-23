import "RatingListItem/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React, { Component } from "react";

const b = block("rating-list-item");

class RatingListItem extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className={b({ type: this.props.type })}>
        <div className={b("num")}>{this.props.num}</div>
        <a className={b("cover-link")} href={this.props.movieUrl}>
          {this.props.image ? (
            <img
              className={b("cover")}
              src={this.props.image}
              onClick={this.props.onClick.bind(null, this.props)}
            />
          ) : null}
        </a>
        <div className={b("title")}>
          <a
            href={this.props.movieUrl}
            onClick={this.props.onClick.bind(null, this.props)}
          >
            {this.props.title}
{" "}
            <span className={b("year")}>{this.props.year}</span>
          </a>
        </div>
        <div className={b("calc-rate")} title={this.props.calcRateLabel}>
          {this.props.calc_rate}
        </div>
        <div className={b("votes")} title={this.props.votesLabel}>
          {this.props.votes_num}
        </div>
        <div className={b("avg-rate")} title={this.props.avgRateLabel}>
          {this.props.avg_rate}
        </div>
      </div>
    );
  }
}

RatingListItem.propTypes = {
  num: PropTypes.number,
  id: PropTypes.number,
  calc_rate: PropTypes.number,
  votes_num: PropTypes.number,
  avg_rate: PropTypes.number,
  typle: PropTypes.string,
  year: PropTypes.number,
  image: PropTypes.string,
  calcRateLabel: PropTypes.string,
  votesLabel: PropTypes.string,
  avgRateLabel: PropTypes.string,
  type: PropTypes.oneOf([null, "mid", "small"]),
  onClick: PropTypes.func
};

RatingListItem.defaultProps = {
  calcRateLabel: "Рейтинг",
  votesLabel: "Голосов",
  avgRateLabel: "Средний рейтинг",
  type: null,
  onClick: () => {}
};
export default RatingListItem;
