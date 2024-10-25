export const MOODS = [
  { id: 'happy', label: 'Happy 😊', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'relaxed', label: 'Relaxed 😌', color: 'bg-green-100 text-green-800' },
  { id: 'excited', label: 'Excited 🤩', color: 'bg-pink-100 text-pink-800' },
  { id: 'impressed', label: 'Impressed 😍', color: 'bg-purple-100 text-purple-800' },
];

export const MOCK_DATA = {
  name: "My Favorite Places",
  description: "A collection of my favorite spots in the city",
  places: [
    {
      id: 1,
      name: "Central Park",
      type: "Park",
      location: "New York City",
      image: "/api/placeholder/400/300",
      experience: "ที่นี่เป็นสวนที่สวยมาก อากาศดี เหมาะกับการพักผ่อนในวันหยุด ได้มาวิ่งออกกำลังกายและปิคนิคกับครอบครัว บรรยากาศร่มรื่น",
      mood: 'relaxed',
      rating: 4.5,
      likes: 123
    },
    {
      id: 2,
      name: "Sky Bar",
      type: "Restaurant",
      location: "Downtown",
      image: "/api/placeholder/400/300",
      experience: "วิวสวยมาก โดยเฉพาะช่วงพระอาทิตย์ตก เมนูอาหารอร่อย บรรยากาศดี เหมาะสำหรับโอกาสพิเศษ",
      mood: 'impressed',
      rating: 5,
      likes: 256
    }
  ]
};

export const PLACE_TYPES = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'cafe', label: 'Cafe' },
  { value: 'park', label: 'Park' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'other', label: 'Other' }
];