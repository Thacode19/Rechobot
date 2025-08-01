import { useState } from 'react'
import Example from '../components/Header';

export default function Home() {

  const projectImages = [
    'https://res.cloudinary.com/dxu5lomow/image/upload/v1752227141/pexels-julia-m-cameron-6994946_cjsf2w.jpg',
    'https://res.cloudinary.com/dxu5lomow/image/upload/v1753536024/images_t7qrx6.jpg',
    'https://res.cloudinary.com/dxu5lomow/image/upload/v1753536312/imagessw_sqncjs.jpg'
  ];


    return(
        <div>
         <div>
          <h1>test</h1>
          </div>   
            
    {/* <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
      <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
      <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
    </div>
  </div> */}

  {/* Hero */}
  <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            
            //src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1920&q=80"
            src="https://res.cloudinary.com/dxu5lomow/image/upload/v1752226711/pexels-lalesh-167964_doegbk.jpg"
            alt="achtergrond"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Samen maken we het verschil</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-xl">
            We ondersteunen
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Doneer nu
          </a>
        </div>
      </section>

      {/* Missie */}
      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Onze Missie</h2>
          <p className="text-lg leading-relaxed">
          Vivamus faucibus orci a ante tincidunt, in efficitur urna ultrices. Fusce egestas sapien placerat mattis vehicula. Proin lacinia arcu sit amet sem imperdiet sagittis. Nulla maximus hendrerit
          </p>
        </div>
      </section>
{/* Impact */}
{/* <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Onze Impact in 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold text-purple-600">3.500+</p>
              <p className="mt-2 text-gray-700">Kinderen kregen onderwijs</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-600">1.2M</p>
              <p className="mt-2 text-gray-700">Maaltijden uitgedeeld</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-600">12</p>
              <p className="mt-2 text-gray-700">Actieve landen</p>
            </div>
          </div>
        </div>
      </section> */}
{/* Projecten */}
<section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12"> Projecten</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {['Voedselhulp', 'Onderwijs', 'Schoon water'].map((title, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <img
                  // src={`https://res.cloudinary.com/dxu5lomow/image/upload/v1752227141/pexels-julia-m-cameron-6994946_cjsf2w.jpg`}
                  
                  // alt={title}
                  // className="w-full h-48 object-cover"
                  src={projectImages[index]}
            alt={title}
            className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">Help ons dit project mogelijk te maken met jouw steun.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
  {/* Help Mee */}
  <section className="bg-purple-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Hoe jij kunt helpen</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-2">💛 Doneer</h3>
              <p>Elke bijdrage telt – klein of groot.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🙋‍♀️ Word vrijwilliger</h3>
              <p>Zet je tijd en talent in voor anderen.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📣 Start een actie</h3>
              <p>Organiseer iets in jouw buurt of online.</p>
            </div>
          </div>
        </div>
      </section>

      
        </div>
    );
}
