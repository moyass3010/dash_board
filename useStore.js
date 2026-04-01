import { create } from 'zustand'

const usestore = create((set) => ({
  // الـ State
  user: { name: 'محمد', role: 'Admin' },
  notifications: 3,
  sidebarOpen: true,

  // الـ Actions
  setUser: (user) => set({ user }),
  incrementNotifications: () => set((state) => ({
    notifications: state.notifications + 1
  })),
  toggleSidebar: () => set((state) => ({
    sidebarOpen: !state.sidebarOpen
  })),
  clearNotifications: () => set({ notifications: 0 }),
}))

export default useStore
