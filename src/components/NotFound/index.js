import NxtWatchContext from '../../context/LanguageContext'

import Header from '../Header'

import MenuItems from '../MenuItems'

import {
  FailureContainer,
  MainContainer,
  Container,
  FailureImg,
  FailurePara,
  FailureHeading,
} from './styledcomponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
      const color = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <MainContainer isDarkTheme={isDarkTheme}>
          <Header />
          <Container>
            <MenuItems />
            <FailureContainer data-testid="banner">
              <FailureImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <FailureHeading color={color}>Page Not Found</FailureHeading>
              <FailurePara color={color}>
                We are sorry, the page you requested could not be found.
              </FailurePara>
            </FailureContainer>
          </Container>
        </MainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
