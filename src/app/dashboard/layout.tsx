export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div>inserted by dashboard layout</div>
        {children}
      </div>
    )
  }