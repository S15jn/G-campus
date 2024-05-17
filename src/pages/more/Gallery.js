import React from "react";
import ImageGallery from "../../components/ImageGallery";



const GalleryArrayData = [
  {
    title: "XPRESSION",
    subTitle: "CULTURAL EVENT ",
  },
  {
    title: "SYNERGY",
    subTitle: "SPORT EVENT",
  },
  {
    title: "TOURISTA",
    subTitle: "MBA TOURISM",
  },
  {
    title: "TRAVEL MANAI",
    subTitle: "MBA TOURISM",
  },
  {
    title: "DJ NIGHT",
    subTitle: "IIPS STUDENT",
  },
  {
    title:"IOT WORKSHOP",
    subTitle: "MCA+MTECH STUDENT WORKSHOP",
  },

];

const Gallery = () => {
  return (
    <>
      <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <h1 className="text-5xl font-semibold text-center my-10">
          COLLEGE ACTIVITIES:2023-24
        </h1>

        <div className="flex justify-center items-center flex-col gap-10 ">
          {GalleryArrayData.map((item, key) => {
            return (
              <ImageGallery
                key={key}
                title={item.title}
                subTitle={item.subTitle}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
