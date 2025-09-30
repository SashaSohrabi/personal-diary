const ProductCardSkeleton = () => {
  return (
    <div className='card-elevated flex h-full flex-col gap-6'>
      <div className='skeleton h-48 rounded-3xl'></div>
      <div className='flex flex-1 flex-col gap-4'>
        <div className='skeleton h-6 w-3/4'></div>
        <div className='skeleton h-4 w-2/3'></div>
        <div className='mt-auto flex items-center justify-between gap-3'>
          <div className='skeleton h-9 w-32 rounded-full'></div>
          <div className='flex gap-2'>
            <div className='skeleton h-10 w-10 rounded-full'></div>
            <div className='skeleton h-10 w-24 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
