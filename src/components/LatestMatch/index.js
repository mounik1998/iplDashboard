// Write your code here
const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    mom,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div>
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{mom}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
