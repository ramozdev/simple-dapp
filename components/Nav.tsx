import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900">
      <div className="h-12 px-4 mx-auto max-w-screen-lg flex justify-between items-center">
        <header>Dapp</header>
        <Link href="/#">
          <a>Github</a>
        </Link>
      </div>
    </nav>
  )
}
