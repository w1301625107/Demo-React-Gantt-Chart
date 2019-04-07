import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Gantt from './lib/index';
import './index.css';
import dayjs from 'dayjs'
import Gantt from 'r-gantt-chart'
// import 'v-dialogs/dist/gantt.css'

import { mockDatas } from "./mock/index.js";

import TestLeft from './components/test-left.jsx'
import TestBlock from './components/test-block.jsx'

const cellHeight = 40;
const currentTime = dayjs()

function wrapTestBlock(data,getPositonOffset,getWidthAbout2Times,isInRenderingTimeRange){
  return data.gtArray.map(item=>{
    if(isInRenderingTimeRange(item.start)||isInRenderingTimeRange(item.end)){
      return(
        <div className="gantt-block-item"
        key={item.id}
        style={{left:getPositonOffset(item.start)+'px',width:getWidthAbout2Times(item.start,item.end)+'px'}}>
          {TestBlock(data,item,currentTime,null,cellHeight)}
        </div>
      )
    }
    return  null
  })
}
function MyHeader(){
  return (
    <div>react-gantt-chart</div>
  )
}
// const functest = (data) => (<div className="name">tst</div>)


ReactDOM.render(
  <div style={{ height: `100vh`, width: '100vw' }}>
    <Gantt datas={mockDatas(100)}
    dataKey={"id"} 
    cellHeight={cellHeight}
    startTime={dayjs()
      .subtract(1, "hour")
      .toString()} endTime={dayjs()
        .add(2, "day")
        .add(2, "hour")
        .toString()}
        renderLeftBar={TestLeft}
        renderBlock={wrapTestBlock}
        renderHeader={MyHeader}
         />
  </div>
  ,
  document.getElementById('root') as HTMLElement
);
