const GlobalHeader = () => {
  return (
    <div className="bg-[#101010]">
      <div className="flex items-center justify-between">
        {/* Mazda Logo */}
        <img
          src="/img/brand_mark_vertical_primary_mdp-01.svg"
          alt="mazda-logo"
          className="h-[71px] w-[65px]"
        />
        <div>
          {/* Main Navbar */}
          <nav className="uppercase text-[#999999] text-sm space-x-[38px]">
            <a href="">our range</a>
            <a href="">buying tools</a>
            <a href="">find a dealer</a>
            <a href="">more </a>
            <a href="">
              <img src="/img/map_pin_icon.svg" alt="map pin icon" />
              enter postcode
            </a>
          </nav>
          {/* Search Icon */}
        </div>
      </div>
    </div>
  );
};

export default GlobalHeader;
