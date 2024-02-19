/* eslint-disable react/prop-types */

export default function MainSectionItem({
  img375,
  img768,
  img1200,
  img1440,
  title,
  description,
  imageOrder,
  descriptionOrder,
}) {

  return (
    <section
      className="flex flex-col justify-center items-center mb-8 md:flex-row"
    >
      <img
        className={
          `object-cover px-12 my-4 h-[275px] w-[275px] md:order-${imageOrder}
          lg:h-[346px] lg:w-[346px] xl:h-[414px] xl:w-[414px]`
        }
        src={img1440}
        alt="section logo"
        srcSet={
          `${img375} 375w,
           ${img768} 768w,
           ${img1200} 1200w,
           ${img1440} 1440w`
        }
        sizes='(max-width: 767px) 375px,
               (max-width: 1199px) 768px,
               (max-width: 1439px) 1200px,
               (max-width: 1579px) 1440px'
      />
      <div className={`flex flex-col justify-center items-center px-8 md:order-${descriptionOrder}`}>
        <h2 className="text-3xl font-bold text-violet-700 text-center mb-8">{title}</h2>
        <p className="text-lg text-center mb-8">{description}</p>
        <button
          className="text-sm bg-orange-400 text-white rounded uppercase py-2 px-4
          hover:scale-90 transition-all"
        >
          Learn More
        </button>
      </div>
    </section>
  )
}