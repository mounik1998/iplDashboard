// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamCardList: [],
  }

  componentDidMount() {
    this.getTeamData()
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getTeamList = () => {
    const {teamCardList} = this.state
    return (
      <div>
        <ul>
          {teamCardList.map(item => (
            <TeamCard teamDetails={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }

  getTeamData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = data.teams.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamCardList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>{isLoading ? this.renderLoader() : this.getTeamList()}</div>
      </div>
    )
  }
}

export default Home
