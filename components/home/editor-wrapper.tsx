import React from "react";
import EditorStrip from "./editor-strip";
import { Wrapper } from "../ui/wrapper";

const EditorWrapper = () => {
  return (
    <Wrapper>
      <div className="hidden md:grid grid-cols-2 gap-4 items-center justify-center">
        {breakingNews.map((b, index) => (
          <EditorStrip
            key={index}
            image={b.image}
            title={b.title}
            desc={b.desc}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default EditorWrapper;

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
  {
    title: "Cybersecurity Experts Warn of Increase in Phishing Attacks",
    image: "/home/img4.jpg",
    link: "/news/phishing-alert",
    desc: `Security analysts raise concerns over a 
    sharp rise in phishing attempts, urging users and businesses
    to strengthen digital safety practices.`,
  },
  {
    title: "New Smartphone Launch Sparks Debate Over Innovation",
    image: "/home/img5.jpg",
    link: "/news/smartphone-launch",
    desc: `The latest smartphone release draws mixed reactions, 
    with consumers questioning whether recent upgrades truly push innovation forward.`,
  },
];
