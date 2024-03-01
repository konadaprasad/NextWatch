import {Component} from 'react'

import {Redirect, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoSearchOutline} from 'react-icons/io5'

import '../../App.css'

import Header from '../Header'

import MenuItems from '../MenuItems'

import PremiumPlan from '../PremiumPlan'

import EachVideo from '../EachVideo'

import NxtWatchContext from '../../context/LanguageContext'

import {
  MainContainer,
  Container,
  SecondContainer,
  VideosContainer,
  SearchContainer,
  LoadingContainer,
  Search,
  ButtonElement,
  VideosUnorderedList,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureRetryButton,
} from './styledcomponents'

const ApiView = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Home extends Component {
  state = {
    premium: true,
    searchInput: '',
    search: '',
    homeVidoes: [],
    view: ApiView.loading,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({homeVidoes: updatedData, view: ApiView.success})
    } else {
      this.setState({view: ApiView.failure})
    }
  }

  removePremium = () => {
    this.setState({premium: false})
  }

  InputChange = event => {
    this.setState({search: event.target.value})
  }

  RetryButton = () => {
    this.setState({view: ApiView.loading}, this.getVideos)
  }

  SearchButton = () => {
    const {search} = this.state
    this.setState({searchInput: search, view: ApiView.loading}, this.getVideos)
  }

  render() {
    const {home, trending, saved, gaming, premium, homeVidoes} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeActiveTab} = value
          if (activeTab !== 'Home') {
            changeActiveTab('Home')
          }
          const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
          const color = isDarkTheme ? '#ffffff' : '#000000'

          const renderSuccessView = () => (
            <VideosUnorderedList>
              {homeVidoes.length > 0 ? (
                homeVidoes.map(each => <EachVideo key={each.id} item={each} />)
              ) : (
                <FailureContainer>
                  <FailureImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                    alt="no videos"
                  />
                  <FailureHeading color={color}>
                    No Search results found
                  </FailureHeading>
                  <FailurePara color={color}>
                    Try different key words or remove search filters
                  </FailurePara>
                  <FailureRetryButton type="button">Retry</FailureRetryButton>
                </FailureContainer>
              )}
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
            <MainContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header />
              <Container>
                <MenuItems />
                <SecondContainer>
                  {premium ? (
                    <PremiumPlan removePremium={this.removePremium} />
                  ) : null}
                  <VideosContainer isDarkTheme={isDarkTheme}>
                    <SearchContainer isDarkTheme={isDarkTheme}>
                      <Search
                        type="search"
                        isDarkTheme={isDarkTheme}
                        color={color}
                        placeholder="Search"
                        onChange={this.InputChange}
                      />
                      <ButtonElement
                        isDarkTheme={isDarkTheme}
                        onClick={this.SearchButton}
                        type="button"
                        data-testid="searchButton"
                      >
                        <IoSearchOutline />
                      </ButtonElement>
                    </SearchContainer>
                    {renderView()}
                  </VideosContainer>
                </SecondContainer>
              </Container>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
