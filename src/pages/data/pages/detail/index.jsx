import React from 'react';
import api from '../../api';
import { Notify } from 'antd';
import Pie from '../components/pie';
import './style';
let words = '';
const seriesData = [];
class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleDetail: [],
            nUrl: '',
            titleL: ''
        }
    }
    componentWillMount() {
        let id = window.location.search.split('=')[1];
        api.getArticleById(id).then(res => {
            const { nUrl, content, title } = res.data.data;
            const detail = JSON.parse(content);
            const obj = {};
            for (let i = 0; i < detail.length; i++) {
                words += detail[i].w + '    ';
                if (obj[detail[i].w]) {
                    obj[detail[i].w]++;
                } else {
                    obj[detail[i].w] = 1;
                }
            }
            Object.keys(obj).forEach(v => {
                if (obj[v] >= 5) {
                    seriesData.push({
                        name: v,
                        value: obj[v]
                    });
                }
            })
            this.setState({ nUrl, title });
        }).catch(err => {
            Notify.error(err);
        })
    }
    render() {
        const { nUrl, title } = this.state;
        return (
            <div className="detail-container">
                <h2>{title}</h2>
                <a href={nUrl}>{nUrl}</a>
                <pre className="detail-content">
                    {words}
                </pre>
                <Pie
                    seriesData={seriesData}
                />
            </div>);
    }
}

export default ArticleDetail;