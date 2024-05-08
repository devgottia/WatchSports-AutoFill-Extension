$(".modal-trigger").click(function () {
  const id = $(this).data("target");

  const title = encodeURI($(`#${id}`).find("h4").html());

  $("input[name='site']").val($("h4.white-text").text().split(" ")[1]);

  $("input[name='bitrate']").val("4500");

  $("input[name='url']").val(
    `http://c1.ar-livehd.link/p/watch.html?streamtitle=${title}&streamid=${Math.random()
      .toString()
      .substr(2, 6)}`
  );

  $("input[name='channel']").val("LIVE STREAM FHD");

  $("select[name='ads']").val("1");
  $("input[name='Compatibility[]']").prop("checked", true);

  $(`#submit-${id}`).click();

console.log(    `http://c1.ar-livehd.link/p/watch.html?streamtitle=${title}&streamid=${Math.random()
      .toString()
      .substr(2, 6)}`)
    
});
