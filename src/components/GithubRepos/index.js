import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillStar, AiOutlineIssuesClose} from 'react-icons/ai'
import {GiNothingToSay} from 'react-icons/gi'
import './index.css'

const apiStatusConstatnts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GithubRepos extends Component {
  state = {apiStatus: apiStatusConstatnts.initial, reposData: []}

  componentDidMount() {
    this.getGithubStarredRepos()
  }

  getGithubStarredRepos = async () => {
    this.setState({apiStatus: apiStatusConstatnts.inProgress})
    const githubStarredreposUrl =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'

    const response = await fetch(githubStarredreposUrl, {
      headers: {Authorization: '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'},
    })
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)

      this.setState({
        apiStatus: apiStatusConstatnts.success,
        reposData: data.items,
      })
    } else {
      this.setState({apiStatus: apiStatusConstatnts.failure})
    }
  }

  renderSuccessView = () => {
    const {reposData} = this.state
    return (
      <ul className="repos-container">
        {reposData.map(eachRepo => (
          <a
            href={`https://api.github.com/repos/${eachRepo.owner.login}/${eachRepo.name}`}
            className="repo-link"
          >
            <li key={eachRepo.id} className="repo-card">
              <img
                src={eachRepo.owner.avatar_url}
                alt={eachRepo.name}
                className="avatar-url"
              />
              <div className="repo-data-container">
                <h1 className="repo-name">{eachRepo.name}</h1>
                <p className="repo-description">{eachRepo.description}</p>
                <div className="repo-issues-stars-count-published-date-container">
                  <p className="repo-stars">
                    <AiFillStar size="30px" color="red" /> Stars:{' '}
                    {eachRepo.stargazers_count}
                  </p>
                  <p className="repo-issues">
                    <AiOutlineIssuesClose size="30px" color="red" /> Issues:{' '}
                    {eachRepo.open_issues}
                  </p>
                  <p className="repo-published-date">
                    Last pushed {eachRepo.pushed_at} by {eachRepo.name}
                  </p>
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-view">
      <GiNothingToSay size="100px" />
    </div>
  )

  renderLoadingView = () => (
    <div className="loading-view-container">
      <Loader type="ThreeDots" color="blue" heioght="50" width="50" />
    </div>
  )

  renderReposData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstatnts.success:
        return this.renderSuccessView()
      case apiStatusConstatnts.failure:
        return this.renderFailureView()
      case apiStatusConstatnts.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="starred-repos-page-conatiner">
        <div className="starred-repos-page">
          <h1 className="heading">Most Starred Repos</h1>
          {this.renderReposData()}
        </div>
      </div>
    )
  }
}

export default GithubRepos
