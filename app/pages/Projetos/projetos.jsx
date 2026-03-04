"use client";
import TiltedCard from "@/components/ui/TiltedCard";
import React from "react";

export const Projetos = ({ image, title, description, href }) => {
  return (
    <div className="flex flex-col">
      <a href={href} target="_blank">

        <TiltedCard
          imageSrc={image}
          altText={title}
          captionText={description}
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
            <p>
              {description}
            </p>
          }

        />
      </a>
    </div>
  );
};

