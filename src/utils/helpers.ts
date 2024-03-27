const getRandomAvatar = () =>
  `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;

const generateRandomUid = () => {
  return Math.random().toString(36).substring(7);
};

const isNullOrEmpty = (text: any) => {
  if (text === null || text === undefined) {
    return true;
  }
  const textString = text?.toString();
  return (
    !textString || textString?.toString()?.replace(/\s/g, "")?.length === 0
  );
};

export { getRandomAvatar, generateRandomUid, isNullOrEmpty };
