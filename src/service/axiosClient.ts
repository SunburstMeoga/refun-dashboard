import axios from 'axios';

// 创建一个 Axios 实例
const axiosClient = axios.create({
  baseURL: 'https://refunapi.ex.zone/api', // 替换成你的 API 地址
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 请求超时时间
});

// 请求拦截器（可以用于添加 token 或其他全局的请求配置）
axiosClient.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token'); // 假设 token 存在 localStorage
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYWQwZDI0YmZjZjc2M2Q4ZjVlZDAwNGNjYjk2MTZkZWFjODYyMWUxYmE5NWViZGYzMjE4NGYzN2UwZDdlYzlhOWI0M2Y5ZTA2MjVjOTUxNTQiLCJpYXQiOjE3MzAwNTA4MTIsIm5iZiI6MTczMDA1MDgxMiwiZXhwIjoxNzYxNTg2ODEyLCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.s2vgBOU6Z0ZqVin2FcWm5WQ3NaKE57oMNLiuUKAC20cU7BzRG9hIA4QvMh-hujzjEisJQSyC-rZ3kIMSpAS4j0c4BQypWvEFdvKK-Rrhkm5JSlhARJ4Iw-r9ScuBWJ7V6ImH-auQr-Vp2ZytY6auLEy-Iba_ocqRETbONWBr0YAF4tQL3Gok3V13cJz9XAkINqSvIkrBzpFXeHam8BLd0XttJ_8PsgTetDO5ha79-JzkjxGlh98nrSYb9jcYh_b4EvbDOEUAbgPe4r0aONT1fAkLEvq35THXSjjhq2gqRRbaAXxiw1v9iYxM4ko-Hmsfo5nFOO75HRLV9cEjETv3iKqTwC9c2j5Lh5_T6_CqiL1AVnunBMN3Q5VE8wmZKCbxftiH8rjkVj0YXy9YSUq8Ti-vdUVrfWPlViCbYsRevATl93NZDrvnZTSNe4Ru2QLDBHjbFUx8noa1TJjcncmEGOo6egRMzgpvDEtE9j14PJH1t8GYxConW6yfQhcfnw82bnQvjiNGMGStWrAGaDbHICrn7SvMIZL_lDewhibMACtE14EzKARUgFcZZNOBfpMOtdg9mklh2b5z6PKkB9LkkF0enABESzOD_z2_Om6ePI21AlN-u_Ae6UJkw4qCFAzFB3Z4ZR5D-P4N8Z4Q4N8n44kL3xADJb4CtKbXtAFmrk0'
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器（可以用于统一处理错误或响应数据）
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API 请求错误：', error);
    return Promise.reject(error);
  }
);

export default axiosClient;
