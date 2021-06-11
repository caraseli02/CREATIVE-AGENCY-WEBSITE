<template>
  <section class="formSection">
    <div class="title">
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint porro
        et! Sint corrupti quibusdam rem quae ab officia ipsum commodi laudantium
        at. Nesciunt omnis suscipit soluta placeat quaerat.
      </p>
    </div>
    <div class="contact">
      <div class="contact-form">
        <form>
          <div class="row">
            <div class="input50">
              <label
                for="firsrname"
                class="text"
              >Firstname</label>
              <input type="text">
            </div>
            <div class="input50">
              <label
                for="lastname"
                class="text"
              >Lastname</label>
              <input type="text">
            </div>
          </div>
          <div class="row">
            <div class="input50">
              <label
                for="email"
                class="text"
              >Email</label>
              <input type="text">
            </div>
            <div class="input50">
              <label
                for="subject"
                class="text"
              >Subject</label>
              <input type="text">
            </div>
          </div>
          <div class="row">
            <div class="input100">
              <label
                for="Enter yor text"
                class="text"
              >Enter your text:</label>
              <textarea />
            </div>
          </div>
          <div class="row">
            <div class="input100">
              <input
                type="submit"
                value="Send"
              >
            </div>
          </div>
        </form>
      </div>

      <div class="contact-info">
        <div class="info-box">
          <img
            src="images/address.png"
            class="contact-icon"
            alt=""
          >
          <div class="details">
            <h4>Address</h4>
            <p>28 Neon Tower, New York City, USA</p>
          </div>
        </div>
        <div class="info-box">
          <img
            src="images/email.png"
            class="contact-icon"
            alt=""
          >
          <div class="details">
            <h4>Email</h4>
            <a href="mailto:anyone@gmail.com">anyone@example.com</a>
            <a href="mailto:anyone@gmail.com">anyone@example.com</a>
          </div>
        </div>
        <div class="info-box">
          <img
            src="images/call.png"
            class="contact-icon"
            alt=""
          >
          <div class="details">
            <h4>Call</h4>
            <a href="tel+19292929193">197 855 5444 555</a>
            <a href="tel+19292929193">124 855 5444 555</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>

<style scoped>
section.formSection {
  background: rgb(74, 84, 84);
  background: linear-gradient(
    0deg,
    rgba(74, 84, 84, 1) 0%,
    rgba(156, 166, 166, 1) 65%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 100%;
  min-height: calc(100vh - 120px);
  padding-bottom: 5%;
}

.contact {
  position: relative;
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.contact-form {
  position: relative;
  background: #f1efef;
  width: calc(100% - 400px);
  padding: 60px 40px 20px;
  border-radius: 10px;
  box-shadow: top 15px;
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  width: 100%;
  display: flex;
}

.contact-form .input50 {
  width: 50%;
  margin: 0 10px;
}

.contact-form .input100 {
  width: 100%;
  margin: 0 10px;
}

.contact-form .row input,
.contact-form .row textarea {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #111;
  background: transparent;
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  margin: 5px 0 10px;
  resize: none;
  border-radius: 5px;
}

.contact-form .row textarea {
  height: 120px;
}

.contact-form .row input[type="submit"] {
  background-color: blue;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 300;
  border: 0;
  cursor: pointer;
  border-radius: 0.375rem;
  width: 33%;
  margin-top: 1rem;
}

.contact-info {
  width: 350px;
  background: #f1efef;
  padding: 40px 30px;
  border-radius: 15px;
}

.contact-info .info-box {
  display: grid;
  grid-template-areas:
    "icon iconName"
    "icon text";
  grid-template-rows: 1fr;
  grid-template-columns: 0.35fr 1fr;
  gap: 8px;
  margin-bottom: 0.5rem;
}

.contact-info .info-box .contact-icon {
  width: 25px;
  margin-right: 40px;
  grid-area: icon;
  margin: 0 auto;
  align-self: center;
}

.contact-info .info-box .details h4 {
  color: var(--secondary-color);
  grid-area: iconName;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.contact-info .info-box .details p,
.contact-info .info-box .details a {
  color: #111;
  grid-area: text;
  margin: 0;
}
</style>
