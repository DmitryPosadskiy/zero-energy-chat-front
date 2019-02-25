import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sendMessage, receiveMessage } from './action'

class Chat extends Component {
	componentDidMount() {
		this.props.receiveMessage();
	}

	render() {
		const {
			messages = [],
		} = this.props;
		return (
			<div>
				{
					messages.map(message => <p>{message.message}</p>)
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	messages: state.message.messages
});

const mapDispatchToProps = (dispatch) => ({
	sendMessage: (message) => sendMessage(message)(dispatch),
	receiveMessage: () => receiveMessage()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);