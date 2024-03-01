import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
  height: 90%;
`
export const FirstContainer = styled.div`
  width: 25%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#333333' : '#ffffff')};
`
export const SecondContainer = styled.div`
  width: 75%;
  height: 100%;
  overflow-y: scroll;
`
export const MenuUnorderedList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const MenuListItems = styled.li`
  list-style-type: none;
  padding: 6px;
  background-color: ${props =>
    props.active ? props.backgroundColor : 'transparent'};
  padding-left: 15px;
  cursor: pointer;
`
export const EachItem = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
`
export const Icons = styled.p`
  font-size: 25px;
  margin: 0px;
  margin-left: 20px;
  color: ${props => (props.active ? '#ff0000' : props.color)};
`
export const MenuName = styled.p`
  font-size: 18px;
  margin: 0px;
  margin-left: 25px;
  margin-bottom: 6px;
  color: ${props => props.color};
  font-weight: ${props => (props.active ? 'bold' : 'light')};
`
export const ContactContainer = styled.div`
  margin-left: 25px;
  width: 60%;
`
export const ContactHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const SocialIconsContainer = styled.div`
  display: flex;
`
export const SocialIcons = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`
export const Para = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-weight: 500;
  font-size: 17px;
`
export const VideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : ' #f1f1f1')};
  padding-top: 30px;
`
export const SearchContainer = styled.div`
  width: 350px;
  background-color: transparent;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#333333')};
  background-color: transparent;
  margin-left: 18px;
`
export const Search = styled.input`
  padding: 8px;
  width: 85%;
  background-color: ${props => (props.isDarkTheme ? '#333333' : '#ffffff')};
  color: ${props => props.color};
  outline: none;
  border: 0 none;
`
export const ButtonElement = styled.button`
  text-align: center;
  border: 0 none;
  border-left: 1px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#333333')};
  width: 15%;
  font-size: 18px;
  background-color: ${props => (props.isDarkTheme ? '#333333' : '#f1f1f1')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#333333')};
  cursor: pointer;
  outline: none;
`
export const VideosUnorderedList = styled.ul`
  margin-left: 18px;
  margin-bottom: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const LoadingContainer = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled(LoadingContainer)`
  height: 100%;
  margin: 25px;
  margin-bottom: 0;
`

export const FailureImg = styled.img`
  width: 350px;
  height: 350px;
  margin: 8px;
`
export const FailureHeading = styled.h1`
  color: ${props => props.color};
`
export const FailurePara = styled.p`
  margin: 5px;
  color: ${props => props.color};
`
export const FailureRetryButton = styled.button`
  width: 100px;
  padding: 8px;
  color: #ffffff;
  margin: 12px;
  background-color: #4f46e5;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: 0 none;
`
