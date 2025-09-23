// Card images
import paris from "../assets/paris.jpg";
import tokyo from "../assets/tokyo.jpg";
import maldives from "../assets/maldives.jpg";
import pokhara from "../assets/pokhara.jpg";
import rome from "../assets/rome.jpg";
import newyork from "../assets/newyork.jpg";
import bali from "../assets/bali.jpg";
import sydney from "../assets/sydney.jpg";
import london from "../assets/london.jpg";
import santorini from "../assets/santorini.jpg";
import dubai from "../assets/dubai.jpg";
import rio from "../assets/rio.jpg";
import seoul from "../assets/seoul.jpg";
import kyoto from "../assets/kyoto.jpg";
import beijing from "../assets/beijing.jpg";
import shanghai from "../assets/shanghai.jpg";

// Detail images (compressed)
import parisDetail from "../assets/detail/compressed/parisDetail.webp";
import tokyoDetail from "../assets/detail/compressed/tokyoDetail.webp";
import maldivesDetail from "../assets/detail/compressed/maldivesDetail.webp";
import pokharaDetail from "../assets/detail/compressed/pokharaDetail.webp";
import romeDetail from "../assets/detail/compressed/romeDetail.webp";
import newyorkDetail from "../assets/detail/compressed/newyorkDetail.webp";
import baliDetail from "../assets/detail/compressed/baliDetail.webp";
import sydneyDetail from "../assets/detail/compressed/sydneyDetail.webp";
import londonDetail from "../assets/detail/compressed/londonDetail.webp";
import santoriniDetail from "../assets/detail/compressed/santoriniDetail.webp";
import dubaiDetail from "../assets/detail/compressed/dubaiDetail.webp";
import rioDetail from "../assets/detail/compressed/rioDetail.webp";
import seoulDetail from "../assets/detail/compressed/seoulDetail.webp";
import kyotoDetail from "../assets/detail/compressed/kyotoDetail.webp";
import beijingDetail from "../assets/detail/compressed/beijingDetail.webp";
import shanghaiDetail from "../assets/detail/compressed/shanghaiDetail.webp";

