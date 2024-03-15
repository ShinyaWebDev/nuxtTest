import { useStore } from '@/store';

export const useResumeEditor = () => {
  const myResumeStore = useStore();
  // Now myResumeStore.state gives you direct access to the state

  const editingItem = ref(null);
  const currentSection = ref(null);
  const isEditing = computed(() => !!editingItem.value);

  const editItem = (section, item) => {
    currentSection.value = section;
    editingItem.value = { ...item };
  };

  const isEndTimeIsAfterStartTime = computed(() => {
    console.log('editingItem', editingItem.value);
    if (editingItem.value?.startDate && editingItem.value?.endDate) {
      const startDate = new Date(editingItem.value.startDate);
      const endDate = new Date(editingItem.value.endDate);
      return startDate <= endDate;
    }
  });

  const saveItem = () => {
    console.log('editingItem', editingItem.value);
    if (editingItem.value && currentSection.value) {
      console.log('editing item ID', editingItem.value.id)
      // Access the specific section of the state directly
      const section = myResumeStore[currentSection.value];
      // Assuming section is an array in your state
      const itemIndex = section.findIndex(item => item.id === editingItem?.value.id);
      console.log('itemIndex', itemIndex);
      if (itemIndex !== -1) {
        console.log('section line 34', section);
        section[itemIndex] = { ...editingItem.value };
      } else {
        console.log('section line 35', section);
        // For simplicity, directly modify the state array
        editingItem.value.id = section.length + 1;
        section.push(editingItem.value);
      }
      editingItem.value = null;
      currentSection.value = null;
    }
  };

  const cancelEditing = () => {
    editingItem.value = null;
    currentSection.value = null;
  };

  const addNewItem = (section) => {
    currentSection.value = section;

    if (section === 'employmentHistory') {
      editingItem.value = { jobTitle: '', employer: '', startDate: '', endDate: '', location: '', description: '' };
    } else if (section === 'education') {
      editingItem.value = { school: '', degree: '', startDate: '', endDate: '', location: '', description: '' };
    }

  };

  return {
    editingItem,
    isEditing,
    editItem,
    saveItem,
    cancelEditing,
    addNewItem,
    isEndTimeIsAfterStartTime
  };
};
