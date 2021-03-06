import { any, map, values } from 'ramda'
import { Icon, TabMenu, TabMenuItem, Text } from 'blockchain-info-components'
import React, { useState } from 'react'
import styled from 'styled-components'

import { coinOrder } from 'blockchain-wallet-v4-frontend/src/modals/Swap/CoinSelection/selectors'
import { FlyoutWrapper } from 'components/Flyout'
import { Form, InjectedFormProps, reduxForm } from 'redux-form'
import { FormattedMessage } from 'react-intl'
import {
  getCoinFromPair,
  getFiatFromPair
} from 'data/components/simpleBuy/model'
import { Props as OwnProps, SuccessStateType } from '../index'
import { SBPairType } from 'core/types'
import { SwapAccountType } from 'data/types'
import CryptoAccountOption from 'blockchain-wallet-v4-frontend/src/modals/Swap/CoinSelection/CryptoAccountOption'
import CryptoItem from './CryptoItem'
import SellEmptyState from './SellEmptyState'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`
const TabsContainer = styled.div`
  margin-top: 36px;
  display: inline-block;
`
const Currencies = styled.div`
  border-top: 1px solid ${props => props.theme.grey000};
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`
const TopText = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`
const SubTitleText = styled(Text)`
  margin-top: 0;
`

export type Props = OwnProps & SuccessStateType

const CryptoSelector: React.FC<InjectedFormProps<{}, Props> &
  Props> = props => {
  const [orderType, setOrderType] = useState(props.orderType)
  const handleBuy = (pair: SBPairType) => {
    props.simpleBuyActions.setStep({
      step: 'ENTER_AMOUNT',
      orderType,
      cryptoCurrency: getCoinFromPair(pair.pair),
      fiatCurrency: getFiatFromPair(pair.pair),
      pair
    })
  }
  const isInvited = props.invitations.simpleSell2dot0
  const isInvitedShowNC = (swapAccount: SwapAccountType) => {
    if (swapAccount.type === 'CUSTODIAL') {
      return true
    } else if (swapAccount.type === 'ACCOUNT' && !isInvited) {
      return false
    } else {
      return true
    }
  }
  const handleSell = (swapAccount: SwapAccountType) => {
    const pair = props.pairs.find(
      value => getCoinFromPair(value.pair) === swapAccount.coin
    )

    if (!pair) return

    props.simpleBuyActions.setStep({
      step: 'ENTER_AMOUNT',
      swapAccount,
      orderType,
      cryptoCurrency: getCoinFromPair(pair.pair),
      fiatCurrency: getFiatFromPair(pair.pair),
      pair
    })
    // reset form values so order doesn't hold values
    // if user changes wallet/coin
    props.formActions.change('simpleBuyCheckout', 'amount', '')
  }

  // Check to see if any accounts have balance

  // @ts-ignore
  const checkAccountsBalances = any(hasFunds => hasFunds)(
    // @ts-ignore
    values(
      // @ts-ignore
      map(
        // @ts-ignore
        coin => any(acct => acct.balance !== 0 && acct.balance !== '0')(coin),
        // @ts-ignore
        props.accounts
      )
    )
  )

  return (
    <Wrapper>
      <Form>
        <FlyoutWrapper>
          <Top>
            <Icon cursor name='cart-filled' size='32px' color='blue600' />
            <Icon
              cursor
              data-e2e='sbCloseModalIcon'
              name='close'
              size='20px'
              color='grey600'
              role='button'
              onClick={props.handleClose}
            />
          </Top>
          <TopText color='grey800' size='20px' weight={600}>
            <FormattedMessage
              id='modals.simplebuy.cryptoselect'
              defaultMessage='Buy Crypto. Sell for Cash.'
            />
          </TopText>
          <SubTitleText color='grey600' weight={500}>
            <FormattedMessage
              id='modals.simplebuy.select_crypto'
              defaultMessage='Easily buy and sell Crypto straight from your Wallet.'
            />
          </SubTitleText>
          <TabsContainer>
            <TabMenu>
              <TabMenuItem
                role='button'
                selected={orderType === 'BUY'}
                onClick={() => {
                  setOrderType('BUY')
                  props.analyticsActions.logEvent('SB_BUY_BUTTON')
                }}
                data-e2e='sbBuyButton'
              >
                <FormattedMessage
                  id='buttons.buy_crypto'
                  defaultMessage='Buy Crypto'
                />
              </TabMenuItem>
              <TabMenuItem
                role='button'
                selected={orderType === 'SELL'}
                onClick={() => {
                  setOrderType('SELL')
                  props.analyticsActions.logEvent('SB_SELL_BUTTON')
                }}
                data-e2e='sbSellButton'
              >
                <FormattedMessage
                  id='buttons.sell_crypto'
                  defaultMessage='Sell Crypto'
                />
              </TabMenuItem>
            </TabMenu>
          </TabsContainer>
        </FlyoutWrapper>
        <Currencies>
          {orderType === 'SELL' ? (
            checkAccountsBalances ? (
              coinOrder.map(coin => {
                const accounts = props.accounts[coin] as Array<SwapAccountType>
                return accounts.map(
                  account =>
                    account.balance !== '0' &&
                    account.balance !== 0 &&
                    isInvitedShowNC(account) && (
                      <CryptoAccountOption
                        account={account}
                        coins={props.coins}
                        isAccountSelected={false}
                        isSwap={false}
                        onClick={() => handleSell(account)}
                        walletCurrency={props.walletCurrency}
                      />
                    )
                )
              })
            ) : (
              <SellEmptyState handleClose={props.handleClose} />
            )
          ) : (
            props.pairs.map((value, index) => (
              <CryptoItem
                key={index}
                orderType={orderType}
                fiat={getFiatFromPair(value.pair)}
                coin={getCoinFromPair(value.pair)}
                onClick={() => handleBuy(value as SBPairType)}
              />
            ))
          )}
        </Currencies>
      </Form>
    </Wrapper>
  )
}

export default reduxForm<{}, Props>({
  form: 'sbCryptoSelection',
  destroyOnUnmount: false
})(CryptoSelector)
