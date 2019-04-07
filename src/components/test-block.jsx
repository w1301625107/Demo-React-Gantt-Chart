import * as React from 'react'
import dayjs from 'dayjs'
import'./test-block.css'

const NOW_PLAN = '#D5F8EA'
const FUTHER_PLAN = '#BFF2FE'
const PAST_PLAN = '#F2F2F2'

function timeToString(time) {
  return dayjs(time).format("HH:mm")
}

function statusColor(item, currentTime) {
  const start = dayjs(item.start);
  const end = dayjs(item.end);
  if (start.isBefore(currentTime) && end.isAfter(currentTime)) {
    return NOW_PLAN; // NOW
  } else if (end.isBefore(currentTime)) {
    return PAST_PLAN; // PAST
  } else {
    return FUTHER_PLAN; // Future
  }
}

export default function TestBlock(data, item, currentTime, updateTimeLines, cellHeight) {



  return (
    <div
      className="plan"
      style={{ backgroundColor: statusColor(item, currentTime), marginTop: 0.1 * cellHeight + 'px' }}>
      <div className="runTime">
        <span>S:{timeToString(item.start)}</span>
        <span>E:{timeToString(item.end)}</span>
      </div>
      <div className="middle">编号{item.id}</div>
    </div>
  )
}