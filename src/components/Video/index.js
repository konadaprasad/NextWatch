import {Component, React} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike} from 'react-icons/ai'

import {BiDislike} from 'react-icons/bi'

import {RiMenuAddFill} from 'react-icons/ri'

import {BsDot} from 'react-icons/bs'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {
  MainContainer,
  VideoContainer,
  Container,
  LoadingContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  Icons,
  IconsContainer,
  FailureRetryButton,
  SubscriberPara,
  Title,
  BottomContainer,
  DurationContainer,
  Details,
  Dot,
  Text,
  EachIcon,
  Horizontal,
  ChannalDescription,
  DotContainer,
  DescriptionContainer,
  ChannelName,
  ChannelImg,
  Description,
  SecondContainer,
} from './styledcomponents'

import Header from '../Header'

import MenuItems from '../MenuItems'

import NxtWatchContext from '../../context/LanguageContext'

const ApiView = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Video extends Component {
  state = {
    view: ApiView.loading,
    videoItem: [],
    like: false,
    disLike: false,
    save: false,
  }

  componentDidMount = () => {
    this.getVideo()
  }

  getVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const newData = data.video_details
      const updatedData = {
        id: newData.id,
        description: newData.description,
        videoUrl: newData.video_url,
        channel: {
          name: newData.channel.name,
          profileImageUrl: newData.channel.profile_image_url,
          subscriberCount: newData.channel.subscriber_count,
        },
        publishedAt: newData.published_at,
        thumbnailUrl: newData.thumbnail_url,
        viewCount: newData.view_count,
        title: newData.title,
      }
      this.setState({videoItem: updatedData, view: ApiView.success})
    } else {
      this.setState({view: ApiView.failure})
    }
  }

  RetryButton = () => {
    this.setState({view: ApiView.loading}, this.getVideo)
  }

  likeClicked = () => {
    this.setState(prevState => ({like: !prevState.like, disLike: false}))
  }

  dislikeClicked = () => {
    this.setState(prevState => ({disLike: !prevState.disLike, like: false}))
  }

  saveClicked = () => {
    this.setState(prevState => ({save: !prevState.save}))
  }

  render() {
    const {like, disLike} = this.state
    let {save} = this.state
    let saveValue
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, addtoList, savedList} = value
          const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
          const color = isDarkTheme ? '#ffffff' : '#000000'
          const renderSuccessView = () => {
            const {videoItem} = this.state
            const {
              id,
              channel,
              title,
              publishedAt,
              thumbnailUrl,
              viewCount,
              description,
              videoUrl,
            } = videoItem
            const Exits = savedList.find(each => each.id === id)
            if (Exits !== undefined) {
              save = true
              saveValue = 'Saved'
            } else {
              save = false
              saveValue = 'Save'
            }
            const {name, profileImageUrl, subscriberCount} = channel
            const newDate = new Date(publishedAt)
            const year = newDate.getFullYear()
            const date = newDate.getDate()
            const month = newDate.getMonth()
            const duration = formatDistanceToNow(new Date(year, month, date))
            const newDuration = duration.split(' ')
            newDuration.splice(0, 1)
            const finalDuration = newDuration.join(' ')
            const saveClicked = () => {
              this.setState(
                prevState => ({save: !prevState.save}),
                addtoList(videoItem),
              )
            }
            return (
              <SecondContainer data-testid="banner">
                <VideoContainer isDarkTheme={isDarkTheme}>
                  <ReactPlayer
                    width="100%"
                    height="460px"
                    url={videoUrl}
                    controls
                  />
                  <Title color={color}>{title}</Title>
                  <BottomContainer>
                    <DurationContainer>
                      <Details color={color}>{viewCount} views</Details>
                      <DotContainer>
                        <Dot color={color}>
                          <BsDot />
                        </Dot>
                        <Details color={color}>{finalDuration} ago</Details>
                      </DotContainer>
                    </DurationContainer>
                    <IconsContainer>
                      <EachIcon clicked={like}>
                        <Icons clicked={like}>
                          <AiOutlineLike />
                        </Icons>
                        <Text
                          type="button"
                          clicked={like}
                          onClick={this.likeClicked}
                        >
                          Like
                        </Text>
                      </EachIcon>
                      <EachIcon clicked={disLike}>
                        <Icons clicked={disLike}>
                          <BiDislike />
                        </Icons>
                        <Text
                          type="button"
                          clicked={disLike}
                          onClick={this.dislikeClicked}
                        >
                          Dislike
                        </Text>
                      </EachIcon>
                      <EachIcon clicked={save}>
                        <Icons clicked={save}>
                          <RiMenuAddFill />
                        </Icons>
                        <Text
                          type="button"
                          clicked={save}
                          onClick={saveClicked}
                        >
                          {saveValue}
                        </Text>
                      </EachIcon>
                    </IconsContainer>
                  </BottomContainer>
                  <Horizontal backgroundColor={color} />
                  <DescriptionContainer>
                    <ChannelImg src={profileImageUrl} alt="channel logo" />
                    <Description>
                      <ChannelName color={color}>{name}</ChannelName>
                      <SubscriberPara color={color}>
                        {subscriberCount} subscribers
                      </SubscriberPara>
                      <ChannalDescription color={color}>
                        {description}
                      </ChannalDescription>
                    </Description>
                  </DescriptionContainer>
                </VideoContainer>
              </SecondContainer>
            )
          }

          const renderLoadingView = () => (
            <LoadingContainer data-testid="banner">
              <div className="loader-container" data-testid="loader">
                <Loader type="ThreeDots" color={color} height="50" width="50" />
              </div>
            </LoadingContainer>
          )

          const renderFailureView = () => (
            <FailureContainer data-testid="banner">
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
                We are having some trouble to complete your request. Please try
                again.
              </FailurePara>
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
            <MainContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <Container>
                <MenuItems />
                {renderView()}
              </Container>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Video
