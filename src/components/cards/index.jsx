import React from 'react'
import { Card } from 'antd';

import './style.scss'
export default function index(props) {
  return (
    <Card
    title={null}
    bordered={false}
    {...props}
    
  >
    {props?.children}
  </Card>
  )
}
