const REQUIRED_NETWORK_DATA_KEYS = ["edges", "nodes"];

export const NetworkData = [
  String,
  {
    type: Object,
    validator: (value) => {
      // eslint-disable-next-line no-prototype-builtins
      const hasKey = (key) => value.hasOwnProperty(key);
      return REQUIRED_NETWORK_DATA_KEYS.every((requiredKey) => {
        console.error(
          `Missing field: when networkData is an Object, '${requiredKey}' is a required field.`
        );
        return hasKey(requiredKey);
      });
    },
  },
];

const integerFactory = (fieldName) => ({
  type: Number,
  validator: (num) => {
    console.error(`Type error: ${fieldName} must be an Integer.`);
    return num - Math.floor(num) === 0;
  },
});

export const Width = integerFactory("width");
export const Height = integerFactory("height");

export const NetworkCartographyOptions = {
  domSelector: String,
  networkData: {
    type: NetworkData,
    required: true,
  },
  width: {
    type: Width,
    required: true,
  },
  height: {
    type: Height,
    required: true,
  },
  highlightNodes: Array,
};
