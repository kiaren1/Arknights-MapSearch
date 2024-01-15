<template>
  <div class="login-container">
    <div class="login-box">
      <img src="/public/little fox.png" style="width: 150px; height: 150px" />
      <h2 style="margin-top: -10px; margin-bottom: 1px">登录</h2>

      <div class="input-group">
        <van-form>
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="用户名n"
              label="用户名l"
              placeholder="用户名p"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
          <div>
            <van-button class="submit-btn" @click="onSubmit"> 提交 </van-button>
          </div>
        </van-form>
      </div>

      <div class="actions">
        <button type="submit" class="login-btn">登录</button>
        <button type="button" class="register-btn">注册</button>
        <button type="button" class="guest-btn" @click="goToComing">
          游客浏览
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import router from "../../router";

const username = ref("");
const password = ref("");

function goToComing() {
  router.push("/Coming");
}

const onSubmit = () => {
  alert(
    "submit: " + "Username: " + username.value + ", Password: " + password.value
  );
};
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  background-image: url;
}

.login-box {
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.089);
  text-align: center;
}
.input-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

input {
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem;
  border-radius: 18px;
  border: 1px solid rgba(100, 100, 100, 0.23);
  margin-top: 1rem;
}

.actions {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.submit-btn,
.login-btn,
.register-btn,
.guest-btn {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.6rem;
  padding: 0.5rem 0.1 rem;
  border-radius: 25px;
  color: white;
}
.submit-btn {
  background-color: violet;
}
.login-btn {
  background-color: rgb(40, 167, 400);
}
.register-btn {
  background-color: #007bff;
}
.guest-btn {
  background-color: #6c757d;
}
</style>
