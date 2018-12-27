import React from 'react';
import { Link } from 'react-router-dom';

class ShopComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            shops: []
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch('http://localhost:5000/api/shop/findAll')
        .then(res => res.json())
        .then(res => {
            this.setState({
                shops: res
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        this.fetchData();
    }

    handleDelete(event) {
        event.preventDefault();
        var result = window.confirm("Are you sure?");
        if (result){
            var id = event.target.getAttribute('data-key');
            fetch('http://localhost:5000/api/shop/delete/' + id, {
                method: 'DELETE'
            }).then(res => {
                let shops = this.state.shops.filter(shop => {
                    return shop._id !== id
                })
                this.setState(state => {
                    state.shops = shops
                    return state
                })
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    handleEdit(event) {
        event.preventDefault();
        var id = event.target.getAttribute('data-key');
        this.props.history.push('/edit/' + id);
    }

    render() {
        return (
            <div>
                Whanna add a shop? Click here --> <Link to="/add">Add</Link> 
                <h3>Shops List</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of Ads Places</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.shops.map((shop, index) => {
                            return(
                                <tr key={index} align="center">
                                    <td >{shop.name}</td>
                                    <td>{shop.numOfAdsSpaces}</td>
                                    <td>
                                        <input 
                                            type="button" 
                                            value="Edit" 
                                            onClick={this.handleEdit}
                                            data-key={shop._id}></input>
                                        <input 
                                            type="button" 
                                            value="Delete" 
                                            onClick={this.handleDelete}
                                            data-key={shop._id}></input>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShopComponent;