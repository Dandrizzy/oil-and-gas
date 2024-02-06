
const data = [
  {
    id: 1,
    quote: 'In the dynamic and complex landscape of the oil and gas industry, effective governance is paramount to ensure responsible, ethical, and sustainable practices. The governance framework within this sector not only addresses the economic aspects of exploration, extraction, and distribution but also encompasses environmental stewardship, social responsibility, and long-term sustainability. ',
    name: 'oby',
    position: 'Our governance',
    image: 'img/govern.jpg'
  },
  {
    id: 2,
    quote: 'Founded on a bedrock of expertise and innovation, Esquivel EcoPetrol stands at the forefront of the oil and gas industry, delivering excellence in exploration, production, and sustainable energy solutions. With a legacy rooted in decades of experience, we have continually evolved to meet the dynamic challenges of the global energy landscape.',
    name: 'oby',
    position: 'Our business',
    image: 'img/business.jpg'
  },
  {
    id: 3,
    quote: 'At Esquivel EcoPetrol, our operation in the oil and gas sector is driven by a commitment to excellence, innovation, and sustainable practices. As a key player in the industry, we are dedicated to responsibly harnessing and delivering energy resources to meet the growing global demand while minimizing environmental impact.',
    name: 'oby',
    position: 'Our operation',
    image: 'img/operation.jpg'
  }
];

const Message = () => {



  return (
    <div className="min-h-screen lg:mx-auto">
      {
        data.map((item) => <div key={item.id} className=" md:flex md:justify-even md:even:flex-row-reverse max-w-6xl p-4 md:text-2xl md:p-8 lg:mx-auto">
          <div className="">

            <img src={item.image} alt="daniel" className=" min-w-full min-h-full" />
          </div>

          <div className=" max-w-xl px-4 text-slate-600">
            <h3 className=" pb-4 text-red-600 font-semibold text-2xl md:text-4xl
    ">{item.position}</h3>
            <p className=" font-semibold">
              {item.quote}
            </p>
            {/* <button className=" mt-8 border-b-2 pb-3 border-red-600 font-semibold">Learn more &rarr;</button> */}
          </div>
        </div>)
      }
    </div>
  );
};

export default Message;