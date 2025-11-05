import { create } from 'zustand'

interface User {
    displayName: string,
    email: string,
    photoURL: string,
}

type AuthStore = {
   user: User | null,
   setUser: (user: User) => void,
}

const useAuthStore = create<AuthStore>()((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
}))

export default useAuthStore;