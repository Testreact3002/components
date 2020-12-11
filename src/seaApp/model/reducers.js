import * as utils from "./utils.js";

const { types } = require("models").sea;

export default {
  msg(msg = [], { type, target, data, sea }) {
    let m;
    switch (type) {
      case types.SEA_FISH__DICE:
        m = utils.dicemsg(target, data);
      break;
      case types.SEA_FISH__SWIM:
      m = utils.swimmsg(target);
      break;
      case types.SEA_FISH__BITE:
      m = utils.bitemsg(data.bitten, target);
        break;
    default:
        m = null;
    }
    return utils.addmsg(msg, m);
  },

  map(map = [], { type, sea }) {
    if (type === types.SEA_FISH__SWIM) {
      return utils.sea2map(sea);
    }
    return map;
  },

  left(left = null, { type, data }) {
    switch (type) {
      case types.SEA_FISH__DICE:
      return utils.dices2left(data);
      case types.SEA_FISH__BITE:
      return utils.swimable2left(data.bitten);
      default:
      return left;
    }
  },

  right(right = null, { type, target }) {
    switch (type) {
      case types.SEA_FISH__DICE:
      return utils.swimable2right(target, false);
      case types.SEA_FISH__BITE:
      return utils.swimable2right(target);
    default:
        return right;
    }
  },
};
