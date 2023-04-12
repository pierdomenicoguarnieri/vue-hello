const {createApp} = Vue;

createApp({
  data(){
    return{
      message: "Hello Vue!",
      image: "https://picsum.photos/400"
    }
  }
}).mount("#app")