// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachListItem, islikeBtnClicked, isDeleteButtonClikced} = props
  const {id, Uname, Udescription, IsActive, date, color} = eachListItem

  const likeButtonClick = () => {
    // console.log('clicked')
    islikeBtnClicked(id)
  }
  const likeButton = IsActive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  //   console.log(IsActive)

  const deleteClicked = () => {
    console.log('buttonCLicked')
    isDeleteButtonClikced(id)
  }

  return (
    <div>
      <li>
        <div className="commentItem">
          <p className="commentElements">
            <span className={`span-El commentElements ${color}`}>
              {Uname[0].toUpperCase()}
            </span>
            {Uname}
          </p>
          <p className="commentElements">{date}</p>
        </div>
        <p>{Udescription}</p>
        <div className="delete-icon">
          <div>
            <img src={likeButton} alt="like" />
            <button type="button" onClick={likeButtonClick} id="data-testid">
              Like
            </button>
          </div>
          {/* 
          <button
            type="button"
            className="btnElement"
            data-testid="delete"
            onClick={deleteClicked}
          >
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" />
          </button> */}

          <button
            type="button"
            className="btnElement"
            data-testid="delete"
            onClick={deleteClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr />
      </li>
    </div>
  )
}

export default CommentItem
