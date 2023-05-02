import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col } from 'antd';
import { FileOutlined } from '@ant-design/icons';

import { data } from '../../assets/dummyData';
import './style.scss'
export default function SubMenu() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let desc = data.find(item => item.type == state.type).data.find(sub => sub.topic == state.topic).subTopic.find(i => i.id == state.id).description
  function renderSideMenu() {
    let menu = data.find(item => item.type == state.type).data.find(sub => sub.topic == state.topic).subTopic
    return data.find(item => item.type == state.type).data.find(sub => sub.topic == state.topic).subTopic.map((item) => {
      return <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center',marginBottom:'10px' }}><FileOutlined /><p className='content-title' onClick={() => navigate(`/listing/${item.title}`, { state: { type: state.type, topic: state.topic, subTopic: item.title, id: item.id } })}> &nbsp; {item.title}</p></div>
    })
  }
  return (
    <>
      <h2 className="breadcrumb"><span onClick={() => navigate('/')}>{'Home > '} </span><span onClick={() => navigate('/listing', { state: { type: state.type } })}>{state.type + " > "} </span>{state.topic}</h2>
      <Row className='subtopic-desc'>
        <Col xl={16} md={16} xs={22}>
          <div className="submenu-content">
            <h2>{state.subTopic}</h2>
            <h5>{desc}</h5>
          </div>
        </Col>
        <Col xl={8} md={8} xs={22}>
          {renderSideMenu()}
        </Col>
      </Row>
    </>
  )
}
