import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import ItemDetail from './ItemDetail';

export default class ItemList extends Component {
    render() {
        const { data, onClick } = this.props;
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (                    
                    <List.Item actions={[<a href="#" onClick={(e) => { onClick(item) }}>view readme</a>]}>
                        <ItemDetail
                            name={item.name}
                            lang={item.language}
                            avatar={item.owner.avatar_url}                            
                        />
                </List.Item>
                )}
            />
        );
    }
}

ItemList.propTypes = {
    data: PropTypes.any,    
    onClick: PropTypes.func,
}

ItemList.defaultProps = {
    data: [],
    onClick: () => { }
}