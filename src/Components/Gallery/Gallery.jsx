// import React from "react";
// import "./Gallery.css";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import images from "./Gallery.json";
// export default function Gallery() {
//   return (
//     <div className="Gallery" id="gallery">
//       <h1>Gallery</h1>
//       <div className="gallery-container">
//         <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
//           <Masonry gutter="10px">
//             {images.map((image, i) => (
//               <img
//                 key={i}
//                 src={image.src}
//                 alt={`photo-${i}`}
//                 style={{ width: "100%", display: "block", borderRadius: "8px" }}
//               />
//             ))}
//           </Masonry>
//         </ResponsiveMasonry>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="Gallery coming-soon" id="gallery">
      <h1>Gallery</h1>
      <div className="coming-soon-container">
        <p className="coming-soon-text">Our gallery is coming soon.</p>
        <p className="coming-soon-sub">
          Stay tuned for updates and photos of our latest projects.
        </p>
      </div>
    </div>
  );
}
