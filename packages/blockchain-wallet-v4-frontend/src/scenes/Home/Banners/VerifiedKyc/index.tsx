import { actions, selectors } from 'data'
import { Button } from 'blockchain-info-components'
import {
  CartridgeContainer,
  Column,
  ColumnWrapper,
  SubTitle,
  Title,
  Wrapper
} from '../styles'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { SuccessCartridge } from 'components/Cartridge'
import React from 'react'

const VerifiedKyc = ({ linkABank, showCartrige, coins }) => {
  const availableBalanceOnFiat =
    coins &&
    Array.isArray(coins) &&
    coins.filter(
      coin =>
        (coin.coinCode === 'EUR' || coin.coinCode === 'GBP') &&
        coin.availableBalance
    ).length

  return (
    <Wrapper>
      <ColumnWrapper>
        <Column hideRow={showCartrige}>
          {showCartrige && (
            <CartridgeContainer>
              <SuccessCartridge>
                <FormattedMessage id='copy.new' defaultMessage='New' />
              </SuccessCartridge>
            </CartridgeContainer>
          )}
          <Title size='16px' weight={600}>
            <FormattedMessage
              id='scenes.home.banners.verifiedkyc.title'
              defaultMessage='Keep Cash in Your Wallet'
            />
          </Title>
          <SubTitle size='14px' weight={500}>
            <FormattedMessage
              id='scenes.home.banners.verifiedkyc.description'
              defaultMessage='Verify your identity to deposit cash into the Wallet and buy crypto.'
            />
          </SubTitle>
        </Column>
      </ColumnWrapper>
      <ColumnWrapper showSpacing>
        <Column>
          <Button
            nature='primary'
            data-e2e='linkABank'
            onClick={!availableBalanceOnFiat ? linkABank : null}
          >
            <FormattedMessage
              id='scenes.home.banners.nonekyc.button'
              defaultMessage='Link a Bank'
            />
          </Button>
        </Column>
      </ColumnWrapper>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  coins: selectors.components.utils
    .getSupportedCoinsWithBalanceAndOrder(state)
    // @ts-ignore
    .getOrElse({}),
  showCartrige: true
})

const mapDispatchToProps = dispatch => ({
  linkABank: () =>
    dispatch(
      actions.components.simpleBuy.handleSBDepositFiatClick(
        'EUR',
        'TransactionList'
      )
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedKyc)
