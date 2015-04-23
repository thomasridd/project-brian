function bulletinEditor(collectionName, data) {

  var newSections = [];
  var newTabs = [];
  var newRelated = [];
  var newLinks = [];
  var lastIndexRelated, lastIndexLink;

  //console.log(data.sections);

  $("#description-p").remove();
  //$(".section-list").remove();
  //$("#addCorrection").remove();
  //$("#addSection").remove();
  //$("#addTab").remove();
  //$("#addBulletin").remove();
  //$("#addLink").remove();


  // Metadata load, edition and saving
  $("#title").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.title = $(this).val();
  });
  $("#nextRelease").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.nextRelease = $(this).val();
  });
  $("#contactName").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.contact.name = $(this).val();
  });
  $("#contactEmail").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.contact.email = $(this).val();
  });
  $("#summary").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.summary = $(this).val();
  });
  $("#headline1").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.headline1 = $(this).val();
  });
  $("#headline2").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.headline2 = $(this).val();
  });
  $("#headline3").on('click keyup', function () {
    $(this).textareaAutoSize();
    data.headline3 = $(this).val();
  });

  /* The checked attribute is a boolean attribute, which means the corresponding property is true if the attribute
   is present at all—even if, for example, the attribute has no value or is set to empty string value or even "false" */
  var checkBoxStatus = function () {
    if(data.nationalStatistic === "false" || data.nationalStatistic === false) {
      return false;
    } else {
      return true;
    }
  };

  $("#metadata-list input[type='checkbox']").prop('checked', checkBoxStatus).click(function () {
    data.nationalStatistic = $("#metadata-list input[type='checkbox']").prop('checked') ? true : false;
  });

  // Correction section
  // Load
  $(data.correction).each(function (index, correction) {

    $("#correction_text_" + index).on('click keyup', function () {
      $(this).textareaAutoSize();
      data.correction[index].text = $(this).val();
    });
    $("#correction_date_" + index).val(correction.date).on('click keyup', function () {
      data.correction[index].date = $(this).val();
    });

    // Delete
    $("#correction-delete_" + index).click(function () {
      $("#" + index).remove();
      data.correction.splice(index, 1);
      updateContent(collectionName, getPathName(), JSON.stringify(data));
      bulletinEditor(collectionName, data);
    });
  });

  // New correction
  $("#addCorrection").one('click', function () {
    data.correction.push({text:"", date:""});
    updateContent(collectionName, getPathName(), JSON.stringify(data));
    bulletinEditor(collectionName, data);
  });

  // Edit sections
  // Load and edition
  $(data.sections).each(function(index, section) {

    $("#section-edit_"+index).click(function() {
      var editedSectionValue = $("#section-markdown_" + index).val();

      var editorPrev = '<div style="float: right; margin-top: 50px; height:905px; overflow: scroll;" id="wmd-preview" class="wmd-panel wmd-preview"></div>';
      var editorEdit = '<div style="float: left; margin-top: 50px;" id="wmd-edit" class="wmd-panel">' +
      '<div id="wmd-button-bar"></div>' +
      ' <textarea style="height:845px;" class="wmd-input" id="wmd-input">' + editedSectionValue + '</textarea>' +
      ' <button id="finish-section">Finish editing</button>' +
      '</div>';

      $('body').prepend(editorPrev, editorEdit);

      markdownEditor();

      $("#finish-section").click(function(){
        var editedSectionText = $('#wmd-input').val();
        data.sections[index].markdown = editedSectionText;
        var editedSectionTitle = $('#section-title_' + index).val();
        data.sections[index].title = editedSectionTitle;
        $("#wmd-preview").remove();
        $("#wmd-edit").remove();
        bulletinEditor(collectionName, data);
        save();
        updateContent(collectionName, getPathName(), JSON.stringify(data));
      });
    });

    // Delete
    $("#section-delete_"+index).click(function() {
      $("#"+index).remove();
      data.sections.splice(index, 1);
      bulletinEditor(collectionName, data);
    });
  });

  //Add new sections
  $("#addSection").one('click', function () {
    data.sections.push({title:"", markdown:""});
    updateContent(collectionName, getPathName(), JSON.stringify(data));
    bulletinEditor(collectionName, data);
  });

  function sortableSections() {
    $("#sortable-sections").sortable();
  }
  sortableSections();

  // Edit accordion
  // Load and edition
  $(data.accordion).each(function(index, tab) {

    $("#tab-edit_"+index).click(function() {
      var editedTabValue = $("#tab_markdown_" + index).val();

      var editorPrev = '<div style="float: right; margin-top: 50px; height:905px; overflow: scroll;" id="wmd-preview" class="wmd-panel wmd-preview"></div>';
      var editorEdit = '<div style="float: left; margin-top: 50px;" id="wmd-edit" class="wmd-panel">' +
          '<div id="wmd-button-bar"></div>' +
          ' <textarea style="height:845px;" class="wmd-input" id="wmd-input">' + editedTabValue + '</textarea>' +
          ' <button id="finish-tab">Finish editing</button>' +
          '</div>';

      $('body').prepend(editorPrev, editorEdit);

      markdownEditor();

      $("#finish-tab").click(function() {
        data.accordion[index].markdown = $('#wmd-input').val();
        data.accordion[index].title = $('#tab__' + index).val();
        $("#wmd-preview").remove();
        $("#wmd-edit").remove();
        save();
        updateContent(collectionName, getPathName(), JSON.stringify(data));
      });
    });

    // Delete
    $("#tab-delete_"+index).click(function() {
      $("#"+index).remove();
      data.accordion.splice(index, 1);
      bulletinEditor(collectionName, data);
    });
  });

  //Add new tab
  $("#addTab").one('click', function () {
    data.accordion.push({title:"", markdown:""});
    updateContent(collectionName, getPathName(), JSON.stringify(data));
    bulletinEditor(collectionName, data);
  });

  function sortableTabs() {
    $("#sortable-tabs").sortable();
  }
  sortableTabs();

  // Related bulletin
  // Load
  if (data.relatedBulletins.length === 0) {
    lastIndexRelated = 0;
  } else {
    $(data.relatedBulletins).each(function (iBulletin) {
      lastIndexRelated = iBulletin + 1;

      // Delete
      $("#bulletin-delete_"+iBulletin).click(function () {
        $("#" + iBulletin).remove();
        data.relatedBulletins.splice(iBulletin, 1);
        bulletinEditor(collectionName, data);
      });
    });
  }

  //Add new related
  $("#addBulletin").one('click', function () {
    var pageurl = localStorage.getItem('pageurl');
    localStorage.setItem('historicUrl', pageurl);
    viewWorkspace(pageurl, collectionName, 'edit');

    $('#sortable-related').append(
        '<div id="' + lastIndexRelated + '" class="edit-section__sortable-item">' +
        '  <textarea id="bulletin-uri_' + lastIndexRelated + '" placeholder="Go to the related bulletin and click Get"></textarea>' +
        '  <button class="btn-page-get" id="bulletin-get_' + lastIndexRelated + '">Get</button>' +
        '  <button class="btn-page-cancel" id="bulletin-cancel_' + lastIndexRelated + '">Cancel</button>' +
        '</div>');
    $("#bulletin-cancel_" + lastIndexRelated).hide();

    //unCheckPage();
    //loadPageDataIntoEditor(collectionName, false);

    $("#bulletin-get_" + lastIndexRelated).one('click', function () {
      $("#bulletin-cancel_" + lastIndexRelated).show().one('click', function () {
        $('.fl-panel--preview__content').get(0).src = localStorage.getItem("pageurl");
        checkPage();
        $(".fl-panel--editor__related__bulletin-item__cancel_" + lastIndexRelated).remove();
        bulletinEditor(collectionName, data);
      });
      var bulletinurl = $('.fl-panel--preview__content').contents().get(0).location.href;
      var bulletinurldata = "/data" + bulletinurl.split("#!")[1];
      $.ajax({
        url: bulletinurldata,
        dataType: 'json',
        crossDomain: true,
        success: function (relatedData) {
          if (relatedData.type === 'bulletin') {
            $('#bulletin__' + lastIndexRelated).val(relatedData.uri);
            $('.bulletin-list').append(
                '<textarea style="display: none;" id="bulletin_name_' + lastIndexRelated + '"></textarea>' +
                '<textarea style="display: none;" id="bulletin_summary_' + lastIndexRelated + '"></textarea>');
            $('#bulletin_name_' + lastIndexRelated).val(relatedData.name);
            $('#bulletin_summary_' + lastIndexRelated).val(relatedData.summary);
            saveNewBulletin();
            $('.fl-panel--preview__content').get(0).src = localStorage.getItem("pageurl");
            //checkPage2();
            checkPage();
            save();
            updateContent(collectionName, getPathName(), JSON.stringify(data));
          } else {
            alert("This is not a bulletin");
          }
        },
        error: function () {
          console.log('No page data returned');
        }
      });
    });
    sortableRelated();
  });

  function checkPage() {
    window.intervalID = setInterval(function () {
      checkForPageChanged(function () {
        loadPageDataIntoEditor(collectionName, true);
      });
    }, intIntervalTime);
  }

  function unCheckPage() {
    clearInterval(window.intervalID);
  }

  function sortableRelated() {
    $("#sortable-related").sortable();
  }

  sortableRelated();

  function saveNewBulletin() {
    var orderBulletin = $(".fl-editor__related").sortable('toArray');
    $(orderBulletin).each(function(indexB, nameB){
      var uri = $('#bulletin__'+nameB).val();
      var summary = $('#bulletin_summary_'+nameB).val();
      var names = $('#bulletin_name_'+nameB).val();
      newRelated[parseInt(indexB)] = {uri: uri, name: names, summary: summary};
    });
    data.relatedBulletins = newRelated;
    $(".bulletin-list").remove();
    $("#metadata-list").remove();
    bulletinEditor(collectionName, data);
  }

  // Edit external
  // Load and edition
  $(data.externalLinks).each(function(index, link){
    lastIndexLink = index + 1;
    $('.fl-editor__external').append(
        '<div id="' + index + '" class="section-list" style="background-color:grey; color:white;'+style+'">' +
        'Title ' +
        ' <textarea id="link__' + index + '" cols="50">' + link.url + '</textarea>' +
        ' <button class="fl-panel--editor__external__link-item__delete_' + index + '">Delete</button>' +
        '</div>').show();

    // Delete
    $(".fl-panel--editor__external__link-item__delete_"+index).click(function() {
      $("#"+index).remove();
      data.externalLinks.splice(index, 1);
      bulletinEditor(collectionName, data);
    });
  });

  //Add new external
  $("#external-section").append('<button id="addLink">Add new link</button>');
  $("#addLink").click(function () {
    $('.fl-editor__external').append(
        '<div id="' + lastIndexLink + '" class="section-list" style="background-color:grey; color:white;'+style+'">' +
        'Title ' +
        ' <textarea id="link__' + lastIndexLink + '" placeholder="Copy the link here" cols="50"></textarea>' +
        ' <button class="fl-panel--editor__external__link-item__delete_' + lastIndexLink + '">Delete</button>' +
        '</div>');
    sortableLinks();
    saveNewLink();
  });

  function saveNewLink() {
    var orderLink = $(".fl-editor__external").sortable('toArray');
    $(orderLink).each(function(index, name){
      var link;
      console.log($('#link__' + name).val().length);
      if($('#link__' + name).val().length === 0) {
        link = "";
      } else {
        link = $('#link__' + name).val();
      }
      console.log(link);
      newLinks[index] = {url: link};
    });
    data.externalLinks = newLinks;
    $(".link-list").remove();
    $("#metadata-list").remove();
    bulletinEditor(collectionName, data);
  }

  function sortableLinks() {
    $(".fl-editor__external").sortable();
  }
  sortableLinks();

  function sortableExample() {
    $("#sortable-example").sortable();
  }
  sortableExample();

  // Save
  $('.fl-panel--editor__nav__save').unbind("click").click(function () {
    save();
    updateContent(collectionName, getPathName(), JSON.stringify(data));
  });

  // complete
  $('.fl-panel--editor__nav__complete').unbind("click").click(function () {
    pageData = $('.fl-editor__headline').val();
    save();
    saveAndCompleteContent(collectionName, getPathName(), JSON.stringify(data));
  });


  function save() {
    // Sections
    var orderSection = $("#sortable-sections").sortable('toArray');
    $(orderSection).each(function (indexS, nameS) {
        var markdown = $('#section-markdown_' + nameS).val();
        var title = $('#section-title_' + nameS).val();
      newSections[indexS] = {title: title, markdown: markdown};
    });
    data.sections = newSections;
    // Tabs
    var orderTab = $(".fl-editor__accordion").sortable('toArray');
    $(orderTab).each(function (indexT, nameT) {
      var markdown = data.accordion[parseInt(nameT)].markdown;
      var title = $('#tab__' + nameT).val();
      newTabs[indexT] = {title: title, markdown: markdown};
    });
    console.log(newTabs);
    data.accordion = newTabs;
    // Related links
    var orderBulletin = $(".fl-editor__related").sortable('toArray');
    $(orderBulletin).each(function (indexB, nameB) {
      var uri = $('#bulletin__' + nameB).val();
      var summary = $('#bulletin_summary_' + nameB).val();
      var name = $('#bulletin_name_' + nameB).val();
      newRelated[indexB]= {uri: uri, name: name, summary: summary};
    });
    data.relatedBulletins = newRelated;
      //console.log(data.relatedBulletins);
    // External links
    var orderLink = $(".fl-editor__external").sortable('toArray');
    $(orderLink).each(function(indexL, nameL){
      var link = $('#link__'+nameL).val();
      newLinks[indexL] = {url: link};
    });
    data.externalLinks = newLinks;

    //console.log(data);
    bulletinEditor(collectionName, data);
  }
}

