const REQUIRED_NETWORK_DATA_KEYS = ["edges", "nodes"];

export const NetworkData = [
  String,
  {
    type: Object,
    validator: (value) => {
      const hasKey = (key) => value.hasOwn(key);
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
