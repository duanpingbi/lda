import React from 'react';
import './style';
import api from '../api';
import { Table, notification, Spin } from 'antd';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }
    handelDel = (id) => {
        api.delArticleById(id)
            .then(() => {
                notification.success({
                    message: '删除成功！'
                });
                this.getDataList();
            }).catch(err => {
                notification.error({
                    message: '删除失败',
                    description: err
                });
            })
    }
    get columns() {
        return [
            {
                title: '新闻标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '新闻地址',
                dataIndex: 'nUrl',
                key: 'nUrl',
            },
            {
                title: '操作',
                key: 'action',
                render: (data) => (
                    <span>
                        <a
                            style={{ marginRight: 16 }}
                            href={`/detail?id=${data._id}`}
                        >查看</a>
                        <a onClick={() => this.handelDel(data._id)}>删除</a>
                    </span>
                ),
            }
        ];
    }
    componentDidMount = () => {
        this.getDataList();
    }
    getDataList = () => {
        api.getArticle().then(res => {
            const { data } = res;
            this.setState({ data: data.data, loading: false });
        }).catch(err => {
            notification.error({
                message: '获取数据失败',
                description: err
            });
        })
    }
    render() {
        const { data,loading } = this.state;
        return (
            <Spin spinning={loading}>
                <Table columns={this.columns} dataSource={data} />
            </Spin>
        );
    }
}

export default Data;