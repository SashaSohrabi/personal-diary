const CategoriesSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div
      key={index}
      className='skeleton h-12 rounded-full border border-white/5 bg-base-200/60'
      style={{ width: `${Math.floor(Math.random() * (150 - 90 + 1) + 90)}px` }}
    ></div>
  ));
};

export default CategoriesSkeleton;
