import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
 
const TABLE_HEAD = ["No.","Name", "Description", "Action", ""];
 



 
const CategoryList=()=> {
    const [category,setCategory]=useState([])
    useEffect(()=>{
     const category=async()=>{
        const data= await axios.get("http://localhost:5000/api/v1/category/getCategory")
        console.log(data.data.data,"18")
         setCategory(data.data.data)
     }
     category()
},[])
  return (
    <Card className="h-full w-full overflow-scroll mt-12">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {category.map(({_id, name, description,  }, index) => {
            const isLast = index === category.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index+1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </td>
               
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                  <Link to={`/editCategory/${_id}`}>
                  Edit
                  </Link>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default CategoryList