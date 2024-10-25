'use client';

import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import PlaceCard from './components/PlaceCard';
import AddPlaceModal from './components/AddPlaceModal';
import { MOCK_DATA } from './constants';

export default function CollectionPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [places, setPlaces] = useState(MOCK_DATA.places);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDelete = (id) => {
    setPlaces(places.filter(place => place.id !== id));
  };

  const handleLike = (id) => {
    setPlaces(places.map(place => 
      place.id === id 
        ? { ...place, likes: place.likes + 1 }
        : place
    ));
  };

  const handleAddPlace = (newPlace) => {
    setPlaces([...places, { ...newPlace, id: places.length + 1 }]);
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Places</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            {!isMobile && "Add Place"}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              onDelete={handleDelete}
              onLike={handleLike}
            />
          ))}
        </div>
      </div>

      {showCreateModal && (
        <AddPlaceModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleAddPlace}
        />
      )}
    </div>
  );
}