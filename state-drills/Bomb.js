import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
    };
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tickTockOrBoom() {
        const { count } = this.state
        if (count >= 31) {
            clearInterval(this.interval)
            return 'BOOM!!!!'
        }
        else if (count % 2 === 0) {
            return 'tick'
        }
        else {
            return 'tock'
        }
    }

    render() {
        return(
            <div className='tickTock_Boom'>
                <p>
                    {this.tickTockOrBoom()}
                </p>
            </div>
        )
    }
}

export default Bomb