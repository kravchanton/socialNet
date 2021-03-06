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
        return instance.delete(`follow/${userId}`, {}).then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`, {}, {}).then(response => response.data)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data)

    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)

    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status}).then(response => response.data)
    },
    savePhoto(photo: any) {
        let formData = new FormData()
        formData.append('image', photo)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`/auth/login`).then(response => response.data)
    }
}