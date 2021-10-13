import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "f834a8c4-9e98-4ab1-bfe3-8b09b66ab744"}
})


export const usersAPI = {
    getUsers(currentPage = 1, sizePage = 10) {
        return instance.get(`users?page=${currentPage}&count=${sizePage}`, {})
            .then(response => response.data)
    },
    unFollow(userId: string) {
        return instance.delete(`follow/${userId}`, {
        }).then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`, {}, {
        }).then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data)

    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}