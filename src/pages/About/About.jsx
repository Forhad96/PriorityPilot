const About = () => {
    return (
      <div className="sm:flex items-center max-w-7xl mx-auto">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" className="w-full" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Priority-Pilot was founded in 2020 by friends John and Jane who
              previously worked at large enterprise companies. They frequently
              saw teams struggling to keep projects organized and on track, with
              lots of email threads, spreadsheets, sticky notes, and no central
              overview. 
            </p>
          </div>
        </div>
      </div>
    );
};
export default About;