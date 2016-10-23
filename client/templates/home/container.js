// import update from 'immutability-helper'

// import { DropTarget } from 'react-dnd'

// import Card from './card'

// const data = _.times(5, n => ({
//   id: Random.id(),
//   text: faker.lorem.sentence(),
// }))

// // for drop

// const dropTypes = {
//   Card: 'card',
// }

// const dropEvents = {
//   // canDrop(props, monitor) {
//   //   return true
//   // },

//   hover(props, monitor, component) {
//     // console.log(props)
//   },

//   drop(props, monitor, component) {
//       // return true
//   },
// }

// const dropProps = function (connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget(),
//   }
// }

// @DropTarget(dropTypes.Card, dropEvents, dropProps)
// export default class container extends Component {
//   constructor(props) {
//     super(props)
//     this.moveCard = this.moveCard.bind(this)
//     this.findCard = this.findCard.bind(this)
//     this.state = { cards: data, }
//   }

//   moveCard(id, atIndex) {
//     const { card, index } = this.findCard(id)
//     this.setState(update(this.state, {
//       cards: {
//         $splice: [
//           [index, 1],
//           [atIndex, 0, card]
//         ]
//       }
//     }))
//   }

//   findCard(id) {
//     const { cards } = this.state
//     const card = cards.filter(c => c.id === id)[0]

//     return {
//       card,
//       index: cards.indexOf(card)
//     }
//   }

//   render() {
//     const { connectDropTarget } = this.props
//     const { cards } = this.state
//     return connectDropTarget(<div>
//       <h3>hello kitty</h3>
//       {cards.map(d =>
//         <Card key={d.id}
//           moveCard={this.moveCard}
//           findCard={this.findCard}
//           {...d}
//         />)}
//     </div>)
//   }
// }
