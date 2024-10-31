import axiosClient from "./axiosClient";

//用户登入
export const login = (data: any) => {
    return axiosClient.post('/login', data);
}
//用户个人资料
export const user = () => {
    return axiosClient.get('/user');
}
//用户个人中心资料
export const userInfo = () => {
    return axiosClient.get('/user/info');
}
//用户个人中心资料（奖励图表数据）
export const userInfoGraph = () => {
    return axiosClient.get('/user/info/graph');
}
//个人奖金池数据
export const cashBackInfo = () => {
    return axiosClient.get('/cashbacks/info');
}
//奖金池流水
export const cashbacks = (data: any) => {
    return axiosClient.get('/cashbacks', data)
}
//直推奖励
export const directReward = (data: any) => {
    return axiosClient.get('/rewards/direct-reward', data)
}

//奖池奖励
export const poolAward = (data: any) => {
    return axiosClient.get('/rewards/invite-reward', data)
}