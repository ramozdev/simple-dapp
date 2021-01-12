export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      {children}
    </div>
  )
}
