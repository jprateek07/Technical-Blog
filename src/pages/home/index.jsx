import React, { useState } from 'react';
import './style.scss'
import { RocketOutlined, SearchOutlined } from '@ant-design/icons';
import { Row, Col, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/cards'
import Header from '../../components/header'
import { data as topics } from '../../assets/dummyData'

export default function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState(topics)
  const onChange = (e) => {
    if (e.target.value.length > 3) {
      setData(data.filter(item => item.type.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    else {
      setData(topics)
    }
  }
  function renderCards() {
    return data.map(item => {
      return <Col xl={6} md={6} xs={22}>
        <Card className='icon-cards' onClick={() => navigate('/listing', { state: { type: item.type } })}>
          {item.icon}
          <p><strong>{item.type}</strong></p>
        </Card>
      </Col>
    })
  }
  return (
    <>
      <div className='home-page'>
        <Header onChange={onChange} />
        <Input size="large" onChange={onChange} className='search-bar' placeholder="Type your question here..." prefix={<SearchOutlined />} />
        <Row>
          {renderCards()}
        </Row>
      </div>
    </>
  )
}