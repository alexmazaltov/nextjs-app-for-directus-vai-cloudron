export const metadata = {
  metadataBase: new URL("https://app.cloud.alefinvest.xyz"),
  title: 'NGI | New Generation Institutes',
  description: 'Invest in Auction.',
  keywords: [
    "invest in auction",
    "referral program",
    "make money online",
    "social media",
  ],
  applicationName: "Invest-in-Auction",
  authors: [{ name: "Alex Mazaltov" }],
  category: "Affiliate marketing",
  openGraph: {
    type: "website",
    countryName: "Ukraine",
    images: ["https://app.cloud.alefinvest.xyz/ngi-logo.jpeg"],
    siteName: "Invest.Auction",
    title: "NGI | New Generation Institutes",
    description: "Invest in Auction.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://app.cloud.alefinvest.xyz/ngi-logo.jpeg"],
    title: "NGI | New Generation Institutes",
    description: "Invest in Auction. Get more money from your traffic.",
  },
  // Additional properties for icons and manifest
  icons: {
    appleTouchIcon: "/apple-touch-icon.png",
    favicon32: "/favicon-32x32.png",
    favicon16: "/favicon-16x16.png",
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">

      <body>{children}</body>
    </html>
  )
}
