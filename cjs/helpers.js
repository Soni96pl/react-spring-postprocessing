"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimatedFiber = void 0;

require("core-js/modules/es6.array.map.js");

require("core-js/modules/es6.array.slice.js");

var _fiber = require("@react-three/fiber");

var _animated = require("@react-spring/animated");

const createAnimatedFiber = input => {
  const primitives = Object.keys(input).map(key => key[0].toLowerCase() + key.slice(1));
  const host = (0, _animated.createHost)(primitives, {
    applyAnimatedValues: _fiber.applyProps
  });
  return host.animated;
};

exports.createAnimatedFiber = createAnimatedFiber;