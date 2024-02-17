import { Car } from "../../../data/carsData";

type CarCardProps = Car & {
  name: string;
};

const renderString = (input: string): string => {
  if (input.includes("mazda")) {
    // Nếu đã xuất hiện, loại bỏ nó và render chuỗi mới
    return input;
  } else {
    // Nếu chưa xuất hiện, render chuỗi ban đầu
    return "mazda " + input;
  }
};

const CarCard: React.FC<CarCardProps> = ({ name, tag, subType, imgSrc }) => {
  return (
    <div className="car-card flex flex-col items-center py-[0.5em] pr-[1em] cursor-pointer">
      <img src={imgSrc} className="p-[10px]" />
      <span className="uppercase text-[#910a2c] text-[13px]">{tag}</span>
      <h3 className="uppercase text-[20px] pb-[6px]">{renderString(name)}</h3>
      <span className="text-[12px] text-[#999999]">{subType}</span>
    </div>
  );
};

export default CarCard;
