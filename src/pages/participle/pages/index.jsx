import React from 'react';
import { Input, Button } from 'antd';
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
        this.setState({textValue: e.target.value});
    }
    spitWord = () =>{
        const { textValue } = this.state;
        this.setState({loading:true});
        api.getSpitRes({textValue})
        .then(res =>{
            this.setState({result:res.data.data})
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        this.setState({loading:false});
    }
    render() {
        const { loading, textValue, result } = this.state;
        return (
            <div>
                <Button type="primary" loading={loading} onClick={this.spitWord} icon={<PoweroffOutlined />}>
                    开始分词
                </Button>
                <TextArea
                    rows={4}
                    value={textValue}
                    placeholder="请输入需要分词的文本"
                    onChange={this.changeText}
                />
                <div>
                    <p>分词结果：</p>
                    <pre>
                        {result}
                    </pre>
                </div>
            </div>
        );
    }
}

export default Participle;