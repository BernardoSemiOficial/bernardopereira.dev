import { ReactElement, memo, useEffect } from 'react'
import TagManager from 'react-gtm-module'

type GoogleTagManagerProps = {
  children: ReactElement
}

const GTMID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

const GoogleTagManager = ({ children }: GoogleTagManagerProps) => {
  useEffect(() => {
    if (GTMID) {
      TagManager.initialize({
        gtmId: GTMID,
        dataLayer: {
          environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
        },
      })
    }
  }, [])

  return children
}

export default memo(GoogleTagManager)
