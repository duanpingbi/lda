import React from 'react';
import './style';
import api from '../api';
import { Table } from 'antd';

const columns = [
    {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'content',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: 'url',
        dataIndex: 'url',
        key: 'url',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <a style={{ marginRight: 16 }}>查看</a>
            <a>删除</a>
          </span>
        ),
      }
];
class Data extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount=()=> {
        api.getArticle().then(res => {
            const { data } = res;
            this.setState({data:data.data});
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default Data;