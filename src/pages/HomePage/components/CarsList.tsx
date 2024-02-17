import { Tab } from "@headlessui/react";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import { Car, carsData } from "../../../data/carsData";

type CarsByType = Record<string, Car[]>;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CarsList: React.FC = () => {
  const [cars, setCars] = useState<CarsByType>({});

  const fetchCars = () => {
    const carsByType: CarsByType = Object.values(carsData).reduce(
      (acc, car) => {
        if (car.type) {
          car.type.forEach((type) => {
            if (!acc[type]) {
              acc[type] = [];
            }
            acc[type].push(car);
          });
        }
        return acc;
      },
      {} as CarsByType
    );

    setCars(carsByType);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="py-[64px] px-[16px]">
      <h2 className="text-center text-2xl py-[10px]">EXPLORE THE RANGE</h2>
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex items-center justify-center text-[14px]">
            {Object.keys(cars).map((type) => (
              <Tab
                key={type}
                className={({ selected }) =>
                  classNames(
                    "px-[23px] py-[16px] outline-none focus:outline-none transition-all duration-500 uppercase border-b-[3px]",
                    selected
                      ? "text-black border-[#910a2c]"
                      : "hover:text-black border-[#d5d5d5] opacity-40 hover:opacity-100"
                  )
                }
              >
                {type}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-[32px]">
            {Object.entries(cars).map(([type, carList]) => (
              <Tab.Panel
                key={type}
                className={`car-list flex justify-center flex-wrap items-center`}
              >
                {carList.map((car) => {
                  // Mặc định with sẽ là 20%
                  let widthClass = "w-[20%]";

                  // Nếu carList.lenght bé hơn 4 thì sẽ thay đổi thành 30%
                  if (carList.length < 4) {
                    widthClass = "w-[30%]";
                  }
                  return (
                    <div className={widthClass}>
                      <CarCard
                        key={car.name}
                        name={car.name}
                        tag={car.tag}
                        subType={car.subType}
                        imgSrc={car.imgSrc}
                      />{" "}
                    </div>
                  );
                })}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default CarsList;
