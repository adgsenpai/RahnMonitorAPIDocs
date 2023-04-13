import React from 'react'
import Image from 'next/image'

import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <Image src="/rmIcon.png" alt="Rahn Monitor" width={40} height={40} />,
  footer: {
    text: 'Rahn Monitor',
  },
  docsRepositoryBase: 'https://github.com/Rahn-Consolidated-Pty-Ltd/RahnMonitorAPIDocs'
}



export default config
