<style scoped lang="scss"></style>

<template>
   <div class="gitalk-container">
      <div id="gitalk-container"></div>
   </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {}
  },
  mounted() {
    let body = document.querySelector(".gitalk-container")

    let link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"
    body.appendChild(link)

    let script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"
    body.appendChild(script)

    script.onload = () => {
      const commentConfig = {
        clientID: "5abdb21756dd51231626",
        clientSecret: "00634da3e12045cc04c6ea7c3774383531c8e425",
        repo: "js_tricks",
        owner: "QiShaoXuan",
        admin: ["QiShaoXuan"],
        id: location.pathname,
        distractionFreeMode: false
      }
      const gitalk = new Gitalk(commentConfig)
      gitalk.render("gitalk-container")
    }
  }
}
</script>
