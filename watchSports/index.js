const index = parseInt(localStorage.getItem("index") || 1);

$(".modal-trigger").click(function () {
  const id = $(this).data("target");

  const title = encodeURI($(`#${id}`).find("h4").html());

  $("input[name='site']").val($("h4.white-text").text().split(" ")[1]);

  $("input[name='bitrate']").val("4500");

  $("input[name='url']").val(
    `http://c1.gmstreams.site/p/watch.html?streamtitle=${title}&streamid=${index}`
  );

  $("input[name='channel']").val("LIVE STREAM FHD");

  $("select[name='ads']").val("1");
  $("input[name='Compatibility[]']").prop("checked", true);

  localStorage.setItem("index", index + 1);

  setTimeout(() => {
    $(`#submit-${id}`).click();
  }, 600);
});
