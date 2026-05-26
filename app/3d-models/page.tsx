import { getAllModels } from "@app/lib/models";
import type { Model } from "@app/types";

export default async function ModelListPage() {
   
const models = await getAllModels()


     return models.map((model: Model) => (
        <p key ={model.id}>{model.name}</p>
        
     ))

}