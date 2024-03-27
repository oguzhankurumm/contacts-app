const getRandomAvatar = () =>
  `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;

const generateRandomUid = () => {
  return Math.random().toString(36).substring(7);
};

export { getRandomAvatar, generateRandomUid };
