import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const listItems = []

// Write your code here
class Comments extends Component {
  state = {
    count: 0,
    commentListItems: listItems,
    name: '',
    description: '',
    isActive: false,
  }

  nameValue = event => {
    this.setState({name: event.target.value})
  }

  descriptionValue = event => {
    this.setState({description: event.target.value})
  }

  onAddButton = () => {
    const {commentListItems, name, description, isActive} = this.state
    const randomIndex = Math.floor(Math.random() * 7)
    const styleBackground = initialContainerBackgroundClassNames[randomIndex]
    const newListItem = {
      id: uuidv4(),
      Uname: name,
      Udescription: description,
      IsActive: isActive,
      color: styleBackground,
      date: formatDistanceToNow(new Date()),
    }
    this.setState(prevState => ({
      count: prevState.count + 1,
      commentListItems: [...commentListItems, newListItem],
      name: '',
      description: '',
    }))
  }

  islikeBtnClicked = eachId => {
    this.setState(prevState => {
      const updatedList = prevState.commentListItems.map(item => {
        if (item.id === eachId) {
          return {...item, IsActive: !item.IsActive}
        }
        return item
      })

      return {commentListItems: updatedList}
    })
  }

  isDeleteButtonClikced = eachId => {
    this.setState(prevState => {
      const deletedList = prevState.commentListItems.filter(
        item => item.id !== eachId,
      )
      return {
        commentListItems: deletedList,
        count: prevState.count - 1,
      }
    })
  }

  render() {
    const {count, commentListItems, name, description} = this.state
    return (
      <div className="main-bg">
        <div className="bg">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="form"
                value={name}
                onChange={this.nameValue}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                className="form"
                value={description}
                onChange={this.descriptionValue}
              />
            </form>
            <button className="form button" onClick={this.onAddButton}>
              Add Comment
            </button>
          </div>
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <p>
          <span className="button">{count}</span> Comments
        </p>
        <ul>
          {commentListItems.map(eachListItem => (
            <CommentItem
              eachListItem={eachListItem}
              islikeBtnClicked={this.islikeBtnClicked}
              isDeleteButtonClikced={this.isDeleteButtonClikced}
              key={eachListItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
