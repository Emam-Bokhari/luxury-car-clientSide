import PropTypes from "prop-types"
import Swal from "sweetalert2";

const CartData = ({ data, deleteCart }) => {
    // console.log(data);
    const { _id, name, brandName, price } = data || {}
    // console.log(_id);
    const handleDelete = (_id) => {
        console.log(_id, 'delete done');


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://luxury-car-self.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'

                            )
                            deleteCart(_id)
                        }
                    })






            }
        })




    }
    return (
        <div>

            <div className="flex md:items-center gap-2 md:gap-10 flex-wrap  my-5 text-left" >


                <h2 className="text-xl" >&#x2022;</h2>


                {/* name */}
                <div className="flex-1">
                    <h2 className="text-lg text-[#afafb7]"><span className="text-[#ff5a25]" >Name: </span>{name}</h2>
                </div>

                {/* brand name */}
                <div className="flex-1 " >
                    <p className="text-lg text-[#afafb7]" ><span className="text-[#ff5a25]">Brand Name:</span> {brandName}</p>
                </div>

                {/* price */}
                <div className="flex-1  text-base font-bold " >
                    <p className="text-lg text-[#afafb7]" ><span className="text-[#ff5a25]">Price:</span> ${price}</p>
                </div>

                {/* button */}
                <div onClick={() => handleDelete(_id)} className="flex-1 " >
                    <button className="bg-[#f00] text-xl px-3 py-1 rounded-sm font-bold text-white" >Delete</button>
                </div>
            </div>

        </div>
    );
};

CartData.propTypes = {
    data: PropTypes.object,
    deleteCart: PropTypes.func
}

export default CartData;