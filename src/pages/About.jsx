const About = () => {
    return (
      <section className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-16 px-8 overflow-hidden">
        {/* SVG Pattern Background */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="dots"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(45)"
              >
                <circle cx="10" cy="10" r="2" fill="#3B82F6" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="1440" height="800" fill="url(#dots)" />
          </svg>
        </div>
  
        {/* Content Container */}
        <div className="max-w-7xl mx-auto relative z-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="p-8 bg-white bg-opacity-90 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Over ons</h2>
            <p className="text-gray-600 mb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu justo purus. Mauris placerat, sapien dapibus porta ullamcorper, diam dui facilisis elit, a bibendum turpis sem sed ipsum. Vivamus mollis, lorem vitae egestas sollicitudin, diam augue vulputate nunc, a iaculis dui est a nulla. Maecenas semper libero pellentesque ornare cursus. Donec quis consequat ante. Aenean et ex lacus. Sed porta mauris ut nunc egestas lobortis. Phasellus vestibulum sit amet enim nec sodales. Aliquam vulputate ultrices ex nec faucibus.  </p>
            <div className="space-y-6">
              {/* Feature Card 1 */}
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>

                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Missie</h3>
                  <p className="text-gray-500 text-sm">Vivamus faucibus orci a ante tincidunt, in efficitur urna ultrices. Fusce egestas sapien placerat mattis vehicula. Proin lacinia arcu sit amet sem imperdiet sagittis. Nulla maximus hendrerit</p>
                </div>
              </div>
  
              {/* Feature Card 2 */}
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">vissie</h3>
                  <p className="text-gray-500 text-sm">Vivamus faucibus orci a ante tincidunt, in efficitur urna ultrices. Fusce egestas sapien placerat mattis vehicula. Proin lacinia arcu sit amet sem imperdiet sagittis. Nulla maximus hendrerit</p>
                </div>
              </div>
  
              {/* Feature Card 3 */}
              {/* <div className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-purple-200 via-blue-200 to-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 0012 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 0016 14zM8 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 004 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 008 14zM12 4c-2.21 0-4 1.79-4 4 0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3 0-2.21-1.79-4-4-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Customer Centric</h3>
                  <p className="text-gray-500 text-sm">Your satisfaction is our priority — we listen, adapt, and deliver beyond expectations.</p>
                </div>
              </div> */}
            </div>
          </div>
  
          {/* Image with Overlay & Hover Effect */}
          <div className="relative p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-100 rounded-4xl shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
            <img
              src="https://res.cloudinary.com/dxu5lomow/image/upload/v1750766646/WhatsApp_Image_2025-06-14_at_12.46.09_PM_vwcten.jpg"
              alt="About Us"
              className="relative rounded-4xl shadow-xl object-cover w-full h-full hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  