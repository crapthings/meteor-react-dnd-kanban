import React from 'react'
import Lane from './Lane'

import LaneActions from '../actions/LaneActions'

export default ({lanes}) => {
  return (
    <div className="lanes">{lanes.map(lane =>
      <Lane className="lane" id={lane.id} key={lane.id} lane={lane} onLaneMove={LaneActions.moveLane} />
    )}</div>
  )
}
