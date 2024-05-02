// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Body = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity,setSelectedCity] = useState('');


  

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(setSelectedDate);
    setFormData({...formData,date:selectedDate});
  };
  const handleSelectCity = (event) => {
    setSelectedCity(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      city: selectedCity,
    }));
  };
  
  const [formData, setFormData] = useState({
    // Initialize form fields here
    first_name:'',
    last_name: '',
    kids_name: '',
    email: '',
    phone:'',
    city:''
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://30dc-hackathon.vercel.app/submit", formData);
      // Handle successful form submission here
      
      console.log(response.data);
      
    } catch (error) {
      // Handle form submission error here
      console.error(500);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="flex flex-col md:flex-row ">
        <div className="absolute top-0 -left-1 w-96 h-96 bg-bgSecondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-6 right-12 w-96 h-96 bg-bgPrimary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
        <div className="absolute top-56 right-96 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-56 left-96 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-4 -left-8 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className=" justify-center items-center m-40 w-full md:pr-4 md:w-1/2 h-auto">
          <h1 className="text-6xl font-extrabold text-red-900">
            TinyBud Program
          </h1>
          <br />
          <p className="text-2xl font-semibold text-red-900">
            Growing Minds, Nurturing Futures at Tiny Sprouts Academy!
          </p>
          <div className="relative max-w-xl mx-auto mt-20 -z-50">
            <img
              className="h-fit w-full object-cover rounded-md mix-blend-color-burn"
              src="https://www.shutterstock.com/image-vector/border-template-four-happy-kids-600nw-530186413.jpg"
              alt="Random image"
            />

            <div className="absolute inset-0 flex items-center justify-center mt-32 ">
              <h2 className="text-white text-3xl font-extralight font-mono">
                {" "}
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 md:pl-4 m-40  justify-center items-center border-1 p-6 shadow-2xl shadow-gray-800 rounded-lg  h-fit bg-blend-overlay">
          <form className="mix-blend-color-dodge" onSubmit={handleFormSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-xl font-medium text-gray-900 :text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="First name of parent *"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-xl font-medium text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Second name of parent *"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="kids_name"
                  className="block mb-2 text-xl font-medium text-gray-900 :text-white"
                >
                  Kids Name
                </label>
                <input
                  type="text"
                  id="kids_name"
                  name="kids_name"
                  value={formData.kids_name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  placeholder="Toddler's name *"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-xl font-medium text-gray-900 :text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  placeholder="Enter phone number *"
                  pattern="^[789][0-9]{9}$"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-gray-900 :text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="Contact email *"
                required
              />
            </div>
            <div className="mb-6">
            <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-gray-900 :text-white"
              >
                City
              </label>
                <select name="city" id="city" 
                
                onChange={handleSelectCity}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500">
                  <option value="">Select city</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="chennai">Chennai</option>
                </select>
                
              </div>

            <label className="block mb-2 text-xl font-medium text-gray-900 :text-white">
              Date of Birth
            </label>
            <div className="relative max-w-sm mb-5">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
                showIcon={true}
                name="date"
                
                
              />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 :bg-gray-700 :border-gray-600 :focus:ring-blue-600 :ring-offset-gray-800"
                  required
                />
              </div>

              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline :text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Enquire
            </button>
          </form>
        </div>
      </section>

      <section className="md:m-20 m-4 h-auto items-center bg-bgPrimary bg-opacity-25 p-4 md:p-8 rounded-md" id="ourpre">
        <div className="text-center font-extrabold text-4xl md:text-5xl text-red-800 m-10 md:m-20">
          <h1>Our Preschool Programs</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly mt-10">
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://www.eurokidsindia.com/ek-new-2023/images/Home/EuroSenior.webp"
                alt=""
              />
            </div>

            <div className="p-6">
              <h2 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 text-center">
                PlayGroup
              </h2>
              <h3 className="text-red-800 font-bold text-xl text-center">
                2 to 3 years
              </h3>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed mt-2">
                Discovery and exploration, language development, new-age skills,
                and shaping scientific mindset.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://img.freepik.com/free-photo/profile-view-group-preschool-students-raising-their-hands-trying-participate-school_662251-1735.jpg?t=st=1713971275~exp=1713974875~hmac=2ac260f258919735ddf4a41a2b99207c10e8638edf6c682b3980bd514cea764e&w=1380"
                alt="Nursery"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 text-center">
                Nursery
              </h2>
              <h3 className="text-red-800 font-bold text-xl text-center">
                3 to 4 years
              </h3>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed mt-2">
                Enhancing interaction, cultivating creativity and improving
                imagination through art and music.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://img.freepik.com/free-photo/group-preschool-kids-working-writing-assigment-classroom_662251-1631.jpg?t=st=1713971358~exp=1713974958~hmac=18432f7beea8d7f6df8ae4b37b397043c38334d92692a43bc70dffd44bec05c0&w=1380"
                alt="Tiny Junior"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 text-center">
                Tiny Junior
              </h2>
              <h3 className="text-red-800 font-bold text-xl text-center">
                4 to 5 years
              </h3>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed mt-2">
                Age-appropriate learning and educational tools suited for
                individual pace.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://img.freepik.com/free-photo/happy-kids-elementary-school_53876-138141.jpg?t=st=1713971487~exp=1713975087~hmac=d8ea94903d5475b6d04e6d3ec32ec60b59d7cb5dee4ebec62ea101b2e86d7997&w=1380"
                alt="Tiny Senior"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 text-center">
                Tiny Senior
              </h2>
              <h3 className="text-red-800 font-bold text-xl text-center">
                5 to 6 years
              </h3>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed mt-2">
                Developing vocabulary, attention span, reading and writing
                skills with innovative methods and preparing for primary school.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="m-4 md:m-20 bg-pink-300 w-auto bg-opacity-25 rounded-md p-4 md:p-8 h-auto md:h-screen">
        <div className="text-4xl md:text-5xl text-red-800 text-center font-extrabold mt-10 md:mt-20">
          Fun at TinyBuds
        </div>
        <div className="text-base md:text-xl text-red-800 text-center font-semibold mt-10 md:mt-20">
          We&#39;re all about making learning fun
        </div>
        <div className="m-4 md:m-10">
        <Slider dots={true} infinite={true} slidesToShow={3}  slidesToScroll={1}
         responsive={[
          {
            breakpoint: 768, // Medium screens and larger
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        >
          
          <div className="px-2 md:px-3">
          <div className="bg-white shadow-xl shadow-red-300 rounded px-4 md:px-8 py-4 text-center ml-2 md:ml-3 me-3 md:me-3 h-72 md:h-80">
            <div className="font-bold text-xl mb-2 text-red-800">Annual Day
            </div>
            <img src="/assets/fireworks.png" alt="" className="h-40 my-8 block mx-auto"/>
            
          </div>
          </div>
          
          <div className="px-2 md:px-3">
          <div className="bg-white shadow-xl shadow-red-300 rounded px-4 md:px-8 py-4 text-center ml-2 md:ml-3 me-3 md:me-3 h-72 md:h-80">
            <div className="font-bold text-xl mb-2 text-red-800">Graduation Day</div>
            <img src="/assets/grad.png" alt="" className="h-40 my-8 mb-4 block mx-auto"/>
          </div>
          </div>
          
          <div className="px-2 md:px-3">
          <div className="bg-white shadow-xl shadow-red-300 rounded px-4 md:px-8 py-4 text-center ml-2 md:ml-3 me-3 md:me-3 h-72 md:h-80">
            <div className="font-bold text-xl mb-2 text-red-800">Celebrations and Events</div>
            <img src="/assets/fest.png" alt="" className="h-40 my-8 block mx-auto"/>
          </div>
          </div>
          
          <div className="px-2 md:px-3">
          <div className="bg-white shadow-xl shadow-red-300 rounded px-4 md:px-8 py-4 text-center ml-2 md:ml-3 me-3 md:me-3 h-72 md:h-80">
            <div className="font-bold text-xl mb-2 text-red-800">Health is Wealth Day</div>
            <img src="/assets/health.png" alt="" className="h-40 my-8 block mx-auto"/>
          </div>
          </div>
        </Slider>
        </div>
      </section>
      
    </>
  );
};

export default Body;
