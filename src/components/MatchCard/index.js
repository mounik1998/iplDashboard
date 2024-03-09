// Write your code here

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  return (
    <li>
      <p>{competingTeam}</p>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
