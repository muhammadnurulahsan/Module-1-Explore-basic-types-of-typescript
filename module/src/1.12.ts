// Nullable Type

const searchName = (value: string | null) => {
  if (value) {
    // console.log("searching");
  } else {
    // console.log("There are is nothing to search");
  }
};
searchName(null);

// Unknown Typeof

const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The speed ${convertedSpeed} ms^-1`);
  } else if (typeof value === "string") {
    const [speed, unit] = value.split(" ");
    const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
    console.log(`The speed ${convertedSpeed} ms^-1`);
  } else {
    console.log("wrong input");
  }
};
getSpeedInMeterPerSecond(null);

// Never Type

function throwError(msg: string) {
  throw new Error(msg);
}
throwError("mukil se error hogaya");
