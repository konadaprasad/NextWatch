import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../context/LanguageContext'

import {
  ListItem,
  Img,
  DescriptionContainer,
  ChannelImg,
  Description,
  Title,
  Details,
  DurationContainer,
  DotContainer,
  Dot,
} from './styledcomponents'

import '../../App.css'

const EachVideo = props => {
  const {item} = props
  const {id, channel, title, publishedAt, thumbnailUrl, viewCount} = item
  const {name, profileImageUrl} = channel
  const newDate = new Date(publishedAt)
  const year = newDate.getFullYear()
  const date = newDate.getDate()
  const month = newDate.getMonth()
  const duration = formatDistanceToNow(new Date(year, month, date))
  const newDuration = duration.split(' ')
  newDuration.splice(0, 1)
  const finalDuration = newDuration.join(' ')
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <Link to={`/videos/${id}`} className="linkElement">
            <ListItem>
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <ChannelImg src={profileImageUrl} alt="channel logo" />
                <Description>
                  <Title color={color}>{title}</Title>
                  <Details color={color}>{name}</Details>
                  <DurationContainer>
                    <Details color={color}>{viewCount} views</Details>
                    <DotContainer>
                      <Dot color={color}>
                        <BsDot />
                      </Dot>
                      <Details color={color}>{finalDuration} ago</Details>
                    </DotContainer>
                  </DurationContainer>
                </Description>
              </DescriptionContainer>
            </ListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default EachVideo
