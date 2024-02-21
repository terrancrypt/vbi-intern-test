import { CarsParameter } from "./carsParameter.type";

type CarsParameterData = {
  [name: string]: {
    [subName: string]: CarsParameter;
  };
};

export const carsParameterData: CarsParameterData = {
  mazda3: {
    "G20 Pure": {
      priceFrom: 33954,
      performance: {
        powertrain: {
          drivetrain: "FWD",
          engineType: {
            engineImg: "img/mazda3-2.0l.jpg",
            engineName: "2.0l 4-cyl petrol",
          },
          fuelConsumption: "5.9 L/100km",
          fuelTankCapacity: 51,
          maximumPower: 114,
        },
        chasis: {
          tyreSize: "205/60 R16",
          wheelSize: "16 x 6.5 J",
          wheelType: "Alloy",
        },
      },
      exterior: {
        dimensions: {
          overrallHeight: 1453,
          overallLenght: 4460,
          overallWidth: 1795,
          wheelbase: 2725,
        },
        trimAndFeatures: {
          mirrors: "Power adj, auto fold",
          wipers: "Rain-sensing",
        },
      },
      interior: {
        convenience: {
          airCondition: true,
          auxiliary: 1,
          powerWindows: true,
          rearViewWindows: false,
          usdPorts: 2,
        },
        instrumentation: {
          drivingDisplay: "Colour windscreen",
          cruiseControl: "MRCC w/Stop & Go",
          steeringWheel: "Leather, tilt, telescopic",
        },
      },
      technology: {
        chassis: {
          gVectoring: "GVC Plus",
          iStop: true,
        },
        infotainment: {
          audioSystem: "8 speakers",
          bluetooth: true,
          screen: 8.8,
          commanderControl: true,
          radio: "AM/FM, digital (DAB+)",
          satelliteNavigation: true,
        },
      },
      warrantyAndService: {
        warrantyImg: "img/warranty.webp",
        roadsideAssistanceImg: "img/mazda-5-year-roadside.png",
        serviceCosts: "$334 - $530",
      },
    },
  },
  mazda6: {
    "G25 Sport": {
      priceFrom: 49204,
      performance: {
        powertrain: {
          drivetrain: "FWD",
          engineType: {
            engineImg: "img/mazda3-2.0l.jpg",
            engineName: "2.0l 4-cyl petrol",
          },
          fuelConsumption: "7.0 l/100km",
          fuelTankCapacity: 62,
          maximumPower: 140,
        },
        chasis: {
          tyreSize: "225/55 R17",
          wheelSize: "17 x 7.5 J",
          wheelType: "Alloy",
        },
      },
      exterior: {
        dimensions: {
          overrallHeight: 1450,
          overallLenght: 4865,
          overallWidth: 1840,
          wheelbase: 2830,
        },
        trimAndFeatures: {
          mirrors: "Power adj, heated, fold",
          wipers: "Rain-sensing",
        },
      },
      interior: {
        convenience: {
          airCondition: "Dual zone",
          auxiliary: 2,
          powerWindows: true,
          rearViewWindows: true,
          usdPorts: 3,
        },
        instrumentation: {
          drivingDisplay: "Colour windscreen",
          cruiseControl: "MRCC w/Stop & Go",
          steeringWheel: "Leather, tilt, telescopic",
        },
      },
      technology: {
        chassis: {
          gVectoring: "GVC Plus",
          iStop: true,
        },
        infotainment: {
          audioSystem: "6 speakers",
          bluetooth: true,
          screen: 8,
          commanderControl: true,
          radio: "AM/FM, digital (DAB+)",
          satelliteNavigation: true,
        },
      },
      warrantyAndService: {
        warrantyImg: "img/warranty.webp",
        roadsideAssistanceImg: "img/mazda-5-year-roadside.png",
        serviceCosts: "$341 - $515",
      },
    },
  },
};
