import React from "react";

class Colllege extends React.Component {
    render() { 
        return <p> College <b>{this.props.name}</b> with address <b>{this.props.location}</b> </p>;
    }
}
 
export default Colllege;