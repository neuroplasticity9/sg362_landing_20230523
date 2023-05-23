import Image from 'next/image';
export default function Page() {
  return (
    <>
      <main>
        <Image
          alt="Background landing"
          src="/project/pX9TNcP/both/img/landing202305/bg-landing.jpg"
          width="1920"
          height="100"
          decoding="async"
          data-nimg="1"
          className="hidden h-[100%] w-[100vw] bg-cover md:block"
        />
        <Image
          alt="Background landing"
          src="/project/pX9TNcP/both/img/landing202305/mobile/bg-mobile.jpg"
          width="1920"
          height="100"
          decoding="async"
          data-nimg="1"
          className="h-[100%] w-[100%] bg-cover md:hidden"
        />
      </main>
    </>
  );
}
