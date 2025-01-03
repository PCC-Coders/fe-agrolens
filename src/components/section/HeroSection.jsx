import Image from "next/image";

const HeroSection = () => {
  return (
    <section className='relative'>
      <div className='w-full'>
        <Image
          src='/images/header.png'
          alt='hero'
          width={1920}
          height={954}
          quality={100}
          className='min-h-screen w-full'
        />
      </div>
      <div className='lg:text-center drop-shadow-2xl absolute w-full translate-x-[-50%] translate-y-[-50%] top-[40%] left-[50%] px-4'>
        <p className='text-white '>Original & Natural</p>
        <h3 className='text-agro-light-yellow text-3xl lg:text-6xl font-bold'>
          Health Plant
        </h3>
        <h3 className='text-white text-3xl lg:text-6xl font-bold'>
          Health Food
        </h3>
        <p className='text-white'>
          <span className='font-semibold'>
            Pastikan kesehatan Tanamanmu dan wujudkan hasil panen yang
            berkualitas
          </span>
          <br />
          Gabung komunitas kami untuk berdiskusi, berbagi pengalaman, dan
          mendapatkan tips merawat tanaman agar hasil panenmu semakin optimal!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
