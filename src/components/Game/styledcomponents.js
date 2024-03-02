import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin: 8px;
  width: 275px;
`
export const Img = styled.img`
  width: 275px;
  height: 260px;
  margin-right: 8px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 8px;
`
export const ChannelImg = styled.img`
  width: 35px;
  height: 35px;
`
export const Description = styled.div`
  margin-left: 8px;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.color};
  margin: 0;
`
export const Details = styled.p`
  font-size: 18px;
  margin: 5px;
  color: ${props => props.color};
  margin-bottom: 20px;
`
export const DurationContainer = styled.div`
  display: flex;
`
