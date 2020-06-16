import { DefaultTheme } from 'styled-components'
import { lighten } from 'polished'

const DarkTheme: DefaultTheme = {
  // USE THESE \\
  blue000: '#ECF5FE',
  blue100: '#D8EBFD',
  blue200: '#BBDBFC',
  blue300: '#85B5F8',
  blue400: '#619FF7',
  blue500: '#3D89F5',
  blue600: '#0C6CF2',
  blue700: '#1656B9',
  blue800: '#144699',
  blue900: '#0D3578',
  green000: '#E6F5EB',
  green100: '#D1F0DB',
  green200: '#B8E5C7',
  green300: '#8BDCB3',
  green400: '#59CD93',
  green500: '#339F7B',
  green600: '#00994C',
  green700: '#006B47',
  green800: '#04593D',
  green900: '#004025',
  grey000: '#50596B',
  grey100: '#50596B',
  grey200: '#B1B8C7',
  grey300: '#B1B8C7',
  grey400: '#98A1B2',
  grey500: '#828B9E',
  grey600: '#677185',
  grey700: lighten(0.1, '#50596B'),
  grey800: lighten(0.1, '#B1B8C7'),
  grey900: '#121D33',
  greyFade000: 'rgba(255, 255, 255, 0.02)',
  greyFade100: 'rgba(255, 255, 255, 0.1)',
  greyFade200: 'rgba(255, 255, 255, 0.2)',
  greyFade300: 'rgba(255, 255, 255, 0.3)',
  greyFade400: 'rgba(80, 89, 107, 0.4)',
  greyFade600: 'rgba(3, 17, 47, 0.6)',
  greyFade800: 'rgba(18, 29, 51, 0.8)',
  orange000: '#FFF2E5',
  orange100: '#FFE6CC',
  orange200: '#FFD6AD',
  orange300: '#FFC994',
  orange400: '#FFB266',
  orange500: '#F5A250',
  orange600: '#F28B24',
  orange700: '#D96716',
  orange800: '#B24400',
  orange900: '#8C2F00',
  purple000: '#EFECFE',
  purple100: '#DED8FD',
  purple200: '#C6BBFC',
  purple300: '#ADA6FF',
  purple400: '#9080FF',
  purple500: '#7349F2',
  purple600: '#5322E5',
  purple700: '#451DBF',
  purple800: '#371799',
  purple900: '#250B73',
  red000: '#FAECEB',
  red100: '#F5D9D7',
  red200: '#F0C3C0',
  red300: '#F6A7A1',
  red400: '#F28979',
  red500: '#EA5B50',
  red600: '#D93B30',
  red700: '#B2251B',
  red800: '#99180F',
  red900: '#800900',
  teal000: '#E6F8FA',
  teal100: '#D1EDF0',
  teal200: '#AEE1E6',
  teal300: '#6CD0D9',
  teal400: '#00B6C7',
  teal500: '#12A5B2',
  teal600: '#0E828C',
  teal700: '#055E66',
  teal800: '#08474C',
  teal900: '#052F33',
  whiteFade100: 'rgba(255, 255, 255, 0.1)',
  whiteFade200: 'rgba(255, 255, 255, 0.2)',
  whiteFade300: 'rgba(255, 255, 255, 0.3)',
  whiteFade400: 'rgba(255, 255, 255, 0.4)',
  whiteFade600: 'rgba(255, 255, 255, 0.6)',
  whiteFade700: 'rgba(255, 255, 255, 0.7)',
  whiteFade800: 'rgba(255, 255, 255, 0.8)',
  whiteFade900: 'rgba(255, 255, 255, 0.9)',
  btc: '#FF9B22',
  bch: '#8DC351',
  eth: '#473BCB',
  pax: '#00522C',
  stx: '#211F6D',
  'usd-d': '#00522C',
  xlm: '#797979',
  // OLD - AVOID USE \\
  // Brand
  'brand-yellow': '#665227',
  'brand-yellow-lighter': '#7F735A',
  'logo-primary': '#153A62',
  'logo-secondary': '#799EB2',
  'logo-tertiary': '#3558A8',
  'logo-quaternary': '#B2D5E5',
  'logo-quinary': '#10ADE4',
  // Exchange
  exchangeNight: '#0A0D10',
  exchangeTurquoise: '#42F1B8',
  // Action
  sent: '#D93B30',
  received: '#00994C',
  transferred: '#3D89F5',
  // State
  error: '#651D1E',
  warn: '#7F4F48',
  success: '#00422C',
  // Marketing
  'marketing-primary': '#3558A8',
  'marketing-secondary': '#153A62',
  // Whites
  white: '#1c1c1c',
  silver: '#838383',
  alwaysWhite: '#FFFFFF',
  // Blacks
  black: lighten(0.1, '#B1B8C7'),
  textBlack: '#9c9c9c',
  // Blues
  purple: '#4C18BA',
  // Service Announcements
  info: '#2C5687'
}

export default DarkTheme
