import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);
        // send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className=' p-24'>
            <h2 className='text-3xl'>Update coffee:{name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text ">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="Coffee Name" defaultValue={name} name='name' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="Available Quantity" defaultValue={quantity} name='quantity' className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Supplier" defaultValue={supplier} name='supplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" placeholder="Taste" name='taste' defaultValue={taste} className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Category" defaultValue={category} name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" placeholder="Details" name='details' defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>
                <div className="form-control md:w-full mb-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <span>Photo</span>
                        <input type="text" placeholder="Photo URL" defaultValue={photo} name='photo' className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form >
        </div >
)};

export default UpdateCoffee;