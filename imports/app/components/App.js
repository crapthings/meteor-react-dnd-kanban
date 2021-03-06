import AltContainer from 'alt-container'

import React from 'react'

import Lanes from './Lanes'
import LaneActions from '../actions/LaneActions'
import LaneStore from '../stores/LaneStore'

import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

@DragDropContext(HTML5Backend)
export default class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="header"><h1>My Kanban</h1></div>
        <button className="add-lane" onClick={this.addLane}>+ Add Lane</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes
          }}
        >
          <Lanes />
        </AltContainer>

      </div>
    )
  }
  addLane() {
    LaneActions.create({name: 'New lane', editing: true})
  }
}
