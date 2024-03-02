import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {RiPlayListAddFill} from 'react-icons/ri'

import Header from '../Header'

import MenuItems from '../MenuItems'

import VideoList from '../VideosList'

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

class SavedVideos extends Component {
  state = {view: ApiView.loading}

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, changeActiveTab, activeTab, savedList} = value
          const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
          const color = isDarkTheme ? '#ffffff' : '#000000'
          if (activeTab !== 'Saving') {
            changeActiveTab('Saving')
          }

          return (
            <MainContainer isDarkTheme={isDarkTheme} data-testid="savedVideos">
              <Header />
              <Container>
                <MenuItems />
                <SecondContainer data-testid="banner">
                  {savedList.length > 0 ? (
                    <>
                      <TopContainer isDarkTheme={isDarkTheme}>
                        <Icons color={color} backgroundColor={backgroundColor}>
                          <RiPlayListAddFill />
                        </Icons>
                        <TopHeading color={color}>Saved Videos</TopHeading>
                      </TopContainer>
                      <VideosUnorderedList>
                        {savedList.map(each => (
                          <VideoList key={each.id} item={each} />
                        ))}
                      </VideosUnorderedList>
                    </>
                  ) : (
                    <FailureContainer>
                      <FailureImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <FailureHeading color={color}>
                        No saved videos found
                      </FailureHeading>
                      <FailurePara color={color}>
                        You can save your videos while watching them
                      </FailurePara>
                    </FailureContainer>
                  )}
                </SecondContainer>
              </Container>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default SavedVideos
