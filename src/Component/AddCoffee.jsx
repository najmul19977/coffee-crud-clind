import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);
        // send data to the server 
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then (res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className=' p-24'>
            <h2 className='text-3xl'>Add coffee</h2>
            <form onSubmit={handleAddCoffee}>
               <div className='md:flex mb-4'>
               <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text ">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                    </label>
                </div>
        
               </div>
               <div className='md:flex mb-4'>
               <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text ">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <span>Supplier</span>
                        <input type="text" placeholder="Supplier" name='supplier' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <span>Taste</span>
                        <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full" />
                    </label>
                </div>
        
               </div>
               <div className='md:flex mb-4'>
               <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text ">Category</span>
                    </label>
                    <label className="input-group">
                        <span>Category</span>
                        <input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <span>Details</span>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full" />
                    </label>
                </div>
                
        
               </div>
               <div className="form-control md:w-full mb-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <span>Photo</span>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" />
                    </label>
                </div>
                
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form >
        </div >
    );
};

export default AddCoffee;