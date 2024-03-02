import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {RiPlayListAddFill} from 'react-icons/ri'

import NxtWatchContext from '../../context/LanguageContext'

import {
  FirstContainer,
  MenuUnorderedList,
  MenuListItems,
  EachItem,
  Icons,
  MenuName,
  ContactContainer,
  ContactHeading,
  SocialIcons,
  Para,
  SocialIconsContainer,
} from './styledcomponents'

const MenuItems = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {
        isDarkTheme,
        home,
        trending,
        saved,
        gaming,
        changeActiveTab,
        activeTab,
      } = value
      const homeButton = () => {
        if (activeTab !== 'Home') {
          changeActiveTab('Home')
        }
      }
      const trendingButton = () => {
        if (activeTab !== 'Trending') {
          changeActiveTab('Trending')
        }
      }
      const gamingButton = () => {
        if (activeTab !== 'Gaming') {
          changeActiveTab('Gaming')
        }
      }
      const savedButton = () => {
        if (activeTab !== 'Saved') {
          changeActiveTab('Saved')
        }
      }
      const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
      const color = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <FirstContainer isDarkTheme={isDarkTheme}>
          <MenuUnorderedList>
            <Link to="/" className="linkElement">
              <MenuListItems
                onClick={homeButton}
                active={home}
                backgroundColor={backgroundColor}
              >
                <EachItem>
                  <Icons active={home} color={color}>
                    <AiFillHome />
                  </Icons>
                  <MenuName
                    active={home}
                    color={color}
                    isDarkTheme={isDarkTheme}
                  >
                    Home
                  </MenuName>
                </EachItem>
              </MenuListItems>
            </Link>
            <Link to="/trending" className="linkElement">
              <MenuListItems
                onClick={trendingButton}
                active={trending}
                backgroundColor={backgroundColor}
              >
                <EachItem>
                  <Icons active={trending} color={color}>
                    <HiFire />
                  </Icons>
                  <MenuName active={trending} color={color}>
                    Trending
                  </MenuName>
                </EachItem>
              </MenuListItems>
            </Link>
            <Link to="/gaming" className="linkElement">
              <MenuListItems
                onClick={gamingButton}
                active={gaming}
                backgroundColor={backgroundColor}
              >
                <EachItem>
                  <Icons active={gaming} color={color}>
                    <SiYoutubegaming />
                  </Icons>
                  <MenuName active={gaming} color={color}>
                    Gaming
                  </MenuName>
                </EachItem>
              </MenuListItems>
            </Link>
            <Link to="/saved-videos" className="linkElement">
              <MenuListItems
                onClick={savedButton}
                active={saved}
                backgroundColor={backgroundColor}
              >
                <EachItem>
                  <Icons active={saved} color={color}>
                    <RiPlayListAddFill />
                  </Icons>
                  <MenuName active={saved} color={color}>
                    Saved Videos
                  </MenuName>
                </EachItem>
              </MenuListItems>
            </Link>
          </MenuUnorderedList>
          <ContactContainer>
            <ContactHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactHeading>
            <SocialIconsContainer>
              <SocialIcons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <Para isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </Para>
          </ContactContainer>
        </FirstContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuItems
