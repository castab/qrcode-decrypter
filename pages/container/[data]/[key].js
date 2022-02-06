import { useRouter } from 'next/router'
import CryptoJS from 'crypto-js'

export default function Container() {
    const router = useRouter()
    const { data, key } = router.query

    if (data == null || key == null) return null

    const bytes = CryptoJS.AES.decrypt(data, key)
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)

    return (
    <div>
        <p>Contents: {decryptedData}</p>
    </div>
        )
}