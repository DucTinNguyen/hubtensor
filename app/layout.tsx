import "@/styles/globals.css";
import type { Metadata } from 'next';
import { Providers } from "./providers";
import { fontSans } from '@/config/fonts';
import clsx from "clsx";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'HubTensor',
  description: 'Hubtensor offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform.',
  metadataBase: new URL('https://dapp.hubtensor.cloud/'),
  openGraph: {
    title: 'HubTensor',
    description: 'Hubtensor offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform.',
    url: new URL('https://dapp.hubtensor.cloud/')
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>HubTensor</title>
        <meta name="description" content="Hubtensor offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform." />
        <meta property="og:url" content="https://dapp.hubtensor.cloud/"></meta>
        <meta property="og:title" content="HubTensor"></meta>
        <meta property="og:description" content="Hubtensor offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform." />
      </Head>
      <body className={clsx("font-sans antialiased", fontSans.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
