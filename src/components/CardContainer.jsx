import React, { useState } from 'react';

const Card = ({ image, title, description, isHovered, onHover }) => {
  return (
    <div 
      className={`relative overflow-hidden transition-all duration-300 ${
        isHovered ? 'w-full' : 'w-1/3'
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <p className={`text-white text-center px-4 transition-opacity duration-300 ${
          isHovered ? 'block' : 'hidden'
        }`}>{description}</p>
        <h2 className="text-white text-2xl text-center font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      image: "/images/cl.png",
      title: "Devine",
      description: "Lorem ipsum dolor sit amet consectetur. Nibh adipiscing donec adipiscing platea. Suspendisse mauris phasellus nunc libero eget quam id integer risus. Tempus commodo ultricies id senectus pharetra dolor. Vitae id quis tortor nibh ullamcorper arcu neque."
    },
    {
      image: "/images/ps.png",
      title: "Problem Solve",
      description: "Lorem ipsum dolor sit amet consectetur. Nibh adipiscing donec adipiscing platea. Suspendisse mauris phasellus nunc libero eget quam id integer risus. Tempus commodo ultricies id senectus pharetra dolor. Vitae id quis tortor nibh ullamcorper arcu neque."
    },
    {
      image: "/images/qc.png",
      title: "Quality Client",
      description: "Lorem ipsum dolor sit amet consectetur. Nibh adipiscing donec adipiscing platea. Suspendisse mauris phasellus nunc libero eget quam id integer risus. Tempus commodo ultricies id senectus pharetra dolor. Vitae id quis tortor nibh ullamcorper arcu neque."
    },
  ];

  return (
    <div className="flex h-96 w-full">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          {...card} 
          isHovered={hoveredIndex === index}
          onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
        />
      ))}
    </div>
  );
};

export default CardContainer;