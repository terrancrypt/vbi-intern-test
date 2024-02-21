import { SearchOutlined } from "@ant-design/icons";

const GlobalHeader = () => {
  return (
    <div className="bg-[#101010]">
      <div className="flex items-center justify-between py-[14px] font-mazda-medium">
        {/* Mazda Logo */}
        <img
          src="/img/brand_mark_vertical_primary_mdp-01.svg"
          alt="mazda-logo"
          className="h-[80px] w-[65px] mx-[24px]"
        />
        <div className="flex items-center ">
          {/* Main Navbar */}
          <nav className="flex items-center uppercase text-[#999999] text-[13px] space-x-[38px] pr-[38px] border-r-[0.5px] border-[#999999] border-opacity-75 py-[8px]">
            <a href="">our range</a>
            <a href="">buying tools</a>
            <a href="">find a dealer</a>
            <a href="">more </a>
            <a className="flex items-center" href="">
              <img
                className="w-5 h-5 mr-[4px]"
                src="/img/map_pin_icon.svg"
                alt="map pin icon"
              />
              <span> enter postcode</span>
            </a>
          </nav>
          {/* Search Icon */}
          <SearchOutlined className="text-[#999999] text-[24px] px-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default GlobalHeader;
