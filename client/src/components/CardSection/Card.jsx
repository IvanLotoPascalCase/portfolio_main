const CardForPanel = ({ image, title }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default CardForPanel;
