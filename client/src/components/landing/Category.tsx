// eslint-disable-next-line react/prop-types
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
interface CategoryProps {
  imgUrl: string,
  title: string,
  desc: string,
}
function Category({ imgUrl, title, desc }: CategoryProps) {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.2,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom center',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);
  return (
    <div className="category" ref={ref}>
      <div className="category-img">
        <img
          src={imgUrl}
          alt=""
        />
      </div>
      <div className="category-title">
        {title}
      </div>
      <div className="category-desc">
        {desc}
      </div>
    </div>
  );
}

export default Category;
