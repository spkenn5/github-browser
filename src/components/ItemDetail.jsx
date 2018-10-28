import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';


export default class ItemDetail extends Component {
    render() {
        const { name, lang, avatar } = this.props;
        
        return (
            <List.Item.Meta
                avatar={<Avatar src={avatar} />}
                title={ name }
                description={lang}
            />            
        );
    }
}

ItemDetail.propTypes = {
    name: PropTypes.string,
    lang: PropTypes.string,
    avatar: PropTypes.string,
}

ItemDetail.defaultProps = {
    name: '',
    lang: '',
    avatar: '',
}