function viewCollectionDetails(collectionId) {

  $.ajax({
    url: "http://localhost:8082/collection/" + collectionId,
    type: "get",
    xhrFields: {withCredentials: true},
    crossDomain: true
  }).done(function (data) {

    var collection_summary =
      '<h1>' + data.name + '</h1>' +
      '<p>0 New pages (todo)</p>' +
      '<p>0 Edited pages (todo)</p>' +
      '<p>0 Deleted pages (todo)</p>' +
      '<p>' + data.inProgressUris.length + ' Pages awaiting review</p>' +
      '<p>' + data.approvedUris.length + ' Pages approved</p>';

    $('.fl-panel--collection-details-container').html(collection_summary);
  });

  $('.fl-work-on-collection-button').click(function () {
    document.cookie = "collection=" + collectionId;
    viewController('workspace');
  });

  $('.fl-button--cancel').click(function () {
    //perhaps need to rethink this if we do decide to animate panel transitions within this view
    viewController('collections');
  });
}