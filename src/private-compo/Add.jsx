import Swal from 'sweetalert2'
const Add = () => {
  const handleAddCoffee = event =>{
    event.preventDefault();

    const form = event.target;

    const name = form.Name.value;
    const quantity = form.Quantity.value;
    const suplier = form.Suplier.value;
    const taste = form.Taste.value;
    const category = form.Category.value;
    const details = form.Details.value;
    const photo = form.Photo.value;

    const newCoffee = {name, quantity, suplier, taste, category, details, photo};

    // send data to the server
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId) {
        Swal.fire({
          title: 'Succes',
          text: 'Coffee added succesfully',
          icon: 'succes',
          confirmButtonText: 'Ok'
        })
      }
    })
  }
  return (
    <div className="bg-[#F4F3F0] md:p-24">
      <h1 className="text-3xl font-extrabold text-center">ADD A CAR</h1>
      <form onSubmit={handleAddCoffee} action="">
        {/* Form name and Price row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Name"
                className="input input-bordered join-item w-full"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <div className="join">
              <input
                type="number"
                name="Price"
                className="input input-bordered join-item w-full"
                placeholder="Price"
              />
            </div>
          </div>
        </div>
        {/* Form Brand Name and Model row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Brand"
                className="input input-bordered join-item w-full"
                placeholder="Brand Name"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Model</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Model"
                className="input input-bordered join-item w-full"
                placeholder="Model"
              />
            </div>
          </div>
        </div>
        {/* Form Image URL and Rating row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Image"
                className="input input-bordered join-item w-full"
                placeholder="Image URL"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Rating"
                className="input input-bordered join-item w-full"
                placeholder="Rating (1-5)"
              />
            </div>
          </div>
        </div>
        {/* Form Short Description row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Description"
                className="input input-bordered join-item w-full"
                placeholder="Short description"
              />
            </div>
          </div>
        </div>
        <div className="form-control w-full p-10">
          <div className="join">
            <input
              type="submit"
              name="Submit"
              className="btn btn-block btn-primary"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
