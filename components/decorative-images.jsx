import React from "react";

const DecorativeImages = () => {
  const decorativeImages = [
    "/assets/icon/ring.png",
    "/assets/icon/cross.png",
    "/assets/icon/triangle.png",
    "/assets/icon/circle.png",
  ];

  const randomDecorations = Array.from({ length: 4 }, (_, index) => ({
    src: decorativeImages[Math.floor(Math.random() * decorativeImages.length)],
    top: Math.floor(Math.random() * 100) + "%",
    left: Math.floor(Math.random() * 100) + "%",
    size: Math.floor(Math.random() * 40) + 20, // Random size (20px - 60px)
    key: index,
  }));

  return (
    <>
      {randomDecorations.map((decoration) => (
        <img
          key={decoration.key}
          src={decoration.src}
          alt="Decoration"
          style={{
            position: "absolute",
            top: decoration.top,
            left: decoration.left,
            width: `${decoration.size}px`,
            height: `${decoration.size}px`,
            zIndex: 10, // ให้ z-index อยู่เหนือเนื้อหา
            opacity: 0.5, // เพิ่มความโปร่งใส
            pointerEvents: "none", // ไม่ให้ภาพตกแต่งมีปฏิสัมพันธ์กับผู้ใช้
            objectFit: "contain", // ป้องกันไม่ให้ภาพแตก
          }}
        />
      ))}
    </>
  );
};

export default DecorativeImages;
