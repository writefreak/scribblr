import React from "react";
import EditorStrip from "../home/editor-strip";

const RelatedStories = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-2xl pt-5 md:text-3xl font-space-grotesk">
        Related Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {breakingNews.map((b, index) => (
          <EditorStrip
            key={index}
            image={b.image}
            title={b.title}
            desc={b.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedStories;
const breakingNews = [
  {
    title: "Social Media Users React to Sudden Platform Feature Changes",
    image: "/home/img5.jpg",
    link: "/news/social-media-updates",
    desc: `Users across major platforms share mixed reactions as 
    unexpected feature updates roll out, sparking debates on usability,
    privacy, and platform direction.`,
  },
  {
    title: "Government Announces New Digital Policy for Startups",
    image: "/home/img1.jpg",
    link: "/news/digital-policy",
    desc: `The government unveils a new digital policy aimed at 
    supporting startups, focusing on innovation funding, data protection, 
    and easing regulatory barriers.`,
  },
  {
    title: "Tech Community Divided Over Latest AI Regulations",
    image: "/home/img2.jpg",
    link: "/news/ai-regulations",
    desc: `Developers, companies, and researchers clash over 
    newly introduced AI regulations, weighing ethical safeguards
    against potential limits on innovation.`,
  },
  {
    title: "Major Tech Firms Report Slower Growth Amid Global Uncertainty",
    image: "/home/img3.jpg",
    link: "/news/tech-growth-slowdown",
    desc: `Leading technology companies reveal slower revenue 
    growth as economic uncertainty, rising costs, and market
    saturation impact global performance.`,
  },
];
