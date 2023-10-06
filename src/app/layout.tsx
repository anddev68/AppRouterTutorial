import { WithCounter } from "./WithCounter"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <WithCounter>
            <div>inserted by root layout</div>
            {children}
           </WithCounter>
        </body>
      </html>
    )
  }