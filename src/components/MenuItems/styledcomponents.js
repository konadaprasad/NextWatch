import styled from 'styled-components'

export const FirstContainer = styled.div`
  width: 25%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#333333' : '#ffffff')};
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
export const ContactHeading = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-weight: bold;
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
