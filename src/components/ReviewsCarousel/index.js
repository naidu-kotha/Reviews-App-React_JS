/* eslint-disable react/no-unknown-property */
// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  nextReview = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  previousReview = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(index)

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Reviews</h1>
          <img
            src={reviewsList[index].imgUrl}
            alt={reviewsList[index].username}
            className="image"
          />
          <div className="name-container">
            <button
              type="button"
              testid="leftArrow"
              onClick={this.previousReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <button type="button" testid="rightArrow" onClick={this.nextReview}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
          <p className="name">{reviewsList[index].username}</p>
          <p className="company">{reviewsList[index].companyName}</p>
          <p className="description">{reviewsList[index].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
