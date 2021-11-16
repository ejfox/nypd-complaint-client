const REQUIRED_NETWORK_DATA_KEYS = ["edges", "nodes"];

export const NetworkData = {
  type: [Object],
  validator: (obj) => {
    const hasKey = (key) => obj.hasOwnProperty(key);
    return REQUIRED_NETWORK_DATA_KEYS.every((requiredKey) => {
      if (hasKey(requiredKey)) {
        return true;
      } else {
        console.error(
          `Missing field: when networkData is an Object, '${requiredKey}' is a required field.`,
          obj
        );
        return false;
      }
    });
  },
};

export const NetworkDataParameter = {
  type: [String, Object],
  required: true,
};

const integerFactory = ({ fieldName, required }) => ({
  validator: (number) => {
    const isInteger = Number.isInteger(number);
    if (!isInteger) {
      console.error(`Type error: ${fieldName} must be an Integer.`);
    }
    return isInteger;
  },
  required,
});

const Width = integerFactory({
  fieldName: "width",
  required: true,
});
const Height = integerFactory({
  fieldName: "height",
  required: true,
});

export const NetworkCartographyOptions = {
  domSelector: String,
  networkData: NetworkDataParameter,
  width: Width,
  height: Height,
  highlightNodes: Array,
};
