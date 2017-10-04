$(function() {

  var mark = function() {

    // Read input
    var inputstring = $("input[name='regex']").val();
    if (inputstring.trim() === "") {
      return;
    }

    // Create regex
    var flags = inputstring.replace(/.*\/([gimy]*)$/, '$1');
    var pattern = inputstring.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
    var regex = new RegExp(pattern, flags);

    // Determine selected options
    var options = {};
    $("input[name='opt[]']").each(function() {
      options[$(this).val()] = $(this).is(":checked");
    });

    // Mark the regex inside the context
    $(".context").unmark({
      done: function() {
        $(".context").markRegExp(regex, options);
      }
    });
  };


  // Trigger mark action on button click
  $("button[name='mark']").on("click", mark);

});
