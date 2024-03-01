import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import Video from './components/Video'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

import NxtWatchContext from './context/LanguageContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    home: true,
    trending: false,
    gaming: false,
    saved: false,
    activeTab: 'Home',
    savedList: [],
  }

  addtoList = item => {
    const {savedList} = this.state
    const value = savedList.find(each => each.id === item.id)
    if (value === undefined) {
      this.setState(prevState => ({savedList: [...prevState.savedList, item]}))
    } else {
      this.setState(prevState => ({
        savedList: prevState.savedList.filter(each => each.id !== item.id),
      }))
    }
  }

  removeFromList = () => {}

  changeActiveTab = id => {
    this.setState({activeTab: id}, this.MenuClicked)
  }

  MenuClicked = () => {
    const {activeTab} = this.state
    if (activeTab === 'Home') {
      this.setState({home: true, trending: false, gaming: false, saved: false})
    } else if (activeTab === 'Trending') {
      this.setState({home: false, trending: true, gaming: false, saved: false})
    } else if (activeTab === 'Gaming') {
      this.setState({home: false, trending: false, gaming: true, saved: false})
    } else if (activeTab === 'Saving') {
      this.setState({
        home: false,
        trending: false,
        gaming: false,
        saved: true,
      })
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {
      isDarkTheme,
      home,
      trending,
      saved,
      gaming,
      activeTab,
      savedList,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          home,
          trending,
          saved,
          savedList,
          activeTab,
          gaming,
          changeTheme: this.changeTheme,
          MenuClicked: this.MenuClicked,
          changeActiveTab: this.changeActiveTab,
          removeFromList: this.removeFromList,
          addtoList: this.addtoList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
