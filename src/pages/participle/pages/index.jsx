import React from 'react';
import { Input, Button, notification } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import api from '../api';
import './style';

const { TextArea } = Input;
class Participle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            loading: false,
            result: ''
        }
    }
    changeText = e => {
        this.setState({ textValue: e.target.value });
    }
    spitWord = () => {
        const { textValue } = this.state;
        this.setState({ loading: true });
        api.getSpitRes({ textValue })
            .then(res => {
                this.setState({ result: res.data.data })
            }).catch(err => {
                notification.error({
                    message: '分词失败',
                    description: err
                })
            });
        this.setState({ loading: false });
    }
    clearText = () => {
        this.setState({ textValue: '', result: '' })
    }
    render() {
        const { loading, textValue, result } = this.state;
        return (
            <div className="spilt-container">
                <TextArea
                    rows={4}
                    value={textValue}
                    placeholder="请输入需要分词的文本"
                    onChange={this.changeText}
                    className="spit-text"
                />
                <Button
                    type="primary"
                    loading={loading}
                    onClick={this.spitWord}
                    icon={<PoweroffOutlined />}
                    className="spit-btn"
                    >
                    开始分词
                </Button>
                <Button onClick={this.clearText}>清空数据</Button>
                <p className="spit-title">分词结果：</p>
                <pre className="spit-result">
                    {result}
                </pre>
            </div>
        );
    }
}

export default Participle;