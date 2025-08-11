import React from 'react'
import styles from './messageCustom.module.scss'
import Image from 'next/image'


interface IMenssage {
  url_msg: string,
  msgPrimary: string
  msgSecondary: string,

}

const MessageCustom = ({ url_msg, msgPrimary, msgSecondary }: IMenssage) => {



  return (
    <div className={styles.container_error}>
      <Image src={url_msg} alt="Error" width={500} height={250} />
      <div className={styles.error_msg}>
        <p className={styles.msg_primary}> {msgPrimary}</p>
        <p className={styles.msg_secondary}>{msgSecondary}</p>
      </div>
    </div>
  )
}

export default MessageCustom