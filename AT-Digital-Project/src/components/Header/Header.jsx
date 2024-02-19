import heroImageSm from '../../assets/Hero-img-sm.png';
import heroImageMd from '../../assets/Hero-img-md.png';
import heroImageLg from '../../assets/Hero-img-lg.png';
import heroImageXlg from '../../assets/Hero-img-xlg.png';

export default function Header() {
  return (
    <header className='mt-[69px] relative'>
      <section>
        <img
          className='object-cover w-full'
          src={heroImageXlg}
          alt="hero image"
          srcSet={
            `${heroImageSm} 375w,
             ${heroImageMd} 768w,
             ${heroImageLg} 1200w,
             ${heroImageXlg} 1440w
             `
          }
          sizes='(max-width: 767px) 375px,
                 (max-width: 1199px) 768px,
                 (max-width: 1439px) 1200px,
                 (max-width: 1579px) 1440px'
        />
      </section>
      <section
        className='bg-gradient-to-r from-emerald-400 from-10% to-cyan-500 to-90% pl-4 pt-4
        text-white pr-8 pb-8 sm:pl-8 sm:pr-12 sm:pb-12 sm:pt-8 lg:absolute lg:w-1/2 bottom-8 left-8
        lg:pl-4 lg:pr-8 lg:pb-8 lg:pt-4 xl:pl-8 xl:pr-12 xl:pb-12 xl:pt-8'
      >
        <p
          className='font-bold text-4xl mb-8 lg:mb-4 xl:mb-8'
        >We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
        <button
          className='uppercase bg-orange-400 rounded text-sm font-bold px-4 py-2
          hover:scale-90 transition-all'
        >
          Get Free Consultation
        </button>
      </section>
    </header>
  )
}