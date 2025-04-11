import { useCallback, useEffect, useState } from "react";
import Loader from "../loaders";
import styles from "./userList.module.css";
import Users from "../users";
import fetchUsers from "../../services/userServices/fetchUsers"; // ✅ Corrected import
import React from "react";

const UserList = () => {
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const isEmpty = isDone && !users.length;
  const hasUsers = isDone && !!users.length;

  const getUsers = useCallback(async () => {
    try {
      setStatus("loading");
      const fetchedUsers = await fetchUsers(); // ✅ Call fetchUsers to get user data
      setUsers(fetchedUsers); // ✅ Update state with the fetched users
      setStatus("done");
    } catch (e) {
      console.error("Error fetching users:", e);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]); // ✅ Added getUsers as a dependency

  return (
    <div className={styles.userListContainer}>
      <h2 className={styles.userListHeading}>Users</h2>
      <div className={styles.userList}>
        {isLoading && <Loader />}
        {hasUsers && <Users users={users} />}
        {isEmpty && <h2>User Not Available</h2>}
        {isError && <h2>Something Went Wrong</h2>}
      </div>
    </div>
  );
};

export default UserList;
