/* eslint-disable react/prop-types */
import { useState } from 'react'

const Anecdote = ({votes, anecdote}) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const MostVotes = ({votes, anecdotes}) => {
  const totalVotes = votes.reduce((sum, num) => sum + num);
  const index = votes.indexOf(Math.max(...votes));

  if (totalVotes == 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <p>Please vote for an Anecdote.</p>
      </>
    )
  }
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <Anecdote votes={votes[index]} anecdote={anecdotes[index]}/>
    </>
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

  const ary = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(ary)

  const getRandom = () => Math.floor(Math.random() * anecdotes.length)

  const handleVoteClick = () => {
    const copyofVotes = [...votes]
    copyofVotes[selected] += 1
    setVotes(copyofVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote votes={votes[selected]} anecdote={anecdotes[selected]} />
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={()=>{setSelected(getRandom())}}>next anecdote</button>
      <MostVotes votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App