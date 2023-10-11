import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: 'https://dev.travel-planner.xyz'
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
    config => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = accessToken;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            const { status, errorCode, message } = error.response.data;

            if (status === 401) {
                if (errorCode === "TOKEN-001") {
                    // 토큰 만료 처리
                    console.error(message);
                    localStorage.removeItem('accessToken');
                }
            }
        }
        return Promise.reject(error);
    }
)
