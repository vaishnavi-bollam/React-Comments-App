// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachListItem, islikeBtnClicked} = props
  const {id, Uname, Udescription, IsActive} = eachListItem

  const likeButtonClick = () => {
    // console.log('clicked')
    islikeBtnClicked(id)
  }
  const likeButton = IsActive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  //   console.log(IsActive)
  return (
    <div>
      <div className="commentItem">
        <p className="commentElements">
          <span className="span-El commentElements">{Uname[0]} </span>
          {Uname}
        </p>
        <p className="commentElements"> less than a minute ago</p>
      </div>
      <p>{Udescription}</p>
      <div className="delete-icon">
        <div>
          <img src={likeButton} onClick={likeButtonClick} />
          <span>Like</span>
        </div>

        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" />
      </div>
    </div>
  )
}

export default CommentItem
