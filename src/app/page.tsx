import MessageCustom from '@/ux-ui/msgCustom/MessageCustom'
import React from 'react'

const Home = () => {
  return (<>
    <MessageCustom
      url_msg={'/imagen/welcome.png'}
      msgPrimary={'Bienvenido a Meli Challenge'}
      msgSecondary={"Antes de comenzar visita el README del proyecto."} />
  </>
  )
}

export default Home