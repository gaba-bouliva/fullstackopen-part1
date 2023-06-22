import { useState } from 'react'

import Anecdote from './Anecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState([])

  const generateAnecdote = () => { 
    
      setSelected(Math.floor(Math.random() * 7))
  }

  const handleVote = () => {

    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints)

    if (mostVotedAnecdote.length === 0 ||  mostVotedAnecdote[0].votes < newPoints[selected]) {
      setMostVotedAnecdote([{'text': anecdotes[selected], 'votes': newPoints[selected]}])
    }

  }




  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} nbrVotes={points[selected]}/>
      <button onClick={handleVote}>vote</button>
      <button onClick={generateAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>   
      {mostVotedAnecdote.length ? <Anecdote text={mostVotedAnecdote[0].text} nbrVotes={mostVotedAnecdote[0].votes}/>: 'No votes' }
    </div>
  )
}

export default App