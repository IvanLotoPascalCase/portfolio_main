// PinterestSection.js
import Card from "./Card";

const CardFavorites = () => {
  // Mock data for cards
  const cardsData = [
    { id: 1, title: "Card 1", image: "url_to_image_1" },
    { id: 2, title: "Card 2", image: "url_to_image_2" },
    { id: 3, title: "Card 2", image: "url_to_image_2" },
    { id: 4, title: "Card 2", image: "url_to_image_2" },
    { id: 5, title: "Card 2", image: "url_to_image_2" },
    { id: 6, title: "Card 2", image: "url_to_image_2" },
    { id: 7, title: "Card 2", image: "url_to_image_2" },
    { id: 8, title: "Card 2", image: "url_to_image_2" },
    { id: 9, title: "Card 2", image: "url_to_image_2" },
    { id: 10, title: "Card 2", image: "url_to_image_2" },
    { id: 11, title: "Card 2", image: "url_to_image_2" },
    { id: 12, title: "Card 2", image: "url_to_image_2" },
    { id: 13, title: "Card 2", image: "url_to_image_2" },
    { id: 14, title: "Card 2", image: "url_to_image_2" },
    { id: 15, title: "Card 2", image: "url_to_image_2" },
    { id: 16, title: "Card 2", image: "url_to_image_2" },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsData.map((card) => (
        <Card key={card.id} title={card.title} image={card.image} />
      ))}
    </div>
  );
};

export default CardFavorites;
