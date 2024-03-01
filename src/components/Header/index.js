import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import '../../App.css'

import {FaMoon} from 'react-icons/fa'

import {IoMenu} from 'react-icons/io5'

import {FiLogOut} from 'react-icons/fi'

import {BsBrightnessHigh} from 'react-icons/bs'

import NxtWatchContext from '../../context/LanguageContext'

import {
  NavBar,
  UnorderedList,
  NavItemContainer,
  NavListItem,
  Icons,
  IconImages,
  LogoutButton,
  SmallIconImages,
  WebsiteLogo,
  PoPButton1,
  PoPButton2,
  IconsButton,
  PopUpContainer,
  PopPara,
  PopButtonContainer,
} from './styledcomponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value
      const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
      const buttonBackgroundColor = isDarkTheme ? '#000000' : '#ffffff'
      const color = isDarkTheme ? '#ffffff' : '#000000'
      const Theme = () => {
        changeTheme()
      }

      const logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      return (
        <NavBar isDarkTheme={isDarkTheme}>
          <UnorderedList>
            <Link to="/" className="linkElement">
              <NavListItem>
                <WebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </NavListItem>
            </Link>

            <NavItemContainer>
              <NavListItem>
                <IconsButton type="button" onClick={Theme} data-testid="theme">
                  <Icons isDarkTheme={isDarkTheme}>
                    {isDarkTheme ? <BsBrightnessHigh /> : <FaMoon />}
                  </Icons>
                </IconsButton>
              </NavListItem>

              <NavListItem>
                <IconImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <SmallIconImages>
                  <IoMenu />
                </SmallIconImages>
              </NavListItem>
              <NavListItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <>
                      <PopUpContainer
                        buttonBackgroundColor={buttonBackgroundColor}
                      >
                        <PopPara isDarkTheme={isDarkTheme}>
                          Are you sure, you want to logout
                        </PopPara>
                        <PopButtonContainer>
                          <PoPButton1
                            isDarkTheme={isDarkTheme}
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </PoPButton1>
                          <PoPButton2
                            type="button"
                            onClick={logout}
                            isDarkTheme={isDarkTheme}
                          >
                            Confirm
                          </PoPButton2>
                        </PopButtonContainer>
                      </PopUpContainer>
                    </>
                  )}
                </Popup>
                <SmallIconImages>
                  <FiLogOut />
                </SmallIconImages>
              </NavListItem>
            </NavItemContainer>
          </UnorderedList>
        </NavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
