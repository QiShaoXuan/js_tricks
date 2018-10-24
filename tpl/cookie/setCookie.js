function setCookie(key, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = key + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
