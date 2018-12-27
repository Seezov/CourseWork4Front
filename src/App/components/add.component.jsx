import React from 'react';

class AddComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            numOfAdsSpaces: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/shop/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(function(res){
            return res;
        }).catch(err => err);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Add shop</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <table>
                        <tr>
                            <td>Shop name</td>
                            <td>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={this.state.name} 
                                    onChange={this.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Number of Ads Spaces</td>
                            <td>
                                <input 
                                    type="number" 
                                    name="numOfAdsSpaces" 
                                    value={this.state.numOfAdsSpaces} 
                                    onChange={this.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <input type="submit" value="Save"></input>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default AddComponent;