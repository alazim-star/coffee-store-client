import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const{_id,name,supplier,chef,photo}=coffee
    const handleDelete=_id=>{
console.log(_id);
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
fetch(`http://localhost:5000/coffee/${_id}`,{
    method: "DELETE"
  
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if (data.deletedCount > 0) {
  Swal.fire({
        title: "Deleted!",
        text: "Your Coffee has been deleted.",
        icon: "success"
      });
      const remaining=coffees.filter(cof=>cof._id !==_id)
      setCoffees(remaining)
        
    }
})
    }
  });
    }
    return (
        <div>
           <div class="card  bg-[#f5f4f1] shadow-md border border-gray-200 p-8 ">
  <div class="flex items-center justify-around">
    {/* <!-- Image --> */}
    <div>
      <img
        src={photo} 
        alt="Coffee Image" 
        class="rounded w-24"
      />
    </div>
    {/* <!-- Details --> */}
    <div>
      <p >Name: {name}</p>
      <p >Chef: <span className="text-gray-600">{chef}</span></p>
      <p >Price: <span className="text-gray-600">890 Taka
     </span>
      </p>
    </div>
    {/* <!-- Actions --> */}
    <div class="flex flex-col justify-end gap-2 ">
      <button class="btn bg-[#d2b48c] btn-sm">
      <FaEye className="text-white" />
      </button>
      <Link to={`updateCoffee/${_id}`}><button  class="btn btn-sm bg-[#3c393b]">
     <FaPen className="text-white"  />
      </button></Link>
      <button onClick={()=>handleDelete(_id)} class="btn btn-sm btn-error">
        <MdDelete className="text-white"  />
      </button>
    </div>
  </div>
</div>
 
        </div>
    );
};

export default CoffeeCard;