import toast from "react-hot-toast";


const AddProduct = () => {
    const handleAddProduct = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const rating = form.rating.value
        const price = form.price.value
        const photoURL = form.photoURL.value
        const productDescription = form.productDescription.value

        const addProduct = { name, brandName, type, rating, price, photoURL, productDescription }
        // console.log(addProduct);
        // reset input field
        form.reset()

        fetch("https://luxury-car-self.vercel.app/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Product has been added successfully')
                }
            })
    }
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >

            <hr className="border-[1px] border-[#ff5a25]" />


            <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold" ><span className="text-[#ff5a25]" >Add</span> Product</h2>

            <hr className="border-[1px] border-[#ff5a25]" />

            <div className="bg-[#F3F3F3] p-6  my-5" >

                <form onSubmit={handleAddProduct} >
                    {/* name and type */}
                    <div className="flex flex-col md:flex-row gap-5 my-5 " >
                        <div className="flex-1" >
                            <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="name" placeholder="Name" />
                        </div>

                        <div className="flex-1" >
                            <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="type" placeholder="Type" />

                        </div>
                    </div>

                    {/* brand name and rating */}
                    <div className="flex flex-col md:flex-row  gap-5 my-5" >
                        <div className="flex-1" >

                            <select className="bg-white w-full p-2 rounded-sm outline-none" name="brandName">
                                <option value="" disabled selected hidden>
                                    Select a brand
                                </option>
                                <option value="BMW" >BMW</option>
                                <option value="Ford">Ford</option>
                                <option value="Honda">Honda</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Mercedes Benz">Mercedes Benz</option>
                                <option value="Toyota">Toyota</option>
                            </select>
                        </div>

                        <div className="flex-1" >
                            <input className="bg-white w-full p-2 rounded-sm outline-none" type="number" name="rating" placeholder="Rating" />
                        </div>
                    </div>

                    {/* price and  photo */}
                    <div className="flex flex-col md:flex-row  gap-5 my-5" >
                        <div className="flex-1" >
                            <input className="bg-white p-2 rounded-sm w-full outline-none" type="number" name="price" placeholder="Price" />
                        </div>

                        <div className="flex-1" >
                            <input className="bg-white w-full p-2 rounded-sm outline-none" type="text" name="photoURL" placeholder="Photo URL" />
                        </div>
                    </div>

                    {/* short description */}
                    <div className="my-5" >
                        <textarea className="w-full rounded-sm resize-none p-2 outline-none" name="productDescription" rows="10" placeholder="Product Description"></textarea>
                    </div>

                    {/* submit button */}
                    <div className="my-5" >
                        <input className="bg-[#ff5a25] w-full rounded-sm p-2 text-white font-simibold text-xl" type="submit" value="Add Product" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;