const data = [
  {
    id: 1,
    image: paris,
    detailImage: parisDetail,
    name: "Paris, France",
    description: "City of lights, love, and timeless landmarks.",
    detailDesc: `Paris, the capital of France, is renowned for its romantic ambiance, stunning architecture, and rich history. Wander through charming streets lined with cafes, visit world-famous landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, and enjoy the vibrant nightlife. Stroll along the Seine River, explore boutique shops, and savor French cuisine, including pastries, cheese, and wine. Paris is a city that perfectly blends history, culture, and modern elegance, offering experiences for art lovers, foodies, and romantics alike.`,
    price: "$799",
    rating: 50,
    category: "City",
    highlights: [
      "Eiffel Tower & Seine River Cruise",
      "Romantic atmosphere & nightlife",
      "Rich art & history (Louvre, Versailles)",
    ],
  },
  {
    id: 2,
    image: tokyo,
    detailImage: tokyoDetail,
    name: "Tokyo, Japan",
    description: "A blend of tradition and futuristic vibes.",
    detailDesc: `Tokyo, Japan’s bustling capital, offers an extraordinary mix of modern skyscrapers, neon lights, and centuries-old temples. Visitors can explore historic sites like the Meiji Shrine, wander through serene gardens, and enjoy traditional tea ceremonies. Tokyo is also a culinary paradise, famous for sushi, ramen, and street food markets. From the fashion-forward districts of Shibuya and Harajuku to the cutting-edge technology of Akihabara, Tokyo offers a unique experience blending tradition, innovation, and culture for travelers of all interests.`,
    price: "$899",
    rating: 45,
    category: "City",
    highlights: [
      "Tokyo Skytree & Shibuya Crossing",
      "Traditional temples & shrines",
      "Sushi & street food adventures",
    ],
  },
  {
    id: 3,
    image: maldives,
    detailImage: maldivesDetail,
    name: "Maldives",
    description: "Tropical paradise with turquoise waters.",
    detailDesc: `The Maldives is a tropical paradise in the Indian Ocean, famous for its crystal-clear turquoise waters, white sandy beaches, and luxurious overwater villas. Visitors can indulge in world-class snorkeling and diving, exploring vibrant coral reefs teeming with marine life. Relax in a private resort, enjoy breathtaking sunsets, or embark on island-hopping adventures. The Maldives offers a serene escape from the hustle and bustle of everyday life, making it perfect for honeymooners, beach lovers, and anyone seeking tranquility and natural beauty.`,
    price: "$999",
    rating: 45,
    category: "Beach",
    highlights: [
      "Overwater villas & resorts",
      "Crystal-clear snorkeling spots",
      "Unforgettable sunset views",
    ],
  },
  {
    id: 4,
    image: pokhara,
    detailImage: pokharaDetail,
    name: "Pokhara, Nepal",
    description: "Adventure hub surrounded by the Himalayas.",
    detailDesc: `Pokhara, nestled in the foothills of the Himalayas, is Nepal’s adventure capital. Known for its serene Phewa Lake, spectacular mountain views, and vibrant trekking culture, Pokhara offers activities like paragliding, boating, and hiking. The city is also a gateway to the Annapurna Circuit, one of the most famous trekking routes in the world. Visitors can explore caves, waterfalls, and local markets while enjoying breathtaking sunrises and sunsets against the Himalayan backdrop.`,
    price: "$499",
    rating: 45,
    category: "Mountain",
    highlights: [
      "Scenic Phewa Lake boat rides",
      "Paragliding with mountain views",
      "Gateway to Annapurna treks",
    ],
  },
  {
    id: 5,
    image: rome,
    detailImage: romeDetail,
    name: "Rome, Italy",
    description: "Historic ruins and cultural treasures.",
    detailDesc: `Rome, the eternal city, is a living museum of history, art, and culture. Visitors can explore ancient landmarks such as the Colosseum, Roman Forum, and Pantheon. Vatican City, home to St. Peter’s Basilica and the Sistine Chapel, offers unmatched religious and artistic experiences. Wander through cobblestone streets, enjoy authentic Italian cuisine, and soak in the vibrant atmosphere of piazzas and fountains. Rome seamlessly blends antiquity with modern life, providing an unforgettable travel experience.`,
    price: "$699",
    rating: 45,
    category: "Historical",
    highlights: [
      "Colosseum & Roman Forum",
      "St. Peter’s Basilica & Vatican",
      "Authentic Italian cuisine",
    ],
  },
  {
    id: 6,
    image: newyork,
    detailImage: newyorkDetail,
    name: "New York, USA",
    description: "The city that never sleeps.",
    detailDesc: `New York City, famously known as “The City That Never Sleeps,” is a dynamic metropolis brimming with iconic landmarks and diverse culture. From Times Square and Broadway shows to Central Park and the Statue of Liberty, the city offers endless attractions. Explore world-class museums, dine in diverse restaurants, and enjoy vibrant nightlife. NYC’s unique neighborhoods, skyline, and cultural experiences make it a must-visit destination for travelers seeking excitement, history, and innovation.`,
    price: "$850",
    rating: 50,
    category: "City",
    highlights: [
      "Times Square & Broadway shows",
      "Central Park escape",
      "Iconic Statue of Liberty",
    ],
  },
  {
    id: 7,
    image: bali,
    detailImage: baliDetail,
    name: "Bali, Indonesia",
    description: "Island paradise with beaches and rice terraces.",
    detailDesc: `Bali, Indonesia, is a tropical haven known for its pristine beaches, lush rice terraces, and rich cultural heritage. Visitors can explore temples like Uluwatu and Tanah Lot, enjoy water sports, and experience traditional Balinese dance performances. Bali’s vibrant nightlife, yoga retreats, and scenic landscapes attract travelers seeking relaxation and adventure alike. From surfing on Kuta Beach to exploring the artistic town of Ubud, Bali offers diverse experiences for every type of traveler.`,
    price: "$799",
    rating: 45,
    category: "Beach",
    highlights: [
      "Ubud rice terraces & temples",
      "Surf-friendly beaches",
      "Traditional Balinese culture",
    ],
  },
  {
    id: 8,
    image: sydney,
    detailImage: sydneyDetail,
    name: "Sydney, Australia",
    description: "Famous Opera House and stunning harbor.",
    detailDesc: `Sydney, Australia, is a vibrant coastal city famous for its stunning harbor, iconic Opera House, and Harbour Bridge. Visitors can enjoy Bondi Beach for surfing, take coastal walks along the cliffs, or explore the Royal Botanic Gardens. Sydney also offers thriving food and arts scenes, lively markets, and cultural festivals. The combination of urban sophistication and natural beauty makes Sydney an exciting and diverse travel destination.`,
    price: "$950",
    rating: 40,
    category: "City",
    highlights: [
      "Sydney Opera House & Harbour Bridge",
      "Bondi Beach surfing",
      "Scenic coastal walks",
    ],
  },
  {
    id: 9,
    image: london,
    detailImage: londonDetail,
    name: "London, UK",
    description: "Historic landmarks with modern vibes.",
    detailDesc: `London, the capital of the United Kingdom, is a bustling city blending historic landmarks and modern attractions. Visitors can see the Tower of London, Big Ben, Buckingham Palace, and the London Eye. Explore world-class museums like the British Museum, enjoy theater in the West End, and stroll through charming neighborhoods. London’s rich history, diverse culture, and vibrant lifestyle make it a captivating destination for travelers from around the world.`,
    price: "$870",
    rating: 50,
    category: "City",
    highlights: [
      "Big Ben & Buckingham Palace",
      "London Eye city views",
      "World-class museums",
    ],
  },
  {
    id: 10,
    image: santorini,
    detailImage: santoriniDetail,
    name: "Santorini, Greece",
    description: "White-washed cliffs and amazing sunsets.",
    detailDesc: `Santorini, Greece, is famed for its stunning white-washed buildings, blue-domed churches, and spectacular sunsets. Visitors can explore the towns of Fira and Oia, relax on unique volcanic beaches, and enjoy local cuisine including fresh seafood and traditional Greek dishes. Santorini also offers hiking trails, archaeological sites, and romantic atmospheres, making it a perfect destination for couples and photographers alike.`,
    price: "$920",
    rating: 50,
    category: "Beach",
    highlights: [
      "Blue-domed churches",
      "Unforgettable sunset in Oia",
      "Beaches with volcanic sand",
    ],
  },
  {
    id: 11,
    image: dubai,
    detailImage: dubaiDetail,
    name: "Dubai, UAE",
    description: "Luxury, desert adventures, and modern architecture.",
    detailDesc: `Dubai, UAE, is a city of luxury, innovation, and adventure. Visitors can marvel at the world’s tallest building, the Burj Khalifa, enjoy shopping in extravagant malls, and explore desert landscapes with safaris and dune bashing. Dubai also offers stunning beaches, waterparks, and vibrant nightlife. With futuristic architecture and a blend of traditional Arabian culture, Dubai provides an unforgettable experience for thrill-seekers, shoppers, and culture enthusiasts.`,
    price: "$1100",
    rating: 45,
    category: "City",
    highlights: [
      "World’s tallest Burj Khalifa",
      "Luxury shopping & resorts",
      "Desert safari experience",
    ],
  },
  {
    id: 12,
    image: rio,
    detailImage: rioDetail,
    name: "Rio de Janeiro, Brazil",
    description: "Carnival vibes with stunning beaches and mountains.",
    detailDesc: `Rio de Janeiro, Brazil, is famous for its vibrant Carnival, beautiful beaches, and dramatic mountains. Visitors can hike to Christ the Redeemer, relax on Copacabana and Ipanema beaches, and explore the Tijuca National Park. Rio offers lively music, samba dancing, and a festive atmosphere year-round. Its combination of natural beauty, cultural vibrancy, and iconic landmarks makes it an unforgettable destination.`,
    price: "$880",
    rating: 45,
    category: "Beach",
    highlights: [
      "Christ the Redeemer statue",
      "Copacabana beach",
      "Lively Carnival festival",
    ],
  },
  {
    id: 13,
    image: seoul,
    detailImage: seoulDetail,
    name: "Seoul, South Korea",
    description: "Dynamic city with modern skyscrapers and historic palaces.",
    detailDesc: `Seoul, South Korea’s capital, is a dynamic city that seamlessly blends modernity with tradition. Explore historic palaces like Gyeongbokgung, enjoy vibrant shopping in Myeongdong, and savor Korean BBQ and street food. Seoul is also known for its cutting-edge technology, entertainment, and cultural festivals. From tranquil temples to bustling nightlife, Seoul offers diverse experiences for every traveler, combining history, innovation, and culture.`,
    price: "$780",
    rating: 45,
    category: "City",
    highlights: [
      "Gyeongbokgung Palace",
      "Shopping in Myeongdong",
      "Delicious Korean BBQ",
    ],
  },
  {
    id: 14,
    image: kyoto,
    detailImage: kyotoDetail,
    name: "Kyoto, Japan",
    description: "Traditional temples, gardens, and cherry blossoms.",
    detailDesc: `Kyoto, Japan, is a city steeped in tradition and beauty, famous for its historic temples, serene gardens, and cherry blossom seasons. Visitors can explore the Golden Pavilion (Kinkaku-ji), stroll through bamboo forests, and participate in traditional tea ceremonies. Kyoto’s preserved culture, seasonal festivals, and scenic landscapes offer a peaceful yet enriching travel experience, ideal for history enthusiasts, nature lovers, and photographers.`,
    price: "$820",
    rating: 50,
    category: "Historical",
    highlights: [
      "Golden Pavilion (Kinkaku-ji)",
      "Bamboo forests",
      "Spring cherry blossoms",
    ],
  },
  {
    id: 15,
    image: beijing,
    detailImage: beijingDetail,
    name: "Beijing, China",
    description: "Great Wall, Forbidden City, and rich cultural heritage.",
    detailDesc: `Beijing, China’s capital, is a city with a rich historical and cultural legacy. Visitors can walk along the Great Wall, explore the Forbidden City, and visit Tiananmen Square. Beijing is also known for its traditional hutongs, classical gardens, and culinary delights like Peking duck. Combining ancient traditions with modern city life, Beijing offers an immersive cultural experience that captivates history lovers, foodies, and travelers alike.`,
    price: "$850",
    rating: 45,
    category: "Historical",
    highlights: [
      "The Great Wall of China",
      "Forbidden City & Tiananmen",
      "Authentic Beijing duck",
    ],
  },
  {
    id: 16,
    image: shanghai,
    detailImage: shanghaiDetail,
    name: "Shanghai, China",
    description: "Modern skyline, river views, and vibrant city life.",
    detailDesc: `Shanghai is a bustling metropolis blending futuristic skyscrapers with historic neighborhoods. Visitors can stroll along The Bund for riverside views, visit the Oriental Pearl Tower, and shop along Nanjing Road. The city offers vibrant nightlife, cultural exhibitions, and a variety of international cuisine. Shanghai’s unique combination of tradition and modernity makes it an exciting destination for business, culture, and leisure travelers.`,
    price: "$880",
    rating: 45,
    category: "City",
    highlights: [
      "The Bund skyline",
      "Oriental Pearl Tower",
      "Nanjing Road shopping",
    ],
  },
];

export default data;
