import * as React from 'react'
import './test-left.css'

export default function TestLeft(data ) {
  return (
    <div className="name" style={{ background: data.colorPair.light }}>
      <div className="colorBar" style={{ background: data.colorPair.dark }} />
      <div className="type">{data.type}</div>
      <div className="carId">{data.name}{data.id}</div>
      <div className="speed">{data.speed}km/s</div>
    </div>
  )
}