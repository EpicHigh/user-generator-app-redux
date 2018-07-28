import uuid from "uuid";

const key = () => {
  const key = String(uuid());
  return key.slice(0, key.indexOf(`-`, key.indexOf(`-`) + 1));
};

const generateUser = ({
  gender = "Male",
  title = "General",
  first = "Mimi W.",
  last = "Ball",
  email = "nyan@cat.io",
  picture = "http://tachyons.io/img/avatar_1.jpg"
} = {}) => ({
  type: "GENERATE_USER",
  user: {
    _id: key(),
    gender,
    title,
    first,
    last,
    email,
    picture
  }
});

export { generateUser };