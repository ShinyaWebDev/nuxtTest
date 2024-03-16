<template>
  <button
    class="bg-blue-500 text-black font-bold py-2 px-4 rounded"
    @click="login"
  >
    Log in with Github
  </button>
</template>

<script setup lang="ts">
// const { title } = useCourse();
const supabase = useSupabaseClient();
const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
