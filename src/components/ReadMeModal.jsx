import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import showdown from 'showdown';

const converter = new showdown.Converter();

export default class ReadMeModal extends Component { 
    render() {
        const { content, visible, loading, onOk } = this.props;            
        return (
            <Modal
                visible={visible}
                title="Read Me"
                onOk={onOk}
                onCancel={onOk}
                footer={[
                    <Button key="back" loading={loading} onClick={onOk}>Ok</Button>            
                ]}
            >                
                <div dangerouslySetInnerHTML={{ __html: content ? converter.makeHtml(content) : '' }} />
            </Modal>
        );
    }
}

ReadMeModal.propTypes = {
    content: PropTypes.any,
    visible: PropTypes.bool,
    loading: PropTypes.bool,
}

ReadMeModal.defaultProps = {
    content: '',
    visible: false,
    loading: false,
}