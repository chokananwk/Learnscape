import { Search } from 'lucide-react';  

export function EventFilter({ activeFilter, onFilterChange, onSearch }) {  
  return (  
    <div className="sticky top-0 z-10 p-4 bg-white shadow-md">  
      <div className="flex flex-wrap items-center justify-between gap-4 mx-auto max-w-7xl">  
        <div className="flex gap-2">  
          {['all', 'festival', 'concert', 'exhibition'].map((filter) => (  
            <button  
              key={filter}  
              onClick={() => onFilterChange(filter)}  
              className={`px-4 py-2 rounded-full transition-all ${  
                activeFilter === filter  
                  ? 'bg-blue-500 text-white'  
                  : 'bg-gray-100 hover:bg-gray-200'  
              }`}  
            >  
              {filter.charAt(0).toUpperCase() + filter.slice(1)}  
            </button>  
          ))}  
        </div>  
        
        <div className="relative">  
          <input  
            type="text"  
            placeholder="Search events..."  
            onChange={(e) => onSearch(e.target.value)}  
            className="w-full py-2 pl-10 pr-4 border rounded-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"  
          />  
          <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />  
        </div>  
      </div>  
    </div>  
  );  
}  

export function EventCard({ event }) {  
  // แปลง date string เป็น array แยกส่วน year, month, day  
  const [year, month, day] = event.date.split('-');  
  
  // สร้าง formatted date string แบบตายตัว  
  const formattedDate = `${day}/${month}/${year}`;  

  return (  
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">  
      <img  
        src={event.image}  
        alt={event.title}  
        className="object-cover w-full h-48"  
      />  
      <div className="p-4">  
        <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>  
        <p className="mb-2 text-gray-600">{event.location}</p>  
        <p className="mb-4 text-gray-500">{formattedDate}</p>  
        <button className="w-full px-4 py-2 text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600">  
          Learn More  
        </button>  
      </div>  
    </div>  
  );  
}