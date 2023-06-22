import { useState } from "react"

import FeedBackBtn from "./FeedBackBtn"
import Statistics from "./Statistics"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodBtnClick = () => {
    setGood(good + 1 )
  }

  const handleNeutralBtnClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadBtnClick = () => {
    setBad(bad + 1)
  }

  const nbrFeedBacks = () => {
    return good + neutral + bad
  }

  const avgFeedback = () => { 
    return nbrFeedBacks() / 3
  }

  const positiveFeedBack = () => {
    return (good / nbrFeedBacks()) * 100 
  }


  return (
    <div>
      <h1>give feedback</h1>
      <FeedBackBtn name="good" btnClicked={handleGoodBtnClick}  />
      <FeedBackBtn name="neutral" btnClicked={handleNeutralBtnClick} />
      <FeedBackBtn name="bad" btnClicked={handleBadBtnClick} />
      
      <table>
        <thead>
          <tr><th><h2>statistics</h2></th></tr>
        </thead>
        <tbody>
          <Statistics details={{good, neutral, bad, 'all': nbrFeedBacks(), 'average': avgFeedback(), 'positive': positiveFeedBack()}} />
        </tbody>
      </table>
    </div>
  )
}

export default App;
