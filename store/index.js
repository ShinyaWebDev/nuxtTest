import { defineStore } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

export const useStore = defineStore('myResume', {
  state: () => {
    return {

      personalInfo: { firstName: '', lastName: '', email: '', phoneNumber: '' },
      employmentHistory: [{ id: 1, jobTitle: 'hu', employer: 'ji', startDate: '', endDate: '', location: '', description: '' }],
      education: [],
      professionalSummary: 'asdjkjfkdk',
      skills: [],
      achievements: [],
      hobbies: [],
      jobApplicationDetails: { companyName: '', role: '', description: '', date: '', },
      companyContactDetails: { contactName: '', address: '', email: '', phoneNumber: '', },
      keyRequirements: ["Ahahahah", "yoyoyoyoyo"],
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})