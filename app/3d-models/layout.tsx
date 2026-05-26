import { getAllCategories } from "../lib/categories";
import {ReactNode} from "react"
import Link from "next/link"
export default async function ModelsLayout({children}:{children: ReactNode}){
    const categories = getAllCategories()
    console.log(categories)
    return 
    (
        <div>
            <nav>
                <Link href="/3d-models">All</Link>
                {categories.map( cat => (
                    <Link
                    href={`/3d-models/categories/${cat.slug}`}
                    key={cat.slug}
                    >{cat.displayName}
                    </Link>
                ))}
            </nav>
            {children}
        </div>
    )
}