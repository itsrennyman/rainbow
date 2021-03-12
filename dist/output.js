'use strict';

var React = require('react');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Bow = function Bow(_ref) {
  var bgColor = _ref.bgColor,
      borderColor = _ref.borderColor,
      handleClick = _ref.handleClick,
      children = _ref.children;
  var tileItem = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  };
  return /*#__PURE__*/React__default['default'].createElement(framerMotion.motion.div, {
    variants: tileItem,
    whileTap: {
      scale: 0.9
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: function onClick() {
      return handleClick({
        selected: bgColor
      });
    },
    className: "h-20 w-auto sm:h-20 sm:w-20 shadow-lg rounded-lg sm:rounded-xl cursor-pointer hover:shadow-xl hover:transform hover:scale-105 hover:-rotate-6 duration-150 flex items-center justify-center hover:border-4 border-".concat(borderColor, " bg-").concat(bgColor)
  }, children));
};

var TilesContainer = function TilesContainer(_ref) {
  var children = _ref.children;
  var container = {
    hidden: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  return /*#__PURE__*/React__default['default'].createElement(framerMotion.motion.div, {
    variants: container,
    initial: "hidden",
    animate: "show",
    exit: "hidden",
    className: "grid grid-cols-4 gap-4"
  }, children);
};

var defaultPalette = {
  black: '#000',
  white: '#fff',
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337'
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843'
  },
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75'
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87'
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95'
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81'
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  lightBlue: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63'
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a'
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b'
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  },
  lime: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314'
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12'
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f'
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12'
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d'
  },
  warmGray: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917'
  },
  trueGray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717'
  },
  gray: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b'
  },
  coolGray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  },
  blueGray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  }
};

var notAllowed = ['transparent', 'current', 'white', 'black'];

var humanize = function humanize(color, value) {
  return "".concat(color, "-").concat(value);
};

var cleanColors = function cleanColors(palette, exclude) {
  return Object.keys(palette).filter(function (key) {
    return ![].concat(notAllowed, _toConsumableArray(exclude)).includes(key);
  }).reduce(function (obj, key) {
    obj[key] = palette[key];
    return obj;
  }, {});
};

