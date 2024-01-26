import { useGetServices } from "@/api/admin/services/services.hook";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash } from "lucide-react";



const ServicesList = () => {

    const {data : services , isError , isLoading} =  useGetServices()

    if (isError) {
        return "something wrong"
    }

    if (isLoading) {
        return <p>Loading .....</p>
    }
    
   
       
    
    return (
       <Table>
      <TableHeader>
        <TableRow>
          <TableHead >Name</TableHead>
          <TableHead>user</TableHead>
          <TableHead>website</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell className="font-medium">{service.name}</TableCell>
            <TableCell>{service.username}</TableCell>
            <TableCell>{service.website}</TableCell>
            <TableCell className="text-right">  <Button variant={"destructive"}><Trash/></Button> </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{services.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    );
};

export default ServicesList;