const Subscription = () => {
  return (
    <div className="bg-white py-16 rounded-t-md">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex md:flow-row justify-between items-center gap-20">
          {/* left text */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Subscribe to our newsletter.
            </h3>
            <p className="mt-4 text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              sunt eveniet soluta maxime officiis aut incidunt excepturi sint.
            </p>
          </div>

          <div className="sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
            <label htmlFor="email-address" className="sr-only">
              Email Address
            </label>
            <input
               id="email-address"
               name="email"
               type="email"
               autoComplete="email"
               required
               className="flex-auto rounded-md border-0 bg-primary px-3.5 py-4 text-white shadow-md sm:text-sm sm:leading-6 focus:outline-btnColor"
               placeholder="Enter your email"
               />
               <button type="submit" className="flex-none rounded-md bg-btnColor px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-btnColor hover:border-btnColor hover:border">
                 Subscribe
               </button>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Subscription;