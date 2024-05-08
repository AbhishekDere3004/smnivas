import React from 'react';

// Single Blog Entry Component
const BlogEntry = ({ title, content }) => {
  return (
    <div className="bg-gray-100 p-5 mb-10">
      <h1 className="font-bold text-2xl mb-2">{title}</h1>
      <p className="my-3">{content}</p>
      <button className="text-white font-semibold bg-black hover:bg-[#4f4a4a] p-2 my-1 rounded">
        Read More...
      </button>
    </div>
  );
};

// Blogs Component
const Blogs = () => {
  const blogEntries = [
    {
      title: '10 Tips for a Relaxing Hotel Stay',
      content: 'Are you planning your next hotel getaway? Make the most of your stay with these 10 tips for ultimate relaxation. From booking the right room to maximizing hotel amenities, we have got you covered.',
    },
    {
      title: "Exploring Local Cuisine: A Food Lover's Guide to Hotel Dining",
      content:  "One of the joys of traveling is experiencing new cuisines. In this guide, we'll take you on a culinary journey through our hotel's dining options and nearby eateries. From traditional dishes to hidden gems, get ready to tantalize your taste buds.",
    },
    {
      title:  "Family-Friendly Activities at Our Hotel",
      content: "Planning a family vacation? Our hotel is the perfect destination for families with children of all ages. From swimming pools to kids' clubs, discover the array of family-friendly activities and amenities awaiting you at our hotel.",
    },
    {
      title:  "A Romantic Escape: Couple's Retreat at Our Hotel",
      content: "Rekindle the romance with a luxurious couple's retreat at our hotel. Indulge in spa treatments, savor intimate dinners, and enjoy quality time together amidst stunning surroundings. Find out why our hotel is the ideal destination for your next romantic getaway."
    },
    {
      title:  "Staying Fit on the Road: Tips for Hotel Gym Workouts",
      content: "Maintaining your fitness routine while traveling can be challenging, but our hotel makes it easy. Discover expert tips and workout ideas for making the most of our state-of-the-art gym facilities. Stay active and energized throughout your stay.",
    },
  ];

  return (
    <main className="flex flex-col p-5 lg:px-48 lg:py-11">
      {blogEntries.map((entry, index) => (
        <BlogEntry key={index} title={entry.title} content={entry.content} />
      ))}
    </main>
  );
};

export default Blogs;