var Rainbow = function Rainbow(_ref) {
  var _ref$palette = _ref.palette,
      palette = _ref$palette === void 0 ? null : _ref$palette,
      _ref$exclude = _ref.exclude,
      exclude = _ref$exclude === void 0 ? [] : _ref$exclude,
      _ref$onColorSelected = _ref.onColorSelected,
      onColorSelected = _ref$onColorSelected === void 0 ? null : _ref$onColorSelected;
  var colors = cleanColors(palette ? palette : defaultPalette, exclude);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      selectedColor = _useState2[0],
      setSelectedColor = _useState2[1];

  var draw = function draw(_ref2) {
    var color = _ref2.color,
        _ref2$selected = _ref2.selected,
        selected = _ref2$selected === void 0 ? null : _ref2$selected,
        _ref2$hex = _ref2.hex,
        hex = _ref2$hex === void 0 ? null : _ref2$hex;

    if (selectedColor) {
      if (onColorSelected) {
        onColorSelected({
          color: selected,
          hex: hex
        });
      }
    } else {
      setSelectedColor(_defineProperty({}, color, colors[color]));
    }
  };

  var revertDraw = function revertDraw() {
    return setSelectedColor(false);
  };

  var DetailedTilesList = function DetailedTilesList() {
    return /*#__PURE__*/React__default['default'].createElement(TilesContainer, null, Object.keys(selectedColor).map(function (color) {
      return Object.keys(selectedColor[color]).map(function (colorScale, index) {
        var hex = selectedColor[color][colorScale];

        if (colorScale === '900') {
          return /*#__PURE__*/React__default['default'].createElement(Bow, {
            key: "revert",
            bgColor: "gray-100",
            borderColor: "gray-200",
            handleClick: function handleClick() {
              return revertDraw();
            }
          }, /*#__PURE__*/React__default['default'].createElement("svg", {
            className: "h-6 w-6 text-".concat(humanize(color, 500)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, /*#__PURE__*/React__default['default'].createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M10 19l-7-7m0 0l7-7m-7 7h18"
          })));
        }

        return /*#__PURE__*/React__default['default'].createElement(Bow, {
          key: hex,
          bgColor: humanize(color, colorScale),
          borderColor: humanize(color, 500),
          handleClick: function handleClick(_ref3) {
            var selected = _ref3.selected;
            return draw({
              color: color,
              selected: selected,
              hex: hex
            });
          }
        });
      });
    }));
  };

  var MainTilesList = function MainTilesList() {
    return /*#__PURE__*/React__default['default'].createElement(TilesContainer, null, Object.keys(colors).map(function (color) {
      return Object.keys(colors[color]).map(function (colorScale, hex) {
        if (selectedColor || colorScale !== '400') {
          return false;
        }

        return /*#__PURE__*/React__default['default'].createElement(Bow, {
          key: hex,
          bgColor: humanize(color, colorScale),
          borderColor: humanize(color, 500),
          handleClick: function handleClick() {
            return draw({
              color: color
            });
          }
        });
      });
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "relative py-3 sm:max-w-xl"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "max-w-md mx-auto"
  }, selectedColor ? /*#__PURE__*/React__default['default'].createElement(DetailedTilesList, null) : /*#__PURE__*/React__default['default'].createElement(MainTilesList, null))));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v2.0.3 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.bg-fixed{background-attachment:fixed}.bg-local{background-attachment:local}.bg-scroll{background-attachment:scroll}.bg-clip-border{background-clip:border-box}.bg-clip-padding{background-clip:padding-box}.bg-clip-content{background-clip:content-box}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.bg-transparent{background-color:transparent}.bg-current{background-color:currentColor}.bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgba(209,213,219,var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgba(156,163,175,var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(107,114,128,var(--tw-bg-opacity))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgba(75,85,99,var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.bg-red-50{--tw-bg-opacity:1;background-color:rgba(254,242,242,var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity:1;background-color:rgba(254,226,226,var(--tw-bg-opacity))}.bg-red-200{--tw-bg-opacity:1;background-color:rgba(254,202,202,var(--tw-bg-opacity))}.bg-red-300{--tw-bg-opacity:1;background-color:rgba(252,165,165,var(--tw-bg-opacity))}.bg-red-400{--tw-bg-opacity:1;background-color:rgba(248,113,113,var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgba(239,68,68,var(--tw-bg-opacity))}.bg-red-600{--tw-bg-opacity:1;background-color:rgba(220,38,38,var(--tw-bg-opacity))}.bg-red-700{--tw-bg-opacity:1;background-color:rgba(185,28,28,var(--tw-bg-opacity))}.bg-red-800{--tw-bg-opacity:1;background-color:rgba(153,27,27,var(--tw-bg-opacity))}.bg-red-900{--tw-bg-opacity:1;background-color:rgba(127,29,29,var(--tw-bg-opacity))}.bg-yellow-50{--tw-bg-opacity:1;background-color:rgba(255,251,235,var(--tw-bg-opacity))}.bg-yellow-100{--tw-bg-opacity:1;background-color:rgba(254,243,199,var(--tw-bg-opacity))}.bg-yellow-200{--tw-bg-opacity:1;background-color:rgba(253,230,138,var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity:1;background-color:rgba(252,211,77,var(--tw-bg-opacity))}.bg-yellow-400{--tw-bg-opacity:1;background-color:rgba(251,191,36,var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgba(245,158,11,var(--tw-bg-opacity))}.bg-yellow-600{--tw-bg-opacity:1;background-color:rgba(217,119,6,var(--tw-bg-opacity))}.bg-yellow-700{--tw-bg-opacity:1;background-color:rgba(180,83,9,var(--tw-bg-opacity))}.bg-yellow-800{--tw-bg-opacity:1;background-color:rgba(146,64,14,var(--tw-bg-opacity))}.bg-yellow-900{--tw-bg-opacity:1;background-color:rgba(120,53,15,var(--tw-bg-opacity))}.bg-green-50{--tw-bg-opacity:1;background-color:rgba(236,253,245,var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity:1;background-color:rgba(209,250,229,var(--tw-bg-opacity))}.bg-green-200{--tw-bg-opacity:1;background-color:rgba(167,243,208,var(--tw-bg-opacity))}.bg-green-300{--tw-bg-opacity:1;background-color:rgba(110,231,183,var(--tw-bg-opacity))}.bg-green-400{--tw-bg-opacity:1;background-color:rgba(52,211,153,var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgba(16,185,129,var(--tw-bg-opacity))}.bg-green-600{--tw-bg-opacity:1;background-color:rgba(5,150,105,var(--tw-bg-opacity))}.bg-green-700{--tw-bg-opacity:1;background-color:rgba(4,120,87,var(--tw-bg-opacity))}.bg-green-800{--tw-bg-opacity:1;background-color:rgba(6,95,70,var(--tw-bg-opacity))}.bg-green-900{--tw-bg-opacity:1;background-color:rgba(6,78,59,var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgba(239,246,255,var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.bg-blue-200{--tw-bg-opacity:1;background-color:rgba(191,219,254,var(--tw-bg-opacity))}.bg-blue-300{--tw-bg-opacity:1;background-color:rgba(147,197,253,var(--tw-bg-opacity))}.bg-blue-400{--tw-bg-opacity:1;background-color:rgba(96,165,250,var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.bg-blue-700{--tw-bg-opacity:1;background-color:rgba(29,78,216,var(--tw-bg-opacity))}.bg-blue-800{--tw-bg-opacity:1;background-color:rgba(30,64,175,var(--tw-bg-opacity))}.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(30,58,138,var(--tw-bg-opacity))}.bg-indigo-50{--tw-bg-opacity:1;background-color:rgba(238,242,255,var(--tw-bg-opacity))}.bg-indigo-100{--tw-bg-opacity:1;background-color:rgba(224,231,255,var(--tw-bg-opacity))}.bg-indigo-200{--tw-bg-opacity:1;background-color:rgba(199,210,254,var(--tw-bg-opacity))}.bg-indigo-300{--tw-bg-opacity:1;background-color:rgba(165,180,252,var(--tw-bg-opacity))}.bg-indigo-400{--tw-bg-opacity:1;background-color:rgba(129,140,248,var(--tw-bg-opacity))}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgba(99,102,241,var(--tw-bg-opacity))}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgba(79,70,229,var(--tw-bg-opacity))}.bg-indigo-700{--tw-bg-opacity:1;background-color:rgba(67,56,202,var(--tw-bg-opacity))}.bg-indigo-800{--tw-bg-opacity:1;background-color:rgba(55,48,163,var(--tw-bg-opacity))}.bg-indigo-900{--tw-bg-opacity:1;background-color:rgba(49,46,129,var(--tw-bg-opacity))}.bg-purple-50{--tw-bg-opacity:1;background-color:rgba(245,243,255,var(--tw-bg-opacity))}.bg-purple-100{--tw-bg-opacity:1;background-color:rgba(237,233,254,var(--tw-bg-opacity))}.bg-purple-200{--tw-bg-opacity:1;background-color:rgba(221,214,254,var(--tw-bg-opacity))}.bg-purple-300{--tw-bg-opacity:1;background-color:rgba(196,181,253,var(--tw-bg-opacity))}.bg-purple-400{--tw-bg-opacity:1;background-color:rgba(167,139,250,var(--tw-bg-opacity))}.bg-purple-500{--tw-bg-opacity:1;background-color:rgba(139,92,246,var(--tw-bg-opacity))}.bg-purple-600{--tw-bg-opacity:1;background-color:rgba(124,58,237,var(--tw-bg-opacity))}.bg-purple-700{--tw-bg-opacity:1;background-color:rgba(109,40,217,var(--tw-bg-opacity))}.bg-purple-800{--tw-bg-opacity:1;background-color:rgba(91,33,182,var(--tw-bg-opacity))}.bg-purple-900{--tw-bg-opacity:1;background-color:rgba(76,29,149,var(--tw-bg-opacity))}.bg-pink-50{--tw-bg-opacity:1;background-color:rgba(253,242,248,var(--tw-bg-opacity))}.bg-pink-100{--tw-bg-opacity:1;background-color:rgba(252,231,243,var(--tw-bg-opacity))}.bg-pink-200{--tw-bg-opacity:1;background-color:rgba(251,207,232,var(--tw-bg-opacity))}.bg-pink-300{--tw-bg-opacity:1;background-color:rgba(249,168,212,var(--tw-bg-opacity))}.bg-pink-400{--tw-bg-opacity:1;background-color:rgba(244,114,182,var(--tw-bg-opacity))}.bg-pink-500{--tw-bg-opacity:1;background-color:rgba(236,72,153,var(--tw-bg-opacity))}.bg-pink-600{--tw-bg-opacity:1;background-color:rgba(219,39,119,var(--tw-bg-opacity))}.bg-pink-700{--tw-bg-opacity:1;background-color:rgba(190,24,93,var(--tw-bg-opacity))}.bg-pink-800{--tw-bg-opacity:1;background-color:rgba(157,23,77,var(--tw-bg-opacity))}.bg-pink-900{--tw-bg-opacity:1;background-color:rgba(131,24,67,var(--tw-bg-opacity))}.bg-amber-50{--tw-bg-opacity:1;background-color:rgba(255,251,235,var(--tw-bg-opacity))}.bg-amber-100{--tw-bg-opacity:1;background-color:rgba(254,243,199,var(--tw-bg-opacity))}.bg-amber-200{--tw-bg-opacity:1;background-color:rgba(253,230,138,var(--tw-bg-opacity))}.bg-amber-300{--tw-bg-opacity:1;background-color:rgba(252,211,77,var(--tw-bg-opacity))}.bg-amber-400{--tw-bg-opacity:1;background-color:rgba(251,191,36,var(--tw-bg-opacity))}.bg-amber-500{--tw-bg-opacity:1;background-color:rgba(245,158,11,var(--tw-bg-opacity))}.bg-amber-600{--tw-bg-opacity:1;background-color:rgba(217,119,6,var(--tw-bg-opacity))}.bg-amber-700{--tw-bg-opacity:1;background-color:rgba(180,83,9,var(--tw-bg-opacity))}.bg-amber-800{--tw-bg-opacity:1;background-color:rgba(146,64,14,var(--tw-bg-opacity))}.bg-amber-900{--tw-bg-opacity:1;background-color:rgba(120,53,15,var(--tw-bg-opacity))}.bg-orange-50{--tw-bg-opacity:1;background-color:rgba(255,247,237,var(--tw-bg-opacity))}.bg-orange-100{--tw-bg-opacity:1;background-color:rgba(255,237,213,var(--tw-bg-opacity))}.bg-orange-200{--tw-bg-opacity:1;background-color:rgba(254,215,170,var(--tw-bg-opacity))}.bg-orange-300{--tw-bg-opacity:1;background-color:rgba(253,186,116,var(--tw-bg-opacity))}.bg-orange-400{--tw-bg-opacity:1;background-color:rgba(251,146,60,var(--tw-bg-opacity))}.bg-orange-500{--tw-bg-opacity:1;background-color:rgba(249,115,22,var(--tw-bg-opacity))}.bg-orange-600{--tw-bg-opacity:1;background-color:rgba(234,88,12,var(--tw-bg-opacity))}.bg-orange-700{--tw-bg-opacity:1;background-color:rgba(194,65,12,var(--tw-bg-opacity))}.bg-orange-800{--tw-bg-opacity:1;background-color:rgba(154,52,18,var(--tw-bg-opacity))}.bg-orange-900{--tw-bg-opacity:1;background-color:rgba(124,45,18,var(--tw-bg-opacity))}.bg-warmGray-50{--tw-bg-opacity:1;background-color:rgba(250,250,249,var(--tw-bg-opacity))}.bg-warmGray-100{--tw-bg-opacity:1;background-color:rgba(245,245,244,var(--tw-bg-opacity))}.bg-warmGray-200{--tw-bg-opacity:1;background-color:rgba(231,229,228,var(--tw-bg-opacity))}.bg-warmGray-300{--tw-bg-opacity:1;background-color:rgba(214,211,209,var(--tw-bg-opacity))}.bg-warmGray-400{--tw-bg-opacity:1;background-color:rgba(168,162,158,var(--tw-bg-opacity))}.bg-warmGray-500{--tw-bg-opacity:1;background-color:rgba(120,113,108,var(--tw-bg-opacity))}.bg-warmGray-600{--tw-bg-opacity:1;background-color:rgba(87,83,78,var(--tw-bg-opacity))}.bg-warmGray-700{--tw-bg-opacity:1;background-color:rgba(68,64,60,var(--tw-bg-opacity))}.bg-warmGray-800{--tw-bg-opacity:1;background-color:rgba(41,37,36,var(--tw-bg-opacity))}.bg-warmGray-900{--tw-bg-opacity:1;background-color:rgba(28,25,23,var(--tw-bg-opacity))}.bg-trueGray-50{--tw-bg-opacity:1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.bg-trueGray-100{--tw-bg-opacity:1;background-color:rgba(245,245,245,var(--tw-bg-opacity))}.bg-trueGray-200{--tw-bg-opacity:1;background-color:rgba(229,229,229,var(--tw-bg-opacity))}.bg-trueGray-300{--tw-bg-opacity:1;background-color:rgba(212,212,212,var(--tw-bg-opacity))}.bg-trueGray-400{--tw-bg-opacity:1;background-color:rgba(163,163,163,var(--tw-bg-opacity))}.bg-trueGray-500{--tw-bg-opacity:1;background-color:rgba(115,115,115,var(--tw-bg-opacity))}.bg-trueGray-600{--tw-bg-opacity:1;background-color:rgba(82,82,82,var(--tw-bg-opacity))}.bg-trueGray-700{--tw-bg-opacity:1;background-color:rgba(64,64,64,var(--tw-bg-opacity))}.bg-trueGray-800{--tw-bg-opacity:1;background-color:rgba(38,38,38,var(--tw-bg-opacity))}.bg-trueGray-900{--tw-bg-opacity:1;background-color:rgba(23,23,23,var(--tw-bg-opacity))}.bg-rose-50{--tw-bg-opacity:1;background-color:rgba(255,241,242,var(--tw-bg-opacity))}.bg-rose-100{--tw-bg-opacity:1;background-color:rgba(255,228,230,var(--tw-bg-opacity))}.bg-rose-200{--tw-bg-opacity:1;background-color:rgba(254,205,211,var(--tw-bg-opacity))}.bg-rose-300{--tw-bg-opacity:1;background-color:rgba(253,164,175,var(--tw-bg-opacity))}.bg-rose-400{--tw-bg-opacity:1;background-color:rgba(251,113,133,var(--tw-bg-opacity))}.bg-rose-500{--tw-bg-opacity:1;background-color:rgba(244,63,94,var(--tw-bg-opacity))}.bg-rose-600{--tw-bg-opacity:1;background-color:rgba(225,29,72,var(--tw-bg-opacity))}.bg-rose-700{--tw-bg-opacity:1;background-color:rgba(190,18,60,var(--tw-bg-opacity))}.bg-rose-800{--tw-bg-opacity:1;background-color:rgba(159,18,57,var(--tw-bg-opacity))}.bg-rose-900{--tw-bg-opacity:1;background-color:rgba(136,19,55,var(--tw-bg-opacity))}.bg-fuchsia-50{--tw-bg-opacity:1;background-color:rgba(253,244,255,var(--tw-bg-opacity))}.bg-fuchsia-100{--tw-bg-opacity:1;background-color:rgba(250,232,255,var(--tw-bg-opacity))}.bg-fuchsia-200{--tw-bg-opacity:1;background-color:rgba(245,208,254,var(--tw-bg-opacity))}.bg-fuchsia-300{--tw-bg-opacity:1;background-color:rgba(240,171,252,var(--tw-bg-opacity))}.bg-fuchsia-400{--tw-bg-opacity:1;background-color:rgba(232,121,249,var(--tw-bg-opacity))}.bg-fuchsia-500{--tw-bg-opacity:1;background-color:rgba(217,70,239,var(--tw-bg-opacity))}.bg-fuchsia-600{--tw-bg-opacity:1;background-color:rgba(192,38,211,var(--tw-bg-opacity))}.bg-fuchsia-700{--tw-bg-opacity:1;background-color:rgba(162,28,175,var(--tw-bg-opacity))}.bg-fuchsia-800{--tw-bg-opacity:1;background-color:rgba(134,25,143,var(--tw-bg-opacity))}.bg-fuchsia-900{--tw-bg-opacity:1;background-color:rgba(112,26,117,var(--tw-bg-opacity))}.bg-violet-50{--tw-bg-opacity:1;background-color:rgba(245,243,255,var(--tw-bg-opacity))}.bg-violet-100{--tw-bg-opacity:1;background-color:rgba(237,233,254,var(--tw-bg-opacity))}.bg-violet-200{--tw-bg-opacity:1;background-color:rgba(221,214,254,var(--tw-bg-opacity))}.bg-violet-300{--tw-bg-opacity:1;background-color:rgba(196,181,253,var(--tw-bg-opacity))}.bg-violet-400{--tw-bg-opacity:1;background-color:rgba(167,139,250,var(--tw-bg-opacity))}.bg-violet-500{--tw-bg-opacity:1;background-color:rgba(139,92,246,var(--tw-bg-opacity))}.bg-violet-600{--tw-bg-opacity:1;background-color:rgba(124,58,237,var(--tw-bg-opacity))}.bg-violet-700{--tw-bg-opacity:1;background-color:rgba(109,40,217,var(--tw-bg-opacity))}.bg-violet-800{--tw-bg-opacity:1;background-color:rgba(91,33,182,var(--tw-bg-opacity))}.bg-violet-900{--tw-bg-opacity:1;background-color:rgba(76,29,149,var(--tw-bg-opacity))}.bg-lightBlue-50{--tw-bg-opacity:1;background-color:rgba(240,249,255,var(--tw-bg-opacity))}.bg-lightBlue-100{--tw-bg-opacity:1;background-color:rgba(224,242,254,var(--tw-bg-opacity))}.bg-lightBlue-200{--tw-bg-opacity:1;background-color:rgba(186,230,253,var(--tw-bg-opacity))}.bg-lightBlue-300{--tw-bg-opacity:1;background-color:rgba(125,211,252,var(--tw-bg-opacity))}.bg-lightBlue-400{--tw-bg-opacity:1;background-color:rgba(56,189,248,var(--tw-bg-opacity))}.bg-lightBlue-500{--tw-bg-opacity:1;background-color:rgba(14,165,233,var(--tw-bg-opacity))}.bg-lightBlue-600{--tw-bg-opacity:1;background-color:rgba(2,132,199,var(--tw-bg-opacity))}.bg-lightBlue-700{--tw-bg-opacity:1;background-color:rgba(3,105,161,var(--tw-bg-opacity))}.bg-lightBlue-800{--tw-bg-opacity:1;background-color:rgba(7,89,133,var(--tw-bg-opacity))}.bg-lightBlue-900{--tw-bg-opacity:1;background-color:rgba(12,74,110,var(--tw-bg-opacity))}.bg-cyan-50{--tw-bg-opacity:1;background-color:rgba(236,254,255,var(--tw-bg-opacity))}.bg-cyan-100{--tw-bg-opacity:1;background-color:rgba(207,250,254,var(--tw-bg-opacity))}.bg-cyan-200{--tw-bg-opacity:1;background-color:rgba(165,243,252,var(--tw-bg-opacity))}.bg-cyan-300{--tw-bg-opacity:1;background-color:rgba(103,232,249,var(--tw-bg-opacity))}.bg-cyan-400{--tw-bg-opacity:1;background-color:rgba(34,211,238,var(--tw-bg-opacity))}.bg-cyan-500{--tw-bg-opacity:1;background-color:rgba(6,182,212,var(--tw-bg-opacity))}.bg-cyan-600{--tw-bg-opacity:1;background-color:rgba(8,145,178,var(--tw-bg-opacity))}.bg-cyan-700{--tw-bg-opacity:1;background-color:rgba(14,116,144,var(--tw-bg-opacity))}.bg-cyan-800{--tw-bg-opacity:1;background-color:rgba(21,94,117,var(--tw-bg-opacity))}.bg-cyan-900{--tw-bg-opacity:1;background-color:rgba(22,78,99,var(--tw-bg-opacity))}.bg-teal-50{--tw-bg-opacity:1;background-color:rgba(240,253,250,var(--tw-bg-opacity))}.bg-teal-100{--tw-bg-opacity:1;background-color:rgba(204,251,241,var(--tw-bg-opacity))}.bg-teal-200{--tw-bg-opacity:1;background-color:rgba(153,246,228,var(--tw-bg-opacity))}.bg-teal-300{--tw-bg-opacity:1;background-color:rgba(94,234,212,var(--tw-bg-opacity))}.bg-teal-400{--tw-bg-opacity:1;background-color:rgba(45,212,191,var(--tw-bg-opacity))}.bg-teal-500{--tw-bg-opacity:1;background-color:rgba(20,184,166,var(--tw-bg-opacity))}.bg-teal-600{--tw-bg-opacity:1;background-color:rgba(13,148,136,var(--tw-bg-opacity))}.bg-teal-700{--tw-bg-opacity:1;background-color:rgba(15,118,110,var(--tw-bg-opacity))}.bg-teal-800{--tw-bg-opacity:1;background-color:rgba(17,94,89,var(--tw-bg-opacity))}.bg-teal-900{--tw-bg-opacity:1;background-color:rgba(19,78,74,var(--tw-bg-opacity))}.bg-emerald-50{--tw-bg-opacity:1;background-color:rgba(236,253,245,var(--tw-bg-opacity))}.bg-emerald-100{--tw-bg-opacity:1;background-color:rgba(209,250,229,var(--tw-bg-opacity))}.bg-emerald-200{--tw-bg-opacity:1;background-color:rgba(167,243,208,var(--tw-bg-opacity))}.bg-emerald-300{--tw-bg-opacity:1;background-color:rgba(110,231,183,var(--tw-bg-opacity))}.bg-emerald-400{--tw-bg-opacity:1;background-color:rgba(52,211,153,var(--tw-bg-opacity))}.bg-emerald-500{--tw-bg-opacity:1;background-color:rgba(16,185,129,var(--tw-bg-opacity))}.bg-emerald-600{--tw-bg-opacity:1;background-color:rgba(5,150,105,var(--tw-bg-opacity))}.bg-emerald-700{--tw-bg-opacity:1;background-color:rgba(4,120,87,var(--tw-bg-opacity))}.bg-emerald-800{--tw-bg-opacity:1;background-color:rgba(6,95,70,var(--tw-bg-opacity))}.bg-emerald-900{--tw-bg-opacity:1;background-color:rgba(6,78,59,var(--tw-bg-opacity))}.bg-lime-50{--tw-bg-opacity:1;background-color:rgba(247,254,231,var(--tw-bg-opacity))}.bg-lime-100{--tw-bg-opacity:1;background-color:rgba(236,252,203,var(--tw-bg-opacity))}.bg-lime-200{--tw-bg-opacity:1;background-color:rgba(217,249,157,var(--tw-bg-opacity))}.bg-lime-300{--tw-bg-opacity:1;background-color:rgba(190,242,100,var(--tw-bg-opacity))}.bg-lime-400{--tw-bg-opacity:1;background-color:rgba(163,230,53,var(--tw-bg-opacity))}.bg-lime-500{--tw-bg-opacity:1;background-color:rgba(132,204,22,var(--tw-bg-opacity))}.bg-lime-600{--tw-bg-opacity:1;background-color:rgba(101,163,13,var(--tw-bg-opacity))}.bg-lime-700{--tw-bg-opacity:1;background-color:rgba(77,124,15,var(--tw-bg-opacity))}.bg-lime-800{--tw-bg-opacity:1;background-color:rgba(63,98,18,var(--tw-bg-opacity))}.bg-lime-900{--tw-bg-opacity:1;background-color:rgba(54,83,20,var(--tw-bg-opacity))}.bg-coolGray-50{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.bg-coolGray-100{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.bg-coolGray-200{--tw-bg-opacity:1;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.bg-coolGray-300{--tw-bg-opacity:1;background-color:rgba(209,213,219,var(--tw-bg-opacity))}.bg-coolGray-400{--tw-bg-opacity:1;background-color:rgba(156,163,175,var(--tw-bg-opacity))}.bg-coolGray-500{--tw-bg-opacity:1;background-color:rgba(107,114,128,var(--tw-bg-opacity))}.bg-coolGray-600{--tw-bg-opacity:1;background-color:rgba(75,85,99,var(--tw-bg-opacity))}.bg-coolGray-700{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.bg-coolGray-800{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.bg-coolGray-900{--tw-bg-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.bg-blueGray-50{--tw-bg-opacity:1;background-color:rgba(248,250,252,var(--tw-bg-opacity))}.bg-blueGray-100{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.bg-blueGray-200{--tw-bg-opacity:1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}.bg-blueGray-300{--tw-bg-opacity:1;background-color:rgba(203,213,225,var(--tw-bg-opacity))}.bg-blueGray-400{--tw-bg-opacity:1;background-color:rgba(148,163,184,var(--tw-bg-opacity))}.bg-blueGray-500{--tw-bg-opacity:1;background-color:rgba(100,116,139,var(--tw-bg-opacity))}.bg-blueGray-600{--tw-bg-opacity:1;background-color:rgba(71,85,105,var(--tw-bg-opacity))}.bg-blueGray-700{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.bg-blueGray-800{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.bg-blueGray-900{--tw-bg-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.bg-none{background-image:none}.bg-gradient-to-t{background-image:linear-gradient(0deg,var(--tw-gradient-stops))}.bg-gradient-to-tr{background-image:linear-gradient(to top right,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(90deg,var(--tw-gradient-stops))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.bg-gradient-to-b{background-image:linear-gradient(180deg,var(--tw-gradient-stops))}.bg-gradient-to-bl{background-image:linear-gradient(to bottom left,var(--tw-gradient-stops))}.bg-gradient-to-l{background-image:linear-gradient(270deg,var(--tw-gradient-stops))}.bg-gradient-to-tl{background-image:linear-gradient(to top left,var(--tw-gradient-stops))}.from-green-400{--tw-gradient-from:#34d399;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(52,211,153,0))}.to-blue-500{--tw-gradient-to:#3b82f6}.bg-opacity-0{--tw-bg-opacity:0}.bg-opacity-5{--tw-bg-opacity:0.05}.bg-opacity-10{--tw-bg-opacity:0.1}.bg-opacity-20{--tw-bg-opacity:0.2}.bg-opacity-25{--tw-bg-opacity:0.25}.bg-opacity-30{--tw-bg-opacity:0.3}.bg-opacity-40{--tw-bg-opacity:0.4}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-opacity-60{--tw-bg-opacity:0.6}.bg-opacity-70{--tw-bg-opacity:0.7}.bg-opacity-75{--tw-bg-opacity:0.75}.bg-opacity-80{--tw-bg-opacity:0.8}.bg-opacity-90{--tw-bg-opacity:0.9}.bg-opacity-95{--tw-bg-opacity:0.95}.bg-opacity-100{--tw-bg-opacity:1}.bg-bottom{background-position:bottom}.bg-center{background-position:50%}.bg-left{background-position:0}.bg-left-bottom{background-position:0 100%}.bg-left-top{background-position:0 0}.bg-right{background-position:100%}.bg-right-bottom{background-position:100% 100%}.bg-right-top{background-position:100% 0}.bg-top{background-position:top}.bg-repeat{background-repeat:repeat}.bg-no-repeat{background-repeat:no-repeat}.bg-repeat-x{background-repeat:repeat-x}.bg-repeat-y{background-repeat:repeat-y}.bg-repeat-round{background-repeat:round}.bg-repeat-space{background-repeat:space}.bg-auto{background-size:auto}.bg-cover{background-size:cover}.bg-contain{background-size:contain}.border-collapse{border-collapse:collapse}.border-separate{border-collapse:separate}.border-transparent{border-color:transparent}.border-current{border-color:currentColor}.border-black{--tw-border-opacity:1;border-color:rgba(0,0,0,var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgba(255,255,255,var(--tw-border-opacity))}.border-gray-50{--tw-border-opacity:1;border-color:rgba(249,250,251,var(--tw-border-opacity))}.border-gray-100{--tw-border-opacity:1;border-color:rgba(243,244,246,var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgba(209,213,219,var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:rgba(156,163,175,var(--tw-border-opacity))}.border-gray-500{--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity))}.border-gray-600{--tw-border-opacity:1;border-color:rgba(75,85,99,var(--tw-border-opacity))}.border-gray-700{--tw-border-opacity:1;border-color:rgba(55,65,81,var(--tw-border-opacity))}.border-gray-800{--tw-border-opacity:1;border-color:rgba(31,41,55,var(--tw-border-opacity))}.border-gray-900{--tw-border-opacity:1;border-color:rgba(17,24,39,var(--tw-border-opacity))}.border-red-50{--tw-border-opacity:1;border-color:rgba(254,242,242,var(--tw-border-opacity))}.border-red-100{--tw-border-opacity:1;border-color:rgba(254,226,226,var(--tw-border-opacity))}.border-red-200{--tw-border-opacity:1;border-color:rgba(254,202,202,var(--tw-border-opacity))}.border-red-300{--tw-border-opacity:1;border-color:rgba(252,165,165,var(--tw-border-opacity))}.border-red-400{--tw-border-opacity:1;border-color:rgba(248,113,113,var(--tw-border-opacity))}.border-red-500{--tw-border-opacity:1;border-color:rgba(239,68,68,var(--tw-border-opacity))}.border-red-600{--tw-border-opacity:1;border-color:rgba(220,38,38,var(--tw-border-opacity))}.border-red-700{--tw-border-opacity:1;border-color:rgba(185,28,28,var(--tw-border-opacity))}.border-red-800{--tw-border-opacity:1;border-color:rgba(153,27,27,var(--tw-border-opacity))}.border-red-900{--tw-border-opacity:1;border-color:rgba(127,29,29,var(--tw-border-opacity))}.border-yellow-50{--tw-border-opacity:1;border-color:rgba(255,251,235,var(--tw-border-opacity))}.border-yellow-100{--tw-border-opacity:1;border-color:rgba(254,243,199,var(--tw-border-opacity))}.border-yellow-200{--tw-border-opacity:1;border-color:rgba(253,230,138,var(--tw-border-opacity))}.border-yellow-300{--tw-border-opacity:1;border-color:rgba(252,211,77,var(--tw-border-opacity))}.border-yellow-400{--tw-border-opacity:1;border-color:rgba(251,191,36,var(--tw-border-opacity))}.border-yellow-500{--tw-border-opacity:1;border-color:rgba(245,158,11,var(--tw-border-opacity))}.border-yellow-600{--tw-border-opacity:1;border-color:rgba(217,119,6,var(--tw-border-opacity))}.border-yellow-700{--tw-border-opacity:1;border-color:rgba(180,83,9,var(--tw-border-opacity))}.border-yellow-800{--tw-border-opacity:1;border-color:rgba(146,64,14,var(--tw-border-opacity))}.border-yellow-900{--tw-border-opacity:1;border-color:rgba(120,53,15,var(--tw-border-opacity))}.border-green-50{--tw-border-opacity:1;border-color:rgba(236,253,245,var(--tw-border-opacity))}.border-green-100{--tw-border-opacity:1;border-color:rgba(209,250,229,var(--tw-border-opacity))}.border-green-200{--tw-border-opacity:1;border-color:rgba(167,243,208,var(--tw-border-opacity))}.border-green-300{--tw-border-opacity:1;border-color:rgba(110,231,183,var(--tw-border-opacity))}.border-green-400{--tw-border-opacity:1;border-color:rgba(52,211,153,var(--tw-border-opacity))}.border-green-500{--tw-border-opacity:1;border-color:rgba(16,185,129,var(--tw-border-opacity))}.border-green-600{--tw-border-opacity:1;border-color:rgba(5,150,105,var(--tw-border-opacity))}.border-green-700{--tw-border-opacity:1;border-color:rgba(4,120,87,var(--tw-border-opacity))}.border-green-800{--tw-border-opacity:1;border-color:rgba(6,95,70,var(--tw-border-opacity))}.border-green-900{--tw-border-opacity:1;border-color:rgba(6,78,59,var(--tw-border-opacity))}.border-blue-50{--tw-border-opacity:1;border-color:rgba(239,246,255,var(--tw-border-opacity))}.border-blue-100{--tw-border-opacity:1;border-color:rgba(219,234,254,var(--tw-border-opacity))}.border-blue-200{--tw-border-opacity:1;border-color:rgba(191,219,254,var(--tw-border-opacity))}.border-blue-300{--tw-border-opacity:1;border-color:rgba(147,197,253,var(--tw-border-opacity))}.border-blue-400{--tw-border-opacity:1;border-color:rgba(96,165,250,var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity:1;border-color:rgba(59,130,246,var(--tw-border-opacity))}.border-blue-600{--tw-border-opacity:1;border-color:rgba(37,99,235,var(--tw-border-opacity))}.border-blue-700{--tw-border-opacity:1;border-color:rgba(29,78,216,var(--tw-border-opacity))}.border-blue-800{--tw-border-opacity:1;border-color:rgba(30,64,175,var(--tw-border-opacity))}.border-blue-900{--tw-border-opacity:1;border-color:rgba(30,58,138,var(--tw-border-opacity))}.border-indigo-50{--tw-border-opacity:1;border-color:rgba(238,242,255,var(--tw-border-opacity))}.border-indigo-100{--tw-border-opacity:1;border-color:rgba(224,231,255,var(--tw-border-opacity))}.border-indigo-200{--tw-border-opacity:1;border-color:rgba(199,210,254,var(--tw-border-opacity))}.border-indigo-300{--tw-border-opacity:1;border-color:rgba(165,180,252,var(--tw-border-opacity))}.border-indigo-400{--tw-border-opacity:1;border-color:rgba(129,140,248,var(--tw-border-opacity))}.border-indigo-500{--tw-border-opacity:1;border-color:rgba(99,102,241,var(--tw-border-opacity))}.border-indigo-600{--tw-border-opacity:1;border-color:rgba(79,70,229,var(--tw-border-opacity))}.border-indigo-700{--tw-border-opacity:1;border-color:rgba(67,56,202,var(--tw-border-opacity))}.border-indigo-800{--tw-border-opacity:1;border-color:rgba(55,48,163,var(--tw-border-opacity))}.border-indigo-900{--tw-border-opacity:1;border-color:rgba(49,46,129,var(--tw-border-opacity))}.border-purple-50{--tw-border-opacity:1;border-color:rgba(245,243,255,var(--tw-border-opacity))}.border-purple-100{--tw-border-opacity:1;border-color:rgba(237,233,254,var(--tw-border-opacity))}.border-purple-200{--tw-border-opacity:1;border-color:rgba(221,214,254,var(--tw-border-opacity))}.border-purple-300{--tw-border-opacity:1;border-color:rgba(196,181,253,var(--tw-border-opacity))}.border-purple-400{--tw-border-opacity:1;border-color:rgba(167,139,250,var(--tw-border-opacity))}.border-purple-500{--tw-border-opacity:1;border-color:rgba(139,92,246,var(--tw-border-opacity))}.border-purple-600{--tw-border-opacity:1;border-color:rgba(124,58,237,var(--tw-border-opacity))}.border-purple-700{--tw-border-opacity:1;border-color:rgba(109,40,217,var(--tw-border-opacity))}.border-purple-800{--tw-border-opacity:1;border-color:rgba(91,33,182,var(--tw-border-opacity))}.border-purple-900{--tw-border-opacity:1;border-color:rgba(76,29,149,var(--tw-border-opacity))}.border-pink-50{--tw-border-opacity:1;border-color:rgba(253,242,248,var(--tw-border-opacity))}.border-pink-100{--tw-border-opacity:1;border-color:rgba(252,231,243,var(--tw-border-opacity))}.border-pink-200{--tw-border-opacity:1;border-color:rgba(251,207,232,var(--tw-border-opacity))}.border-pink-300{--tw-border-opacity:1;border-color:rgba(249,168,212,var(--tw-border-opacity))}.border-pink-400{--tw-border-opacity:1;border-color:rgba(244,114,182,var(--tw-border-opacity))}.border-pink-500{--tw-border-opacity:1;border-color:rgba(236,72,153,var(--tw-border-opacity))}.border-pink-600{--tw-border-opacity:1;border-color:rgba(219,39,119,var(--tw-border-opacity))}.border-pink-700{--tw-border-opacity:1;border-color:rgba(190,24,93,var(--tw-border-opacity))}.border-pink-800{--tw-border-opacity:1;border-color:rgba(157,23,77,var(--tw-border-opacity))}.border-pink-900{--tw-border-opacity:1;border-color:rgba(131,24,67,var(--tw-border-opacity))}.border-amber-50{--tw-border-opacity:1;border-color:rgba(255,251,235,var(--tw-border-opacity))}.border-amber-100{--tw-border-opacity:1;border-color:rgba(254,243,199,var(--tw-border-opacity))}.border-amber-200{--tw-border-opacity:1;border-color:rgba(253,230,138,var(--tw-border-opacity))}.border-amber-300{--tw-border-opacity:1;border-color:rgba(252,211,77,var(--tw-border-opacity))}.border-amber-400{--tw-border-opacity:1;border-color:rgba(251,191,36,var(--tw-border-opacity))}.border-amber-500{--tw-border-opacity:1;border-color:rgba(245,158,11,var(--tw-border-opacity))}.border-amber-600{--tw-border-opacity:1;border-color:rgba(217,119,6,var(--tw-border-opacity))}.border-amber-700{--tw-border-opacity:1;border-color:rgba(180,83,9,var(--tw-border-opacity))}.border-amber-800{--tw-border-opacity:1;border-color:rgba(146,64,14,var(--tw-border-opacity))}.border-amber-900{--tw-border-opacity:1;border-color:rgba(120,53,15,var(--tw-border-opacity))}.border-orange-50{--tw-border-opacity:1;border-color:rgba(255,247,237,var(--tw-border-opacity))}.border-orange-100{--tw-border-opacity:1;border-color:rgba(255,237,213,var(--tw-border-opacity))}.border-orange-200{--tw-border-opacity:1;border-color:rgba(254,215,170,var(--tw-border-opacity))}.border-orange-300{--tw-border-opacity:1;border-color:rgba(253,186,116,var(--tw-border-opacity))}.border-orange-400{--tw-border-opacity:1;border-color:rgba(251,146,60,var(--tw-border-opacity))}.border-orange-500{--tw-border-opacity:1;border-color:rgba(249,115,22,var(--tw-border-opacity))}.border-orange-600{--tw-border-opacity:1;border-color:rgba(234,88,12,var(--tw-border-opacity))}.border-orange-700{--tw-border-opacity:1;border-color:rgba(194,65,12,var(--tw-border-opacity))}.border-orange-800{--tw-border-opacity:1;border-color:rgba(154,52,18,var(--tw-border-opacity))}.border-orange-900{--tw-border-opacity:1;border-color:rgba(124,45,18,var(--tw-border-opacity))}.border-warmGray-50{--tw-border-opacity:1;border-color:rgba(250,250,249,var(--tw-border-opacity))}.border-warmGray-100{--tw-border-opacity:1;border-color:rgba(245,245,244,var(--tw-border-opacity))}.border-warmGray-200{--tw-border-opacity:1;border-color:rgba(231,229,228,var(--tw-border-opacity))}.border-warmGray-300{--tw-border-opacity:1;border-color:rgba(214,211,209,var(--tw-border-opacity))}.border-warmGray-400{--tw-border-opacity:1;border-color:rgba(168,162,158,var(--tw-border-opacity))}.border-warmGray-500{--tw-border-opacity:1;border-color:rgba(120,113,108,var(--tw-border-opacity))}.border-warmGray-600{--tw-border-opacity:1;border-color:rgba(87,83,78,var(--tw-border-opacity))}.border-warmGray-700{--tw-border-opacity:1;border-color:rgba(68,64,60,var(--tw-border-opacity))}.border-warmGray-800{--tw-border-opacity:1;border-color:rgba(41,37,36,var(--tw-border-opacity))}.border-warmGray-900{--tw-border-opacity:1;border-color:rgba(28,25,23,var(--tw-border-opacity))}.border-trueGray-50{--tw-border-opacity:1;border-color:rgba(250,250,250,var(--tw-border-opacity))}.border-trueGray-100{--tw-border-opacity:1;border-color:rgba(245,245,245,var(--tw-border-opacity))}.border-trueGray-200{--tw-border-opacity:1;border-color:rgba(229,229,229,var(--tw-border-opacity))}.border-trueGray-300{--tw-border-opacity:1;border-color:rgba(212,212,212,var(--tw-border-opacity))}.border-trueGray-400{--tw-border-opacity:1;border-color:rgba(163,163,163,var(--tw-border-opacity))}.border-trueGray-500{--tw-border-opacity:1;border-color:rgba(115,115,115,var(--tw-border-opacity))}.border-trueGray-600{--tw-border-opacity:1;border-color:rgba(82,82,82,var(--tw-border-opacity))}.border-trueGray-700{--tw-border-opacity:1;border-color:rgba(64,64,64,var(--tw-border-opacity))}.border-trueGray-800{--tw-border-opacity:1;border-color:rgba(38,38,38,var(--tw-border-opacity))}.border-trueGray-900{--tw-border-opacity:1;border-color:rgba(23,23,23,var(--tw-border-opacity))}.border-rose-50{--tw-border-opacity:1;border-color:rgba(255,241,242,var(--tw-border-opacity))}.border-rose-100{--tw-border-opacity:1;border-color:rgba(255,228,230,var(--tw-border-opacity))}.border-rose-200{--tw-border-opacity:1;border-color:rgba(254,205,211,var(--tw-border-opacity))}.border-rose-300{--tw-border-opacity:1;border-color:rgba(253,164,175,var(--tw-border-opacity))}.border-rose-400{--tw-border-opacity:1;border-color:rgba(251,113,133,var(--tw-border-opacity))}.border-rose-500{--tw-border-opacity:1;border-color:rgba(244,63,94,var(--tw-border-opacity))}.border-rose-600{--tw-border-opacity:1;border-color:rgba(225,29,72,var(--tw-border-opacity))}.border-rose-700{--tw-border-opacity:1;border-color:rgba(190,18,60,var(--tw-border-opacity))}.border-rose-800{--tw-border-opacity:1;border-color:rgba(159,18,57,var(--tw-border-opacity))}.border-rose-900{--tw-border-opacity:1;border-color:rgba(136,19,55,var(--tw-border-opacity))}.border-fuchsia-50{--tw-border-opacity:1;border-color:rgba(253,244,255,var(--tw-border-opacity))}.border-fuchsia-100{--tw-border-opacity:1;border-color:rgba(250,232,255,var(--tw-border-opacity))}.border-fuchsia-200{--tw-border-opacity:1;border-color:rgba(245,208,254,var(--tw-border-opacity))}.border-fuchsia-300{--tw-border-opacity:1;border-color:rgba(240,171,252,var(--tw-border-opacity))}.border-fuchsia-400{--tw-border-opacity:1;border-color:rgba(232,121,249,var(--tw-border-opacity))}.border-fuchsia-500{--tw-border-opacity:1;border-color:rgba(217,70,239,var(--tw-border-opacity))}.border-fuchsia-600{--tw-border-opacity:1;border-color:rgba(192,38,211,var(--tw-border-opacity))}.border-fuchsia-700{--tw-border-opacity:1;border-color:rgba(162,28,175,var(--tw-border-opacity))}.border-fuchsia-800{--tw-border-opacity:1;border-color:rgba(134,25,143,var(--tw-border-opacity))}.border-fuchsia-900{--tw-border-opacity:1;border-color:rgba(112,26,117,var(--tw-border-opacity))}.border-violet-50{--tw-border-opacity:1;border-color:rgba(245,243,255,var(--tw-border-opacity))}.border-violet-100{--tw-border-opacity:1;border-color:rgba(237,233,254,var(--tw-border-opacity))}.border-violet-200{--tw-border-opacity:1;border-color:rgba(221,214,254,var(--tw-border-opacity))}.border-violet-300{--tw-border-opacity:1;border-color:rgba(196,181,253,var(--tw-border-opacity))}.border-violet-400{--tw-border-opacity:1;border-color:rgba(167,139,250,var(--tw-border-opacity))}.border-violet-500{--tw-border-opacity:1;border-color:rgba(139,92,246,var(--tw-border-opacity))}.border-violet-600{--tw-border-opacity:1;border-color:rgba(124,58,237,var(--tw-border-opacity))}.border-violet-700{--tw-border-opacity:1;border-color:rgba(109,40,217,var(--tw-border-opacity))}.border-violet-800{--tw-border-opacity:1;border-color:rgba(91,33,182,var(--tw-border-opacity))}.border-violet-900{--tw-border-opacity:1;border-color:rgba(76,29,149,var(--tw-border-opacity))}.border-lightBlue-50{--tw-border-opacity:1;border-color:rgba(240,249,255,var(--tw-border-opacity))}.border-lightBlue-100{--tw-border-opacity:1;border-color:rgba(224,242,254,var(--tw-border-opacity))}.border-lightBlue-200{--tw-border-opacity:1;border-color:rgba(186,230,253,var(--tw-border-opacity))}.border-lightBlue-300{--tw-border-opacity:1;border-color:rgba(125,211,252,var(--tw-border-opacity))}.border-lightBlue-400{--tw-border-opacity:1;border-color:rgba(56,189,248,var(--tw-border-opacity))}.border-lightBlue-500{--tw-border-opacity:1;border-color:rgba(14,165,233,var(--tw-border-opacity))}.border-lightBlue-600{--tw-border-opacity:1;border-color:rgba(2,132,199,var(--tw-border-opacity))}.border-lightBlue-700{--tw-border-opacity:1;border-color:rgba(3,105,161,var(--tw-border-opacity))}.border-lightBlue-800{--tw-border-opacity:1;border-color:rgba(7,89,133,var(--tw-border-opacity))}.border-lightBlue-900{--tw-border-opacity:1;border-color:rgba(12,74,110,var(--tw-border-opacity))}.border-cyan-50{--tw-border-opacity:1;border-color:rgba(236,254,255,var(--tw-border-opacity))}.border-cyan-100{--tw-border-opacity:1;border-color:rgba(207,250,254,var(--tw-border-opacity))}.border-cyan-200{--tw-border-opacity:1;border-color:rgba(165,243,252,var(--tw-border-opacity))}.border-cyan-300{--tw-border-opacity:1;border-color:rgba(103,232,249,var(--tw-border-opacity))}.border-cyan-400{--tw-border-opacity:1;border-color:rgba(34,211,238,var(--tw-border-opacity))}.border-cyan-500{--tw-border-opacity:1;border-color:rgba(6,182,212,var(--tw-border-opacity))}.border-cyan-600{--tw-border-opacity:1;border-color:rgba(8,145,178,var(--tw-border-opacity))}.border-cyan-700{--tw-border-opacity:1;border-color:rgba(14,116,144,var(--tw-border-opacity))}.border-cyan-800{--tw-border-opacity:1;border-color:rgba(21,94,117,var(--tw-border-opacity))}.border-cyan-900{--tw-border-opacity:1;border-color:rgba(22,78,99,var(--tw-border-opacity))}.border-teal-50{--tw-border-opacity:1;border-color:rgba(240,253,250,var(--tw-border-opacity))}.border-teal-100{--tw-border-opacity:1;border-color:rgba(204,251,241,var(--tw-border-opacity))}.border-teal-200{--tw-border-opacity:1;border-color:rgba(153,246,228,var(--tw-border-opacity))}.border-teal-300{--tw-border-opacity:1;border-color:rgba(94,234,212,var(--tw-border-opacity))}.border-teal-400{--tw-border-opacity:1;border-color:rgba(45,212,191,var(--tw-border-opacity))}.border-teal-500{--tw-border-opacity:1;border-color:rgba(20,184,166,var(--tw-border-opacity))}.border-teal-600{--tw-border-opacity:1;border-color:rgba(13,148,136,var(--tw-border-opacity))}.border-teal-700{--tw-border-opacity:1;border-color:rgba(15,118,110,var(--tw-border-opacity))}.border-teal-800{--tw-border-opacity:1;border-color:rgba(17,94,89,var(--tw-border-opacity))}.border-teal-900{--tw-border-opacity:1;border-color:rgba(19,78,74,var(--tw-border-opacity))}.border-emerald-50{--tw-border-opacity:1;border-color:rgba(236,253,245,var(--tw-border-opacity))}.border-emerald-100{--tw-border-opacity:1;border-color:rgba(209,250,229,var(--tw-border-opacity))}.border-emerald-200{--tw-border-opacity:1;border-color:rgba(167,243,208,var(--tw-border-opacity))}.border-emerald-300{--tw-border-opacity:1;border-color:rgba(110,231,183,var(--tw-border-opacity))}.border-emerald-400{--tw-border-opacity:1;border-color:rgba(52,211,153,var(--tw-border-opacity))}.border-emerald-500{--tw-border-opacity:1;border-color:rgba(16,185,129,var(--tw-border-opacity))}.border-emerald-600{--tw-border-opacity:1;border-color:rgba(5,150,105,var(--tw-border-opacity))}.border-emerald-700{--tw-border-opacity:1;border-color:rgba(4,120,87,var(--tw-border-opacity))}.border-emerald-800{--tw-border-opacity:1;border-color:rgba(6,95,70,var(--tw-border-opacity))}.border-emerald-900{--tw-border-opacity:1;border-color:rgba(6,78,59,var(--tw-border-opacity))}.border-lime-50{--tw-border-opacity:1;border-color:rgba(247,254,231,var(--tw-border-opacity))}.border-lime-100{--tw-border-opacity:1;border-color:rgba(236,252,203,var(--tw-border-opacity))}.border-lime-200{--tw-border-opacity:1;border-color:rgba(217,249,157,var(--tw-border-opacity))}.border-lime-300{--tw-border-opacity:1;border-color:rgba(190,242,100,var(--tw-border-opacity))}.border-lime-400{--tw-border-opacity:1;border-color:rgba(163,230,53,var(--tw-border-opacity))}.border-lime-500{--tw-border-opacity:1;border-color:rgba(132,204,22,var(--tw-border-opacity))}.border-lime-600{--tw-border-opacity:1;border-color:rgba(101,163,13,var(--tw-border-opacity))}.border-lime-700{--tw-border-opacity:1;border-color:rgba(77,124,15,var(--tw-border-opacity))}.border-lime-800{--tw-border-opacity:1;border-color:rgba(63,98,18,var(--tw-border-opacity))}.border-lime-900{--tw-border-opacity:1;border-color:rgba(54,83,20,var(--tw-border-opacity))}.border-coolGray-50{--tw-border-opacity:1;border-color:rgba(249,250,251,var(--tw-border-opacity))}.border-coolGray-100{--tw-border-opacity:1;border-color:rgba(243,244,246,var(--tw-border-opacity))}.border-coolGray-200{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.border-coolGray-300{--tw-border-opacity:1;border-color:rgba(209,213,219,var(--tw-border-opacity))}.border-coolGray-400{--tw-border-opacity:1;border-color:rgba(156,163,175,var(--tw-border-opacity))}.border-coolGray-500{--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity))}.border-coolGray-600{--tw-border-opacity:1;border-color:rgba(75,85,99,var(--tw-border-opacity))}.border-coolGray-700{--tw-border-opacity:1;border-color:rgba(55,65,81,var(--tw-border-opacity))}.border-coolGray-800{--tw-border-opacity:1;border-color:rgba(31,41,55,var(--tw-border-opacity))}.border-coolGray-900{--tw-border-opacity:1;border-color:rgba(17,24,39,var(--tw-border-opacity))}.border-blueGray-50{--tw-border-opacity:1;border-color:rgba(248,250,252,var(--tw-border-opacity))}.border-blueGray-100{--tw-border-opacity:1;border-color:rgba(241,245,249,var(--tw-border-opacity))}.border-blueGray-200{--tw-border-opacity:1;border-color:rgba(226,232,240,var(--tw-border-opacity))}.border-blueGray-300{--tw-border-opacity:1;border-color:rgba(203,213,225,var(--tw-border-opacity))}.border-blueGray-400{--tw-border-opacity:1;border-color:rgba(148,163,184,var(--tw-border-opacity))}.border-blueGray-500{--tw-border-opacity:1;border-color:rgba(100,116,139,var(--tw-border-opacity))}.border-blueGray-600{--tw-border-opacity:1;border-color:rgba(71,85,105,var(--tw-border-opacity))}.border-blueGray-700{--tw-border-opacity:1;border-color:rgba(51,65,85,var(--tw-border-opacity))}.border-blueGray-800{--tw-border-opacity:1;border-color:rgba(30,41,59,var(--tw-border-opacity))}.border-blueGray-900{--tw-border-opacity:1;border-color:rgba(15,23,42,var(--tw-border-opacity))}.border-opacity-0{--tw-border-opacity:0}.border-opacity-5{--tw-border-opacity:0.05}.border-opacity-10{--tw-border-opacity:0.1}.border-opacity-20{--tw-border-opacity:0.2}.border-opacity-25{--tw-border-opacity:0.25}.border-opacity-30{--tw-border-opacity:0.3}.border-opacity-40{--tw-border-opacity:0.4}.border-opacity-50{--tw-border-opacity:0.5}.border-opacity-60{--tw-border-opacity:0.6}.border-opacity-70{--tw-border-opacity:0.7}.border-opacity-75{--tw-border-opacity:0.75}.border-opacity-80{--tw-border-opacity:0.8}.border-opacity-90{--tw-border-opacity:0.9}.border-opacity-95{--tw-border-opacity:0.95}.border-opacity-100{--tw-border-opacity:1}.rounded-lg{border-radius:.5rem}.border-solid{border-style:solid}.border-dashed{border-style:dashed}.border-dotted{border-style:dotted}.border-double{border-style:double}.border-none{border-style:none}.border-0{border-width:0}.border-2{border-width:2px}.border-4{border-width:4px}.border-8{border-width:8px}.border-t-0{border-top-width:0}.border-r-0{border-right-width:0}.border-b-0{border-bottom-width:0}.border-l-0{border-left-width:0}.border-t-2{border-top-width:2px}.border-r-2{border-right-width:2px}.border-b-2{border-bottom-width:2px}.border-l-2{border-left-width:2px}.border-t-4{border-top-width:4px}.border-r-4{border-right-width:4px}.border-b-4{border-bottom-width:4px}.border-l-4{border-left-width:4px}.border-t-8{border-top-width:8px}.border-r-8{border-right-width:8px}.border-b-8{border-bottom-width:8px}.border-l-8{border-left-width:8px}.border-t{border-top-width:1px}.border-r{border-right-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.hover\\:border-4:hover{border-width:4px}.cursor-pointer{cursor:pointer}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.h-6{height:1.5rem}.h-20{height:5rem}.mx-auto{margin-left:auto;margin-right:auto}.max-w-md{max-width:28rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}*{--tw-shadow:0 0 transparent}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}.hover\\:shadow-xl:hover,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.w-6{width:1.5rem}.w-auto{width:auto}.gap-4{gap:1rem}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.hover\\:transform:hover,.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05}.hover\\:-rotate-6:hover{--tw-rotate:-6deg}.-skew-y-6{--tw-skew-y:-6deg}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition{transition-duration:.15s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:rounded-xl{border-radius:.75rem}.sm\\:rounded-3xl{border-radius:1.5rem}.sm\\:h-20{height:5rem}.sm\\:max-w-xl{max-width:36rem}.sm\\:p-20{padding:5rem}.sm\\:w-20{width:5rem}.sm\\:-rotate-6{--tw-rotate:-6deg}.sm\\:skew-y-0{--tw-skew-y:0deg}}";
styleInject(css_248z,{"insertAt":"top"});

module.exports = Rainbow;
