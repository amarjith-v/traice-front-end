export default function ({ $axios }) {

    $axios.interceptors.request.use(function (config) {
        console.log("hit")
        document.body.classList.add("loading-indicator");
        return config;
    }, function (error) {
        document.body.classList.remove("loading-indicator");
        return Promise.reject(error);
    });


    $axios.interceptors.response.use(function (response) {
        document.body.classList.remove("loading-indicator");
        return response;
    }, function (error) {
        document.body.classList.remove("loading-indicator");
        return Promise.reject(error);
    });
}