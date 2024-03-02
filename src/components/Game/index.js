import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/LanguageContext'

import {
  ListItem,
  Img,
  DescriptionContainer,
  Description,
  Title,
  Details,
  DurationContainer,
} from './styledcomponents'

import '../../App.css'

const VideoList = props => {
  const {item} = props
  const {id, title, thumbnailUrl, viewCount} = item
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, game} = value
        const color = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <Link to={`/videos/${id}`} className="linkElement">
            <ListItem>
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <Description>
                  <Title color={color}>{title}</Title>
                  <DurationContainer>
                    <Details color={color}>
                      {viewCount} Watching Worldwide
                    </Details>
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

export default VideoList
