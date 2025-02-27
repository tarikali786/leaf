import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeLeafUser = (data) => {
  localStorage.setItem(
    "leafUser",
    JSON.stringify({
      id: data?.user?.id,
      name: data?.user?.name,
      access_leaf: data.token,
    })
  );
};

export const fetchUserData = () => {
  const stringifedUser = localStorage.getItem("leafUser") || ' "" ';
  return JSON.parse(stringifedUser || {});
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();
  const { access_leaf } = fetchUserData();
  useEffect(() => {
    if (!access_leaf) {
      navigate("/login");
    }
  }, [navigate, access_leaf]);
};
