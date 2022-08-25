<script setup lang="ts">

</script>

<template>
  <div class="login-wrapper bg-gray-300">
    <div
      class="bg-white bg-right bg-auto bg-no-repeat flex items-start justify-left bg-[url(@/assets/images/login/login-banner.jpg)] h-[46.875rem] w-[75rem] rounded-[1.25rem] pl-[4.75rem] pt-20"
    >
      <div class="login-form-box">
        <h3 class="login-product-name">
          Create Account
        </h3>
        <p class="login-welcome">
          E-cycle
        </p>
      </div>
    </div>
  </div>
  <div class="login-copyright" />
</template>

<style>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.login-copyright {
  position: absolute;
  bottom: 20px;
  width: 100vw;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
}

.login-form-box {
  padding: 0 50px;
}

.login-product-name {
  font-weight: 700;
  font-size: 38px;
  line-height: 54px;
  letter-spacing: 2px;
  color: #434343;
  margin-bottom: 16px;
}

.login-welcome {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 36px;
  color: rgba(0, 0, 0, 0.45);
}

.login-input-icon {
  color: var(--ant-primary-color);
}
</style>
