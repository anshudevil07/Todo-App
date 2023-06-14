var deleteArray = [];
var updateArray = [];

$(document).ready(function () {
  $("#deleter").on("click", function (e) {
    e.preventDefault(); // Prevent the default form submission

    var checkedItems = $("#taskdeleter input.checke:checked"); // Select all checked input elements

    if (checkedItems.length > 0) {
      // Submit the form with the selected tasks

      checkedItems.each(function () {
        var id = $(this).attr("id");
        deleteArray.push(id);
      });

      window.location.href = `/delete-tasks/?deleteArray=${deleteArray}`;
    } else {
      alert("Please select at least one task to delete.");
    }
  });
});

$(document).ready(function () {
  $("#updater").on("click", function (e) {
    e.preventDefault(); // Prevent the default form submission

    var checkedItems = $("#taskdeleter input.checke:checked"); // Select all checked input elements

    if (checkedItems.length > 0) {
      // Submit the form with the selected tasks

      checkedItems.each(function () {
        var id = $(this).attr("id");
        updateArray.push(id);
      });

      console.log(updateArray);

      window.location.href = `/update-tasks/?updateArray=${updateArray}`;
    } else {
      alert("Please select at least one task to Update.");
    }
  });
});
