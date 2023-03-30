import { ChangeProfile } from "../Components/ChangeProfile";
import { useContext } from "react";
import App, { AppContext } from "../App";
export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      {""}
      Profile, user is {username}
      <ChangeProfile />
    </div>
  );
};
