import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

class Roots extends Component {
	render() {
		return (
			<div>{this.props.children}</div>
		);
	};
}

const Home = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../Views/Home').default);
	},'Home');
};

const SignIn = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../Views/SignIn').default);
	},'SignIn');
};

const RouteConfig = (
	<Router history={browserHistory}>
		<Route path="/" component={Roots}>
			<IndexRoute getComponent={Home} />//首页
			<Route path="SignIn" getComponent={SignIn} />
			<Redirect from='*' to='/'  />
		</Route>
	</Router>
);

export default RouteConfig;