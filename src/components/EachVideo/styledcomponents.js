import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin: 8px;
  width: 275px;
  height: 280px;
`
export const Img = styled.img`
  width: 275px;
  height: 155px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 8px;
  width: 275px;
`
export const ChannelImg = styled.img`
  width: 35px;
  height: 35px;
`
export const Description = styled.div`
  margin-left: 8px;
`

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.color};
  margin: 0;
`
export const Details = styled.p`
  font-size: 13px;
  margin: 5px;
  color: ${props => props.color};
`
export const DurationContainer = styled.div`
  display: flex;
`
export const DotContainer = styled.div`
  display: flex;
`
export const Dot = styled(Details)`
  font-size: 30px;
  margin-top: 0px;
  margin: 0;
  padding-bottom: 14px;
  color: ${props => props.color};
`
