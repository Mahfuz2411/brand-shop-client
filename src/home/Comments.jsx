const Comments = () => {
  return (
    <div className="bg-orange-100">
      <div className="container m-auto py-10">
        <h2 className="text-center text-xl md:text-3xl font-bold">
          We value your comments
        </h2>
        <form className="m-auto">
          <div className="md:flex">
            <div className="form-control w-full py-3 md:py-5 px-10">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  name="name"
                  className="input input-bordered join-item w-full"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="form-control w-full py-3 md:py-5 px-10">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="join">
                <input
                  type="email"
                  name="email"
                  className="input input-bordered join-item w-full"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
          </div>
          {/* Form Short Description row*/}
          <div className="md:flex">
            <div className="form-control w-full py-3 md:py-5 px-10">
              <label className="label">
                <span className="label-text">Comment</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  name="comment"
                  className="input input-bordered join-item w-full"
                  placeholder="Your Comment"
                />
              </div>
            </div>
          </div>
          <div className="form-control w-full py-3 md:py-5 px-10">
            <div className="join">
              <input
                type="submit"
                name="Submit"
                className="btn btn-block btn-neutral"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
