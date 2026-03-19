"use client";
import TiltedCard from "@/components/ui/TiltedCard";
import React from "react";

export const Projetos = ({ image, title, description, href, tags = [], category = "" }) => {
  return (
    <div className="flex flex-col gap-3">
      <a href={href} target="_blank">

        <TiltedCard
          imageSrc={image}
          altText={title}
          captionText={title}
          containerHeight="320px"
          containerWidth="350px"
          imageHeight="300px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="flex flex-col gap-2 px-3 py-2">
              <p className="text-xs font-semibold text-center line-clamp-2">
                {description}
              </p>
            </div>
          }

        />
      </a>

      {/* Project Info */}
      <div className="px-2 py-2 flex flex-col gap-2">
        {/* Category Badge */}
        {category && (
          <div className="inline-flex w-fit">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
              {category}
            </span>
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-lg bg-muted text-muted-foreground/80 border border-muted-foreground/20 transition-all hover:bg-muted-foreground/10 hover:border-muted-foreground/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


