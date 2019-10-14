import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {sec: [],};

    state = {
        currentSecE: null,
    }

    handleClick(e) {
        this.setState({currentSecE: e})
    }

    renderList(sec, e, currentSecE) {
        return (
            <li className = "AccordionItem" key = {e}>
                <button type = 'button' onClick = {() => this.handleClick(e)}>
                    {sec.title}
                </button>
                {(currentSecE === e) && <p>{sec.content}</p>}
            </li>
        )
    }

    render() {
        const {currentSecE} = this.state
        const {sec} = this.props
        return (
            <ul className = "Accordion"> 
                {sec.map((sec, e) =>
                    this.renderList(sec, e, currentSecE)
                )}
            </ul>
        )
    }
}

export default Accordion