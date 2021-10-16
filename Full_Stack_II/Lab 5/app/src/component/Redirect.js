import React from 'react';

class Redirect extends React.Component {
    constructor(props) {
        super(props);
        this.handleRedirectClick = this.handleRedirectClick.bind(this);
    }

    handleRedirectClick = () => {
        const {history} = this.props;
        if(history) history.push("/");
        else console.log(`history not found in props`);
    }

    render() {
        return (
            <button onClick={this.handleRedirectClick}>Redirect</button>
          );
    }
}
 
export default Redirect;