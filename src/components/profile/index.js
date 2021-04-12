import { useRouter } from "next/router";

const Profile = () => {
  const { push } = useRouter();

  const _singOut = () => {
    localStorage.setItem("isLoggedIn", false);
    push("/login");
  };

  return (
    <>
      <h2>Wellcome to profile page</h2>
      <button onClick={_singOut}>sign out</button>
    </>
  );
};

export default Profile;
