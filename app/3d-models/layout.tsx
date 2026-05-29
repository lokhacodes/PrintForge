/**
 * Challenge: Style the active categories links
 * 
 * Note: Be sure to think about what you're turning into a client
 * component, and restructure the app if needed
 */

import NavLink from "@/app/components/NavLink"
import type { ReactNode } from "react"

import CategoriesNav from "@/app/components/categoriesNav"
export default function ModelsLayout({ children }: { children: ReactNode }) {

  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Responsive Navigation */}
    
       <CategoriesNav />
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}