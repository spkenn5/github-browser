import React, { Component } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const Search = Input.Search;

export default class SearchBar extends Component {
    render() {
        const { onSearch } = this.props;

        return (
            <Search
                placeholder="input github username"
                enterButton="Search"
                size="large"
                onSearch={value => onSearch(value)}
                />
        );
    }
}

SearchBar.defaultProps = {
    onSearch: () => { }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func
}
