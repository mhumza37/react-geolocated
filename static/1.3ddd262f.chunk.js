webpackJsonp([1],{588:function(e,o,t){var r=t(6),n=t(32),s=t(210).PageRenderer;s.__esModule&&(s=s.default);var i=n({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(590)}},componentWillMount:function(){},render:function(){return r.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},590:function(e,o){e.exports="[![build status](https://secure.travis-ci.org/no23reason/react-geolocated.svg)](http://travis-ci.org/no23reason/react-geolocated) [![codecov](https://codecov.io/gh/no23reason/react-geolocated/branch/master/graph/badge.svg)](https://codecov.io/gh/no23reason/react-geolocated) [![npm version](https://img.shields.io/npm/v/react-geolocated.svg)](https://www.npmjs.com/package/react-geolocated) [![bitHound Score](https://www.bithound.io/github/no23reason/react-geolocated/badges/score.svg)](https://www.bithound.io/github/no23reason/react-geolocated) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/no23reason/react-geolocated.svg)](https://greenkeeper.io/)\r\n# react-geolocated - React.js Higher-Order Component for using [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)\r\n\r\n## Demo\r\nBasic demo can be found at the [demo page](https://no23reason.github.io/react-geolocated/#/demo).\r\n\r\n## Basic Usage\r\n\r\nInstall using `npm`:\r\n```js\r\nnpm install react-geolocated --save\r\n```\r\n\r\nThen use in your application like this:\r\n\r\n```js\r\nimport React from 'react';\r\nimport {geolocated} from 'react-geolocated';\r\n\r\nclass Demo extends React.Component {\r\n  render() {\r\n    return !this.props.isGeolocationAvailable\r\n      ? <div>Your browser does not support Geolocation</div>\r\n      : !this.props.isGeolocationEnabled\r\n        ? <div>Geolocation is not enabled</div>\r\n        : this.props.coords\r\n          ? <table>\r\n            <tbody>\r\n              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>\r\n              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>\r\n              <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>\r\n              <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>\r\n              <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>\r\n            </tbody>\r\n          </table>\r\n          : <div>Getting the location data&hellip; </div>;\r\n  }\r\n}\r\n\r\nexport default geolocated({\r\n  positionOptions: {\r\n    enableHighAccuracy: false,\r\n  },\r\n  userDecisionTimeout: 5000,\r\n})(Demo);\r\n```\r\n\r\n## Props\r\nThe props passed to the wrapped component are:\r\n```js\r\n{\r\n    coords: {\r\n        latitude,\r\n        longitude,\r\n        altitude,\r\n        accuracy,\r\n        altitudeAccuracy,\r\n        heading,\r\n        speed,\r\n    },\r\n    isGeolocationAvailable, // boolean flag indicating that the browser supports the Geolocation API\r\n    isGeolocationEnabled, // boolean flag indicating that the user has allowed the use of the Geolocation API\r\n    positionError, // object with the error returned from the Geolocation API call\r\n}\r\n```\r\nThe `coords` prop is equivalent to the [Coordinates](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) object and the `positionError` is equivalent to the [PositionError](https://developer.mozilla.org/en-US/docs/Web/API/PositionError).\r\n\r\n### PropTypes\r\nUnfortunately, the `geolocated` HOC cannot add the prop types to the wrapped component directly, as the ESLint will not pick that up.  For this reason, prop types are exported as the `geoPropTypes` object. Using them is simple with [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) (or if you already depend on it, lodash [`merge`](https://lodash.com/docs#merge) function is useful as well), or, if your environment supports it, using the [object spread syntax](https://developer.mozilla.org/cs/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):\r\n```js\r\nimport React from 'react';\r\nimport {geolocated, geoPropTypes} from 'react-geolocated';\r\n\r\nclass Demo extends React.Component {\r\n  // Same as the basic example\r\n}\r\n\r\n// Using Object.assign\r\nDemo.propTypes = Object.assign({}, Demo.propTypes, geoPropTypes);\r\n// Using ES6 object spread syntax\r\nDemo.propTypes = {...Demo.propTypes, ...geoPropTypes};\r\n\r\nexport default geolocated()(Demo);\r\n```\r\n\r\n## Configuration\r\nThe `geolocated` function takes optional configuration parameter:\r\n```js\r\n{\r\n    positionOptions: {\r\n        enableHighAccuracy: true,\r\n        maximumAge: 0,\r\n        timeout: Infinity,\r\n    },\r\n    watchPosition: false,\r\n    userDecisionTimeout: null,\r\n    suppressLocationOnMount: false,\r\n    geolocationProvider: navigator.geolocation\r\n}\r\n```\r\nThe `positionOptions` object corresponds to the [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) of the Geolocation API.\r\n\r\nBy default the component only sets position once.  To watch the user's position and provide live updates to position, set `watchPosition = true`.  The geolocation event handler is unregistered when the component unmounts.\r\n\r\nIf set, the `userDecisionTimeout` determines how much time (in miliseconds) we give the user to make the decision whether to allow to share their location or not. In Firefox, if the user declines to use their location, the Geolocation API call does not end with an error. Therefore we want to fallback to the error state if the user declines and the API does not tell us.\r\n\r\nThe location is obtained when the component mounts by default. If you want to prevent this and get the location later, set the `suppressLocationOnMount` to `true` and using a `ref` in the parent component call its `getLocation` method (see the demo's [`App` component](https://github.com/no23reason/react-geolocated/blob/dcbe587880751519a6ac6adaa6c49780b609e3c2/demo/App.jsx#L14-L21) for example of this).\r\n\r\nThe `geolocationProvider` allows to specify alternative source of the geolocation API. This was added mainly for testing purposes, however feel free to use it if need be.\r\n\r\n## TypeScript\r\nThis project ships with type definitions for TypeScript provided. You can use them in your TypeScript files like this:\r\n```js\r\nimport * as React from 'react';\r\nimport { GeolocatedProps, geolocated } from 'react-geolocated';\r\n\r\ninterface IDemoProps {\r\n  label: string;\r\n}\r\n\r\nclass Demo extends React.Component<IDemoProps & GeolocatedProps> {\r\n  render(): JSX.Element {\r\n    return (\r\n      <div>\r\n        label: {this.props.label}\r\n        lattitude: {this.props.coords && this.props.coords.latitude}\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default geolocated()(Demo);\r\n```\r\n\r\n## Browser support\r\n  * Chrome \u2265 5\r\n  * Firefox \u2265 3.5\r\n  * Internet Explorer \u2265 9\r\n  * Opera \u2265 10.60\r\n  * Safari \u2265 5\r\n\r\n## Acknowledgements\r\n\r\nMany thanks belong to [@mcumpl](https://github.com/mcumpl) for the original idea for this as well as many suggestions and comments.\r\n\r\nThis project uses the [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).\r\n\r\n## License\r\n\r\n*react-geolocated* is available under MIT. See [LICENSE](https://github.com/no23reason/react-geolocated/tree/master/LICENSE) for more details.\r\n"}});
//# sourceMappingURL=1.3ddd262f.chunk.js.map