// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const teamMatchesUrl = 'https://apis.ccbp.in/ipl/'
class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesData: {},
  }

  componentDidMount() {
    this.getTeamData()
  }

  getFormattedData = e => {
    const updatedData = {
      umpires: e.umpires,
      result: e.result,
      mom: e.man_of_the_match,
      id: e.id,
      date: e.date,
      venue: e.venue,
      competingTeam: e.competing_team,
      competingTeamLogo: e.competing_team_logo,
      firstInnings: e.first_innings,
      secondInnings: e.second_innings,
      matchStatus: e.match_status,
    }
    return updatedData
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamMatchesUrl}${id}`)
    const data = await response.json()

    console.log(data.recent_matches)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(item =>
        this.getFormattedData(item),
      ),
    }
    console.log(formattedData.recentMatches)

    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  renderMatchDetails = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    return (
      <ul>
        {recentMatches.map(item => (
          <MatchCard matchDetails={item} key={item.id} />
        ))}
      </ul>
    )
  }

  getMatchesData = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch} = teamMatchesData
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch matchDetails={latestMatch} />
        {this.renderMatchDetails()}
      </div>
    )
  }

  getLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <div>{isLoading ? this.getLoader() : this.getMatchesData()}</div>
  }
}

export default TeamMatches
