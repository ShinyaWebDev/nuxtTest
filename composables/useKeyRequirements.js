import { ref, computed } from 'vue';
import { useStore } from '@/store';

export const useJobApplicationEditor = () => {
    const { state } = useStore();
    const editingApplication = ref({ ...state.jobApplicationDetails });
    const isEditing = computed(() => !!editingApplication.value.companyName || !!editingApplication.value.role);
    const editApplication = () => {
        editingApplication.value = { ...state.jobApplicationDetails };
    };

    const saveApplication = () => {
        if (editingApplication.value) {

            state.jobApplicationDetails = { ...editingApplication.value };
            editingApplication.value = {};
        }
    };

    const cancelEditing = () => {
        editingApplication.value = {};
    };

    const startNewApplication = () => {

        editingApplication.value = {
            companyName: '',
            role: '',
            description: '',
            date: '',
        };
    };


    const clearApplication = () => {
        state.jobApplicationDetails = {
            companyName: '',
            role: '',
            description: '',
            date: '',
        };
        editingApplication.value = {};
    };

    return {
        editingApplication,
        isEditing,
        editApplication,
        saveApplication,
        cancelEditing,
        startNewApplication,
        clearApplication,
    };
};
