import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count1: 0,
            count2: 1,
        };
    }
    render() {
        const { name, Location } = this.props;
        const { count1, count2 } = this.state;
        return (
            <div className="user-card">
                <h1>count1:{count1}</h1>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 + 1,
                    })
                }}>click to increase</button>
                <h2>Name : {name} </h2>
                <h4>Location : {Location}</h4>
            </div>
        );
    }
}
export default UserClass;