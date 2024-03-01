import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/LanguageContext'

import {
  MainContainer,
  LoginContainter,
  ImageElement,
  FormElement,
  InputElement,
  LabelElement,
  CheckboxLabel,
  Checkbox,
  ButtonElement,
  Container,
  ErrorPara,
} from './styledcomponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: false,
    errorMsg: '',
    showPassword: false,
  }

  submitButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const usernameDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(usernameDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      console.log(history)
      history.replace('/')
    } else {
      this.setState({error: true, errorMsg: data.error_msg})
    }
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  showPasswordClicked = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, error, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? '#ffffff' : '#000000'
          return (
            <MainContainer isDarkTheme={isDarkTheme}>
              <LoginContainter isDarkTheme={isDarkTheme}>
                <ImageElement
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormElement onSubmit={this.submitButton}>
                  <LabelElement htmlFor="Username" color={color}>
                    USERNAME
                  </LabelElement>
                  <InputElement
                    type="text"
                    value={username}
                    onChange={this.usernameChange}
                    placeholder="Username"
                    id="Username"
                    color={color}
                    isDarkTheme={isDarkTheme}
                  />
                  <LabelElement htmlFor="Password" color={color}>
                    PASSWORD
                  </LabelElement>
                  {showPassword ? (
                    <InputElement
                      type="text"
                      value={password}
                      placeholder="Password"
                      onChange={this.passwordChange}
                      id="Password"
                      isDarkTheme={isDarkTheme}
                      color={color}
                    />
                  ) : (
                    <InputElement
                      type="password"
                      value={password}
                      placeholder="Password"
                      onChange={this.passwordChange}
                      id="Password"
                      isDarkTheme={isDarkTheme}
                      color={color}
                    />
                  )}
                  <Container>
                    <Checkbox
                      type="checkbox"
                      id="showPassword"
                      onClick={this.showPasswordClicked}
                    />
                    <CheckboxLabel htmlFor="showPassword" color={color}>
                      Show Password
                    </CheckboxLabel>
                  </Container>
                  <ButtonElement type="submit">Login</ButtonElement>
                  {error ? <ErrorPara>*{errorMsg}</ErrorPara> : null}
                </FormElement>
              </LoginContainter>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
