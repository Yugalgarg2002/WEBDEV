import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleElement = () => {
    const size =anecdotes.length
    const updatedAnecdote = Math.floor(Math.random()*size)
    setSelected(updatedAnecdote)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const max_index = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Header text='Anecdote of the day'/>
      {anecdotes[selected]}
      <p>Vote: {votes[selected]}</p>
      <br/>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleElement}>next anecdote</button>
      <Header text='Anecdote with most votes'/>
      {anecdotes[max_index]}
      <p>Vote: {votes[max_index]}</p>
    </div>
  )
}

export default App