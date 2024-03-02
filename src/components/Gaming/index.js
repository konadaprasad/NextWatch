import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'

import MenuItems from '../MenuItems'

import VideoList from '../VideosList'

import Game from '../Game'

import NxtWatchContext from '../../context/LanguageContext'

import {
  MainContainer,
  Container,
  Icons,
  SecondContainer,
  LoadingContainer,
  VideosUnorderedList,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureRetryButton,
  TopContainer,
  TopHeading,
} from './styledcomponents'

const ApiView = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Gaming extends Component {
  state = {games: [], view: ApiView.loading}

  componentDidMount = () => {
    this.getGaming()
  }

  getGaming = async () => {
    const url = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({games: updatedData, view: ApiView.success})
    } else {
      this.setState({view: ApiView.failure})
    }
  }

  RetryButton = () => {
    this.setState({view: ApiView.loading}, this.getGaming)
  }

  render() {
    const {games} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, changeActiveTab, activeTab} = value
          if (activeTab !== 'Gaming') {
            changeActiveTab('Gaming')
          }
          const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
          const color = isDarkTheme ? '#ffffff' : '#000000'
          const renderSuccessView = () => (
            <VideosUnorderedList>
              {games.map(each => (
                <Game key={each.id} item={each} />
              ))}
            </VideosUnorderedList>
          )

          const renderLoadingView = () => (
            <LoadingContainer>
              <div className="loader-container" data-testid="loader">
                <Loader type="ThreeDots" color={color} height="50" width="50" />
              </div>
            </LoadingContainer>
          )

          const renderFailureView = () => (
            <FailureContainer>
              <FailureImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <FailureHeading color={color}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailurePara color={color}>
                We are having some trouble to complete your request.
              </FailurePara>
              <FailurePara color={color}>Please try again.</FailurePara>
              <FailureRetryButton type="button" onClick={this.RetryButton}>
                Retry
              </FailureRetryButton>
            </FailureContainer>
          )

          const renderView = () => {
            const {view} = this.state
            switch (view) {
              case ApiView.loading:
                return renderLoadingView()
              case ApiView.success:
                return renderSuccessView()
              case ApiView.failure:
                return renderFailureView()
              default:
                return null
            }
          }
          return (
            <MainContainer isDarkTheme={isDarkTheme} data-testid="gaming">
              <Header />
              <Container>
                <MenuItems />
                <SecondContainer data-testid="banner">
                  <TopContainer isDarkTheme={isDarkTheme}>
                    <Icons color={color} backgroundColor={backgroundColor}>
                      <SiYoutubegaming />
                    </Icons>
                    <TopHeading color={color}>Gaming</TopHeading>
                  </TopContainer>
                  {renderView()}
                </SecondContainer>
              </Container>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
