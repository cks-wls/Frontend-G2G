import type { ReactNode } from "react"
import SideNavigation from "@/shared/components/SideNavigation"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

  const userRole = null

  return (
    <div>
      <header />
      <SideNavigation userName={"d"} navType={userRole}/>
      <main>{children}</main>
      <footer />
    </div>
  )
}

export default Layout