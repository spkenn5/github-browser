import React, { Component } from 'react';
import { Layout, message } from 'antd';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import ReadMeModal from './components/ReadMeModal';
import { getRepo, getReadme } from './utils/network';
import './App.css';

const Content = Layout.Content;
const Header = Layout.Header;

class App extends Component {

  state = {
    data: [],
    readMe: '',
    modalVisible: false,
    loading: false,
    q: '',
  }

  onSearch = (q) => {
    this.setState({ q, loading: true }, () => {
      getRepo(q)
        .then(result => {
          this.setState({
            data: result.data
          });
        })
        .catch(err => {
          console.log('DEBUG -> ', err);
          message.error('Unable to process request');
        })
        .then(() => {
          this.setState({
            loading: false
          });
        });
    });
  }

  onClick = (item) => {
    console.log('DEBUG item', item.name, item.owner.login);
    this.setState({ loading: true }, () => {
      getReadme(item.owner.login, item.name)
        .then(result => {
          this.setState({
            modalVisible: true,
            readMe: atob(result.data.content)
          });
        })
        .catch(err => {
          console.log('DEBUG -> ', err);
          message.error('Unable to process request');
        })
        .then(() => {
          this.setState({
            loading: false
          });
        });
    });
  }

  onOk = () => {
    this.setState({ loading: true, modalVisible: false }, () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { data, readMe, loading, modalVisible } = this.state;
    
    return (
      <Layout>
        <Header>
          <SearchBar
            onSearch={this.onSearch}
          />
        </Header>
        <Content>
          <ItemList
            data={data}
            onClick={this.onClick}
          />
        </Content>
        <ReadMeModal
          content={readMe}
          visible={modalVisible}
          loading={loading}
          onOk={this.onOk}
        />        
      </Layout>
    );
  }
}

export default App;
