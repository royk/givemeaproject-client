(function($) {
  $["jAjax"] = function(request) {
    if (typeof(request.data)==="object") {
      request.data = JSON.stringify(request.data);
    }
    request.dataType = "json";
    request.contentType = "application/json; charset=utf-8";
    return $.ajax(request);
  };
})($);
