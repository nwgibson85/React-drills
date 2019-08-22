import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world',
    };

    handleWorldClick = () => {
        this.setState({who: 'World!' })
    }

    handleReactClick = () => {
        this.setState({who: 'React!' })
    }

    handleFriendClick = () => {
        this.setState({who: 'Friend!' })
    }

    render() {
        return(
            <div className="Hello">
                <p>hello {this.state.who}</p>
                <button id = "World!"
                    onClick = {this.handleWorldClick}>
                    World!
                </button>
                <button id = "Friend!"
                    onClick = {this.handleFriendClick}>
                    Friend!
                </button>
                <button id = "React!"
                    onClick = {this.handleReactClick}>
                    React!
                </button>
            </div>
        )
    
    };
}

export default HelloWorld