var target = $("div"),
    data = target.data("info"),
    template = $("#mustache-template").html(),
    html = Mustache.to_html(template, data);

	  $(target).html(html);