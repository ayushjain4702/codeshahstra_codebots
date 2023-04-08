import httpCommon from "../http-common";

const login = (data) => {
    return httpCommon.post(`/client`, data);
};

const signup = (data) => {
    return httpCommon.post(`/client`, data);
};

export default {
    login,
    signup
}