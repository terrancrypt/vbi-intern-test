const CompareSidebar: React.FC = () => {
  return (
    <div className="w-[25%] text-center px-[16px] pt-[16px] pb-[100px] bg-[#f5f5f5]">
      {/* Sidebar header */}
      <h1 className="uppercase py-[16px] text-[16px] font-mazda-medium">
        Compare our range
      </h1>
      <span className="mb-[16px] block text-[16px] font-mazda-regular tracking-wider">
        You can choose up to three vehicles.
      </span>
      <div className="py-[16px]">
        <div className="flex items-center justify-between px-[16px] py-[8px] border">
          <span className="uppercase text-[13px] font-mazda-medium">
            filter
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
      </div>

      {/* Sidebar car list*/}
      <div className="flex flex-wrap items-center justify-between py-[16px] border-b font-mazda-medium">
        <div className="flex flex-col items-center">
          <h3 className="uppercase text-[16px] pb-[6px]">mazda2</h3>
          <span className="block text-[13px] text-[#999999] tracking-normal">
            Hatch | Sedan
          </span>
        </div>
        <img
          className="w-[30%]"
          src="img/maz15300_mazda2_auto_g15_pure_hatch_jet_black_200sah5g15p_front-3-4_980x520.webp"
          alt=""
        />
      </div>
      <div className="flex flex-wrap items-center justify-between py-[16px] border-b font-mazda-medium">
        <div className="flex flex-col items-center">
          <h3 className="uppercase text-[16px] pb-[6px]">mazda2</h3>
          <span className="block text-[13px] text-[#999999] tracking-normal">
            Hatch | Sedan
          </span>
        </div>
        <img
          className="w-[30%]"
          src="img/maz15300_mazda2_auto_g15_pure_hatch_jet_black_200sah5g15p_front-3-4_980x520.webp"
          alt=""
        />
      </div>
      <div className="flex flex-wrap items-center justify-between py-[16px] border-b font-mazda-medium">
        <div className="flex flex-col items-center">
          <h3 className="uppercase text-[16px] pb-[6px]">mazda2</h3>
          <span className="block text-[13px] text-[#999999] tracking-normal">
            Hatch | Sedan
          </span>
        </div>
        <img
          className="w-[30%]"
          src="img/maz15300_mazda2_auto_g15_pure_hatch_jet_black_200sah5g15p_front-3-4_980x520.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default CompareSidebar;
