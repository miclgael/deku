<template>
  <details>
    <summary>
      <slot name="summary" />
    </summary>
    <slot />
  </details>
</template>

<style>
@layer features {
  details {
    border-radius: 4px;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  summary {
    font-weight: bold;
  }
}

@layer theme {
  details {
    border: 1px solid #ccc;
    border-left: 4px solid black;
  }
}

@layer utilities {
  summary {
    cursor: pointer;
  }
}
</style>
