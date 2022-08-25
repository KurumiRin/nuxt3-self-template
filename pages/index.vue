<template>
  <div>
    <Suspense>
      <PageView />
      <template #fallback>
        <div class="opacity-50 italic">
          <span class="pulse">Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
