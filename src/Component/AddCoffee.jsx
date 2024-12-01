import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee =event=>{
        event.preventDefault()
        const form=event.target

        const name=form.name.value
        const chef=form.chef.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value
        const newCoffee={name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee);

        // send data to server 
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){

                Swal.fire({
                    title: 'success',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })





    }
    return (
        <div className=" items-center">
      <Link to="/">  <button className="btn">----Back to home</button></Link>
            <form onSubmit={handleAddCoffee} >
            
<div className=" items-center w-full bg-red-50 mx-auto container  ">
<div className=" mt-20">
<h1 className="text-center text-3xl font-extrabold ">Add Coffee</h1>
<p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, exercitationem?</p>
</div>
<div className="w-4/6 mx-auto">
<div className="grid grid-cols-2 gap-2">

<div>
    <p>Name</p>
<label className="input input-bordered flex items-center gap-2">

 <input type="text" name="name" className="grow" placeholder="Enter coffee name" />
</label>
</div>
<div >
    <p>Chef</p>
<label className="input input-bordered flex items-center gap-2">

 <input type="text" name="chef" className="grow" placeholder="Enter coffee chef" />
</label>
</div>
<div >
    <>Supplier</>
<label className="input input-bordered flex items-center gap-2">
 <input type="text" name="supplier" className="grow" placeholder="Enter coffee supplier" />
</label>
</div>
<div>
    <h3>Tast</h3>
<label className="input input-bordered flex items-center gap-2">
 <input type="text" name="taste" className="grow" placeholder="Enter coffee taste" />
</label>
</div>
<div >
    <p>Category</p>
<label className="input input-bordered flex items-center gap-2">

 <input type="text" name="category" className="grow" placeholder="Enter coffee category" />
</label>
</div>
<div >
    <p>Details</p>
<label className="input input-bordered flex items-center gap-2">
 <input type="text" name="details" className="grow" placeholder="Enter Coffee Details" />
</label>
</div>
</div>
<div>
    <p>Photo</p>
<label className="input input-bordered flex items-center gap-2">

<input type="text" name="photo" className="grow" placeholder="Photo Url" />
</label>
</div>
<div>
<input className="btn bg-[#d2b48c] w-full border mt-5 " type="submit" value="Add coffee" name="" id="" />
</div>
</div>
</div>

            </form>
        </div>
    );
};

export default AddCoffee;