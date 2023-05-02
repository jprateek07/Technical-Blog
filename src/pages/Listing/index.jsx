import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Header from '../../components/header'
import './style.scss'

import CollapseMenu from '../../components/collapseMenu'
import { data as topics } from '../../assets/dummyData'

export default function Listing() {
  const [data, setData] = useState(topics)

  const navigate = useNavigate();
  const onChange = (e) => {
    let menu = topics.filter(item => item.type == state.type)
    if (e.target.value.length > 3) {
      let updatedMenuArray = menu[0]?.data.filter(item => item.topic.toLowerCase().includes(e.target.value.toLowerCase()))
      let newdata = topics.map(item => {
        if (item.type == state.type) {
          return { ...item, data: updatedMenuArray }
        }
        else {
          return item;
        }
      })
      setData(newdata)
    }
    else {
      setData(topics)
    }
  }

  const { state } = useLocation();
  function renderCollapseMenu() {
    let menu = data?.filter(item => item.type == state.type)
    return menu ? menu[0]?.data?.map((item) => {
      return <CollapseMenu title={item.topic}>
        {item.subTopic.map((topic, index) => {
          return <p className='content-title' onClick={() => navigate(`/listing/${topic.title}`, { state: { type: state.type, topic: item.topic, subTopic: topic.title, id: topic.id } })}> &nbsp; {topic.title}</p>
        })}
      </CollapseMenu>
    }) : null
  }
  return (
    <>
      <Header />
      <Input size="large" onChange={onChange} className='search-bar' placeholder="Type your question here..." prefix={<SearchOutlined />} />
      <h2 className="breadcrumb"><span onClick={() => navigate('/')}>{'Browse Topics - Home > '} </span><span onClick={() => navigate('/listing', { state: { type: state.type } })}>{state.type} </span></h2>
      {renderCollapseMenu()}
    </>
  )
}
