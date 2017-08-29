import React from 'react';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom'
import MemberList from './MemberList';
import MemberView from './MemberView'

const View: React.SFC = () => (
    <Row>
        <Col span={8}>
            <MemberList/>
        </Col>
        <Col span={16}>
            <Route exact path='/dashboard/members/:memberId' component={MemberView}/> 
        </Col>
    </Row>
)

export default View;