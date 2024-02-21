export type CarsParameter = {
  priceFrom: number;
  performance: {
    powertrain: {
      drivetrain: "FWD";
      engineType: {
        engineImg: string;
        engineName: string;
      };
      fuelConsumption: string;
      fuelTankCapacity: number;
      maximumPower: number;
    };
    chasis: {
      tyreSize: string;
      wheelSize: string;
      wheelType: "Alloy";
    };
  };
  exterior: {
    dimensions: {
      groundClearanceUnladen?: string;
      overrallHeight: number;
      overallLenght: number;
      overallWidth: number;
      wheelbase: number;
    };
    trimAndFeatures: {
      mirrors: string;
      wipers: string;
    };
  };
  interior: {
    convenience: {
      airCondition: boolean | string;
      auxiliary: number;
      powerWindows: boolean;
      rearViewWindows: boolean;
      usdPorts: number;
    };
    instrumentation: {
      drivingDisplay: string;
      cruiseControl: string;
      steeringWheel: string;
    };
  };
  technology: {
    chassis: {
      gVectoring: string;
      iStop: boolean;
    };
    infotainment: {
      audioSystem: boolean | string;
      bluetooth: boolean;
      screen: number;
      internetRadio?: boolean;
      commanderControl: boolean;
      radio: string;
      satelliteNavigation: boolean;
    };
  };
  warrantyAndService: {
    warrantyImg: string;
    roadsideAssistanceImg: string;
    serviceCosts: string;
  };
};
