import React from 'react'
import { Cabecalho } from './style'
import LogoCrunchyroll from '../../imagens/crunchyroll-logo.svg'
import LogoFunimation from '../../imagens/funimation.svg'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
const Header = ({toogleTheme}) => {

  const {title} = React.useContext(ThemeContext)
  return (
    <>
    <Switch onChange={toogleTheme} checked={title === "funimation"} checkedIcon={false} uncheckedIcon={false} height={10} width={35} handleDiameter={20} offColor="#322659" onColor="#df6300" offHandleColor="#805ad5" onHandleColor="#df6300"/>
    <Cabecalho>
      <img src={title === "funimation" ? LogoFunimation : LogoCrunchyroll} alt="logo animes" />
    </Cabecalho>
    </>
  )
}

export default Header
