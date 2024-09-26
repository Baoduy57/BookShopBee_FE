import axios from "axios";

//call api
export const loginUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_TEST}/user/Sign-In`,
    data
  );
  return res.data;
};

export const signupUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_TEST}/user/Sign-Up`,
    data
  );
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_TEST}/user/Get-Details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
