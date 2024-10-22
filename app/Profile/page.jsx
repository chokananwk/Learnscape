"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Profile() {
  const [bio, setBio] = useState('Web developer and coffee enthusiast');
  const [isEditing, setIsEditing] = useState(false);
  const [newBio, setNewBio] = useState('');
  const [profileImage, setProfileImage] = useState('/api/placeholder/128/128');
  
  // Mock data for posts
  const posts = [

    { id: 1, image: '/api/placeholder/300/300' },
    { id: 2, image: '/api/placeholder/300/300' },
    { id: 3, image: '/api/placeholder/300/300' },// Add more mock posts as needed
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);// TODO: Send the image to your API when implemented
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBioUpdate = () => {
    setBio(newBio);
    setIsEditing(false);
    // TODO: Send the updated bio to your API when implemented
  };
  return (  
    <div className="min-h-screen from-blue-50 to-indigo-100">  
      <main className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">  
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-[1.02]">  
          <div className="md:flex">  
            <div className="md:flex-shrink-0">  
              <div className="relative w-full h-48 md:w-48">  
                <Image  
                  src={profileImage}  
                  alt="Profile"  
                  layout="fill"  
                  objectFit="cover"  
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"  
                />  
                <label   
                  htmlFor="profile-image-upload"   
                  className="absolute p-2 text-white transition-colors duration-300 bg-blue-500 rounded-full cursor-pointer bottom-2 right-2 hover:bg-blue-600"  
                >  
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />  
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />  
                  </svg>  
                </label>  
                <input  
                  id="profile-image-upload"  
                  type="file"  
                  className="hidden"  
                  accept="image/*"  
                  onChange={handleImageUpload}  
                />  
              </div>  
            </div>  
            <div className="flex flex-col justify-between p-8">  
              <div>  
                <h1 className="mb-2 text-3xl font-bold text-gray-900">John Doe</h1>  
                <p className="mb-4 text-blue-600text-sm">john.doe@example.com</p>  
                {isEditing ? (  
                  <div className="flex space-x-2">  
                    <input  
                      type="text"  
                      value={newBio}  
                      onChange={(e) => setNewBio(e.target.value)}  
                      className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  
                    />  
                    <button  
                      onClick={handleBioUpdate}  
                      className="px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"  
                    >  
                      Save  
                    </button>  
                  </div>  
                ) : (  
                  <div className="relative group">  
                    <p className="text-gray-600">{bio}</p>  
                    <button  
                      onClick={() => {  
                        setIsEditing(true);  
                        setNewBio(bio);  
                      }}  
                      className="absolute top-0 text-blue-500 transition-opacity duration-300 opacity-0 -right-6 group-hover:opacity-100"  
                    >  
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">  
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />  
                      </svg>  
                    </button>  
                  </div>  
                )}  
              </div>  
              <div className="mt-6">  
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Skills</h2>  
                <div className="flex flex-wrap gap-2">  
                  {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL'].map((skill) => (  
                    <span key={skill} className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">  
                      {skill}  
                    </span>  
                  ))}  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  

        <div className="mt-12">  
          <div className="flex items-center justify-between mb-6">  
            <h2 className="text-2xl font-bold text-gray-900">Posts</h2><button className="px-4 py-2 text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105">  
              Add New Post  
            </button>  
          </div>  
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">  
            {posts.map((post) => (  
              <div key={post.id} className="overflow-hidden transition-all transform bg-white rounded-lg shadow-md hover:scale-105">  
                <div className="relative h-48">  
                  <Image  
                    src={post.image}  
                    alt={`Post ${post.id}`}  
                    layout="fill"  
                    objectFit="cover"  
                  />  
                </div>  
                <div className="p-4">  
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Post Title {post.id}</h3>  
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </main>  
    </div>  
  );  
}  