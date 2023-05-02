import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;
export default function index(props) {
  return (
    <>
    <Collapse   expandIconPosition="right">
    <Panel header={props.title} key={props.title}>
       {props.children}
      </Panel>
    </Collapse>
    </>
  )
}
