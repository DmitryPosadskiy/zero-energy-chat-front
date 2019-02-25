import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sendMessage, receiveMessage } from './action'

class Chat extends Component {
	state = {
		myMessage: '',
		name: '',
	};

	componentDidMount() {
		this.getMessages();
	}

	getMessages = () => {
		this.props.receiveMessage();
		setTimeout(this.getMessages, 1000)
	};


	onChangeMyMessage = (message) => {
		this.setState({myMessage: message.target.value})
	};

	onChangeName = (name) => {
		this.setState({name: name.target.value})
	};

	onClickSendMessage = () => {
		this.props.sendMessage({author: this.state.name, message: this.state.myMessage});
	};

	render() {
		const {
			messages = [],
		} = this.props;
		return (
			<div>
				{
					messages.map(message => <p>{message.message} from {message.author} in {message.createDate}</p>)
				}
				<div>
					<label>Message
						<input type="text" value={this.state.myMessage} onChange={this.onChangeMyMessage} />
					</label>
					<label>Your name
						<input type="text" value={this.state.name} onChange={this.onChangeName} />
					</label>
					<button onClick={this.onClickSendMessage}>Send</button>
				</div>
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