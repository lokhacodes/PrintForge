import {getCategoryBySlug} from "@app/lib/categories";
import type {CategoryPageProps} from "@/types"


export default async function CategoryPage({params}: CategoryPageProps){
   const [categoryName] = await params
    const category = getCategoryBySlug(categoryName)
    console.log(category)
    return <h1> This is the {category.displayName} category page </h1>
} 
   