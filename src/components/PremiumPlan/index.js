import {IoClose} from 'react-icons/io5'

import {
  PremiumContainer,
  WebsiteLogo,
  FirstContainer,
  Para,
  Button,
  IconsButton,
  Icons,
} from './styledcomponents'

const PremiumPlan = props => {
  const {removePremium} = props
  const remove = () => {
    removePremium()
  }
  return (
    <PremiumContainer data-testid="banner">
      <FirstContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
        <Button type="button">GET IT NOW</Button>
      </FirstContainer>
      <IconsButton type="button" onClick={remove} data-testid="close">
        <Icons>
          <IoClose />
        </Icons>
      </IconsButton>
    </PremiumContainer>
  )
}

export default PremiumPlan
