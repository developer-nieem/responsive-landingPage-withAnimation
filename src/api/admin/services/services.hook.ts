import { useQuery } from "@tanstack/react-query"
import { getData } from "./services.api"

export const useGetServices = () => {

    const servicesData =  useQuery({
        queryKey : ["services"],
        queryFn : getData,
        select : (data) => {
           const services = data?.data.map((service) =>( {
            id : service.id,
            name: service.name,
            username : service.username,
            website : service.website
           })) 
           return services
            
        }
       })

       return servicesData

}