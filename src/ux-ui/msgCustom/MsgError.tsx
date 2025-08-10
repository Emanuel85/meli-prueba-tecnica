import React from 'react'
import styles from './msgError.module.scss'
import Image from 'next/image'
import ImgError from '../../../public/imagen/imgError.png'

const MsgError = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <div className={styles.container_error}>
      <Image src={ImgError} alt="Error" width={500} height={250} />
      <div className={styles.error_msg}>
        <p className={styles.msg_primary}>Algo salió mal</p>
        <p className={styles.msg_secondary}>{errorMsg}</p>
      </div>
    </div>
  )
}

export default MsgError