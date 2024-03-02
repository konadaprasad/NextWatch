import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
  height: 90%;
`

export const LoadingContainer = styled.div`
  height: 250px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled(LoadingContainer)`
  height: 100%;
`

export const FailureImg = styled.img`
  width: 350px;
  margin: 10px;
  margin-top: 25px;
  height: 350px;
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
export const TopContainer = styled.div`
  background: ${props => (props.isDarkTheme ? '#212121' : '#f3f3f3')};
  display: flex;
  height: 120px;
  align-items: center;
`
export const TopHeading = styled.h1`
  color: ${props => props.color};
`
