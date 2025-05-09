import api from "..";

const fetchUsers = async () => {
  const res = await api({
    endpoint: "/public/randomusers",
  });

  if (res && res.data && res.data.length) {
    const users = res.data.map((user) => {
      const { login, id, picture } = user;
      const { username } = login;
      return {
        userName: username,
        photo: picture.large,
        id: id,
      };
    });
    // console.log(users);
    return users;
  }
  return [];
};

export default fetchUsers;