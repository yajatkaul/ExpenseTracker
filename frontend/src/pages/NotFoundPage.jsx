const NotFound = () => {
  return (
    <section>
      <div className=" text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center flex flex-col items-center justify-center">
            <div>
              <img src="/notfound.png" alt="404" className="h-[300px]" />
            </div>
            <p className="text-sm md:text-base text-white p-2 mb-4">
              The stuff you were looking for doesn't exist
            </p>
            <a
              href="/"
              className="bg-transparent hover:bg-black text-white rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent"
            >
              Take me home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
