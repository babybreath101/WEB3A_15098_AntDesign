import React from 'react';
import { Card, Avatar } from 'antd';
import { HeartTwoTone, InstagramOutlined } from '@ant-design/icons';
import './Content.css';

const { Meta } = Card;

class CounterGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0
        }
    }
    handleplus = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    handleDislike = () => {
        if (this.state.like > 0) {
            this.setState({
                like: this.state.like - 1
            })
        }
    }

    render() {
        const { caption, date, img , link } = this.props;
        return (
            <div>
                <Card 
                    style={{ 
                        width: 250
                        }}
                    cover={
                        <img
                            alt="example"
                            src={img}
                        />
                    }
                    actions={[
                        <a href={link}><InstagramOutlined key="setting" /></a>,
                        <HeartTwoTone key="like" twoToneColor="#eb2f96" onClick={this.handleplus} />,
                        <HeartTwoTone key="like" twoToneColor="#000" onClick={this.handleDislike} />,
                        <a disable={true}>{this.state.like}</a>
                    ]}
                >
                    <Meta
                        title={caption}
                        description={date}
                    />
                </Card>
            </div>
        );
    }
}

export default CounterGallery;