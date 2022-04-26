import { Row, Col } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import React from 'react';

export default function Foo() {
    return (
        <Row>
            <Col span={12}>Foo</Col>
            <Col span={2}><GithubOutlined /></Col>
        </Row>
    );
};
