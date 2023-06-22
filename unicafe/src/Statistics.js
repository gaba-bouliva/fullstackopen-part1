import StatisticLine from "./StatisticLine"

const Statistics = ({details}) => {
  const {good, neutral, bad, all,  average, positive} = details

  if ( all && all > 0) {
      return (
        <>
          <tr><StatisticLine text="good" value={good} /></tr>
          <tr><StatisticLine text="neutral" value={neutral}/></tr>
          <tr><StatisticLine text="bad" value={bad}/></tr>
          <tr><StatisticLine text="all" value={all}/></tr>
          <tr><StatisticLine text="average" value={average}/></tr>
          <tr><StatisticLine text="positive" value={positive}/></tr>
        </>
      
      )
    } 
  
  return <tr><td><p><strong>No feedback given</strong></p></td></tr>
}

export default Statistics