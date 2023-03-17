import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

class Nav extends React.Component {
constructor(props) {
    super(props);
}

render() {
    return (
    <div>
        <SearchBar onSearch={this.props.onSearch} />
        <Link to="/about">
            <h2>About</h2>
        </Link>
        <Link to="/home">
            <h2>Home</h2>
        </Link>
        <Link to="/favorites">
            <h2>Favorites</h2>
        </Link>
    </div>
    );
}
}

export default Nav;