import { useState } from 'react';
import {
  FaCalendarAlt,
  FaUserMd,
  FaMobileAlt,
  FaShieldAlt,
  FaSearch,
  FaRegClock,
  FaRegCalendarCheck,
  FaMapMarkerAlt,
  FaStar,
  FaRegStar,
  FaChevronRight,
} from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';

export default function DoctorAppointmentLanding() {
  const [activeTab, setActiveTab] = useState('doctors');
  const [searchQuery, setSearchQuery] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 128,
      distance: '1.2 miles',
      available: 'Today, 4:30 PM',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      rating: 4.7,
      reviews: 94,
      distance: '0.8 miles',
      available: 'Tomorrow, 10:00 AM',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Dr. Priya Patel',
      specialty: 'Pediatrician',
      rating: 4.8,
      reviews: 156,
      distance: '2.1 miles',
      available: 'Today, 3:00 PM',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const specialties = [
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Neurology',
    'Orthopedics',
    'Ophthalmology',
    'Dentistry',
    'General Medicine',
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <MdHealthAndSafety className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                HealthConnect
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Features
              </a>
              <a
                href="#doctors"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Doctors
              </a>
              <a
                href="#specialties"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Specialties
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Testimonials
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg">
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Healthcare when</span>
                  <span className="block text-blue-600">you need it most</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Book appointments with top-rated doctors instantly. Our
                  platform connects you with healthcare providers in your area
                  with just a few clicks.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#doctors"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                      >
                        Find a Doctor
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#how-it-works"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                      >
                        How it works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Doctor with patient"
          />
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/3">
                <label
                  htmlFor="specialty"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Specialty
                </label>
                <div className="relative">
                  <select
                    id="specialty"
                    className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                  >
                    <option>Select a specialty</option>
                    {specialties.map((specialty) => (
                      <option key={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="City or ZIP code"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Appointment Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <button className="w-full md:w-auto mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                <FaSearch className="mr-2" />
                Search Doctors
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Why choose HealthConnect
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Healthcare made simple
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white shadow-lg">
                      <FaCalendarAlt className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Instant Booking
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Book appointments in seconds with our intuitive platform.
                      No phone calls or waiting needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white shadow-lg">
                      <RiCustomerService2Fill className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      24/7 Support
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Our dedicated support team is available round the clock to
                      assist you with any queries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white shadow-lg">
                      <FaShieldAlt className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Secure & Private
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Your health information is protected with bank-level
                      security and strict privacy controls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div id="doctors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Top Rated Doctors
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                Book appointments with highly-rated healthcare professionals
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex rounded-lg shadow-sm">
                <button
                  onClick={() => setActiveTab('doctors')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeTab === 'doctors'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Doctors
                </button>
                <button
                  onClick={() => setActiveTab('clinics')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'clinics'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Clinics
                </button>
                <button
                  onClick={() => setActiveTab('hospitals')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeTab === 'hospitals'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Hospitals
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={doctor.image}
                      alt={doctor.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {doctor.name}
                      </h3>
                      <p className="text-gray-600">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < Math.floor(doctor.rating) ? (
                                <FaStar className="text-yellow-400" />
                              ) : (
                                <FaRegStar className="text-gray-300" />
                              )}
                            </span>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-500">
                          ({doctor.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-1.5 h-4 w-4 text-gray-400" />
                      <span>{doctor.distance} away</span>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <FaRegClock className="mr-1.5 h-4 w-4 text-gray-400" />
                      <span>Available {doctor.available}</span>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">
                    $120 - $200
                  </span>
                  <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    Book Now
                    <FaChevronRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              View All Doctors
            </button>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div id="specialties" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Medical Specialties
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Find the right specialist for your healthcare needs
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {specialties.map((specialty) => (
                <div
                  key={specialty}
                  className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <div className="w-full flex items-center justify-center">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                        <FaUserMd className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      {specialty}
                    </h3>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div className="w-0 flex-1 flex">
                        <a
                          href="#"
                          className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                        >
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Process
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How HealthConnect Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get the care you need in just a few simple steps
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="hidden lg:block absolute top-0 left-1/2 h-full border-l-2 border-gray-300 border-dashed transform -translate-x-1/2"></div>
              <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white shadow-lg mx-auto lg:mx-0">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center lg:text-left">
                    Search & Select
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-center lg:text-left">
                    Find the perfect doctor by specialty, location, or
                    availability. View profiles, ratings, and reviews.
                  </p>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white shadow-lg mx-auto lg:mx-0">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center lg:text-left">
                    Book Your Visit
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-center lg:text-left">
                    Choose your preferred date and time from real-time
                    availability. Instant confirmation with no waiting.
                  </p>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white shadow-lg mx-auto lg:mx-0">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center lg:text-left">
                    Visit & Heal
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-center lg:text-left">
                    Get reminders before your appointment. Attend your visit and
                    receive the care you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our patients say
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Patient testimonial"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Jennifer K.
                    </h4>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  "I was able to find a pediatrician for my son within minutes.
                  The booking process was so simple and the doctor was
                  wonderful. Highly recommend!"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://randomuser.me/api/portraits/men/54.jpg"
                      alt="Patient testimonial"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Robert T.
                    </h4>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  "As someone who travels frequently, being able to book doctors
                  in different cities has been a game-changer. The platform is
                  incredibly user-friendly."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Patient testimonial"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Maria S.
                    </h4>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  "I needed to see a specialist quickly and HealthConnect helped
                  me find an appointment the next day. The doctor was excellent
                  and the whole experience was seamless."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to take control of</span>
            <span className="block">your healthcare?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of patients who have found quality care through
            HealthConnect.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Sign up for free
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                For Doctors
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    List Your Practice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Doctor Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Connect With Us
              </h3>
              <div className="mt-4 flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <span className="sr-only">Privacy Policy</span>
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <span className="sr-only">Terms</span>
                Terms
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 HealthConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
