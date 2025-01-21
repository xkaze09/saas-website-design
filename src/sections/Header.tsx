import ArrowRight from '@/assets/arrow-right.svg'

export const Header = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-black text-white text-small">
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"></ArrowRight>
        </div>
    </div>
  );
};
