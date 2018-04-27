import React from 'react'

class HomePage extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        const userName = this.props.match.params.username
        return(
            <span>Hello {userName}</span>
        )
    }
}

export default HomePage
