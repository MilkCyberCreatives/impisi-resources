// src/components/Header.tsx
import TopBar from '@/components/nav/TopBar'
import MainNav from '@/components/nav/MainNav'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <TopBar />
      <MainNav />
    </header>
  )
}
