import React from 'react';
import cus1 from '../assets/car1.jpg';
import cus2 from '../assets/car5.jpg';
import cus3 from '../assets/car8.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CardBody, CardContainer, CardItem } from '../component/ui/3d-card';

function Service() {
  const cardData = [
    {
      img: cus1,
      title: 'Maserati',
      description: 'Our customers leave satisfied, knowing they made the right choice with us.',
      highlights: [
        'Twin-turbocharged V6 engine',
        'Italian luxury interior',
        'Adaptive suspension for smooth rides',
      ],
    },
    {
      img: cus2,
      title: 'Ferrari',
      description: 'Take a Test Drive today and feel the quality of our cars before you buy.',
      highlights: [
        'V8 power with 710 horsepower',
        'Iconic red racing finish',
        'Track-tested performance',
      ],
    },
    {
      img: cus3,
      title: 'Lamborghini',
      description: 'Cars come with full previous service history checked with authorised dealerships.',
      highlights: [
        'V12 naturally aspirated engine',
        'Scissor doors & aggressive styling',
        'All-wheel drive for superior grip',
      ],
    },
  ];

  return (
    <div className="z-[1] ">
      <div className="flex items-center justify-center bg-black">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardData.map((card, i) => (
            <SwiperSlide key={i}>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[18rem] sm:w-[20rem] h-auto rounded-xl p-6 border mx-auto">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {card.title}
                  </CardItem>
                  {/* <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {card.description}
                  </CardItem> */}
                  {/* <ul className="list-disc ml-5 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {card.highlights.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul> */}
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={card.img}
                      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={`${card.title} Image`}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      View More →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Book Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Service;
