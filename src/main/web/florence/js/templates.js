(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['browseNode'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " \n  <li data-url=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n    <span class=\"page-item\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    <div class=\"page-options\">\n      <button class=\"\">Button</button>\n      <button class=\"\">Button</button>\n      <button class=\"\">Button</button>\n    </div>\n    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </li>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return " \n        <ul>\n          "
    + ((stack1 = this.invokePartial(partials.browseNode,depth0,{"name":"browseNode","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " \n        </ul>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['collection'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <li><span class=\"page-item\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n        <div class=\"page-options\">\n          <button class=\"btn-page-edit\" data-path=\""
    + alias3(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"path","hash":{},"data":data}) : helper)))
    + "\">Edit file</button>\n          <button class=\"btn-page-delete\" data-path=\""
    + alias3(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"path","hash":{},"data":data}) : helper)))
    + "\">Delete file</button>\n          <button class=\"btn-page-move\" data-path=\""
    + alias3(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"path","hash":{},"data":data}) : helper)))
    + "\">Move file</button>\n        </div>\n      </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"section-head\">\n  <h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  <p>Publish: "
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n<div class=\"section-content\">\n  <h3 id=\"in-progress-uris\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.inProgress : depth0)) != null ? stack1.length : stack1), depth0))
    + " pages in progress</h3>\n  <ul class=\"page-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.inProgress : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n  <h3 id=\"complete-uris\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.completed : depth0)) != null ? stack1.length : stack1), depth0))
    + " pages awaiting review</h3>\n  <ul class=\"page-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n  <h3 id=\"reviewed-uris\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.reviewed : depth0)) != null ? stack1.length : stack1), depth0))
    + " pages awaiting approval</h3>\n  <ul class=\"page-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.reviewed : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n\n<nav class=\"section-nav\">\n  <button class=\"btn-cancel\">Cancel</button>\n  <button class=\"btn-collection-work-on\">Work on collection</button>\n  <button class=\"btn-collection-approve\">Approve collection</button>\n</nav>\n";
},"useData":true});
templates['collections'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <tr data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <td headers=\"collection-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n        <td headers=\"collection-date\">"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"panel col col--6 collection-select\">\n  <h1 class=\"text-align-center\">Select a collection</h1>\n  <table class=\"collections-select-table\">\n    <thead>\n      <tr>\n        <th id=\"collection-name\" scope=\"col\">Collection name</th>\n        <th id=\"collection-date\" scope=\"col\">Collection date</th>\n      </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</section>\n<section class=\"panel col col--6 collection-create\">\n  <h1 class=\"text-align-center\">Create a collection</h1>\n  <form>\n    <label for=\"collectionname\" class=\"hidden\">Scheduled publish</label>\n    <input id=\"collectionname\" type=\"text\" placeholder=\"Collection name\" />\n    <label for=\"team\" class=\"hidden\">Select the team the collection can be previewed by</label>\n    <select id=\"team\">\n      <option selected disabled=\"disabled\">Select the team the collection can be previewed by</option>\n      <option value=\"Team1\">Team 1</option>\n      <option value=\"Team2\">Team 2</option>\n      <option value=\"Team3\">Team 3</option>\n    </select>\n    <input type=\"radio\" id=\"scheduledpublish\" name=\"publishtype\" value=\"scheduled\"><label for=\"scheduledpublish\">Scheduled publish</label>\n    <input type=\"radio\" id=\"manualpublish\" name=\"publishtype\" value=\"manual\"><label for=\"manualpublish\">Manual publish</label>\n    <br>\n    <div class=\"block text-center\">\n      <label for=\"day\" class=\"hidden\">Day</label>\n      <select id=\"day\" class=\"small\">\n        <option selected disabled>Day</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n        <option value=\"11\">11</option>\n        <option value=\"12\">12</option>\n        <option value=\"13\">13</option>\n        <option value=\"14\">14</option>\n        <option value=\"15\">15</option>\n        <option value=\"16\">16</option>\n        <option value=\"17\">17</option>\n        <option value=\"18\">18</option>\n        <option value=\"19\">19</option>\n        <option value=\"20\">20</option>\n        <option value=\"21\">21</option>\n        <option value=\"22\">22</option>\n        <option value=\"23\">23</option>\n        <option value=\"24\">24</option>\n        <option value=\"25\">25</option>\n        <option value=\"26\">26</option>\n        <option value=\"27\">27</option>\n        <option value=\"28\">28</option>\n        <option value=\"29\">29</option>\n        <option value=\"30\">30</option>\n        <option value=\"31\">31</option>\n      </select>\n      <label for=\"month\" class=\"hidden\">Month</label>\n      <select id=\"month\" class=\"small\">\n        <option selected disabled>Month</option>\n        <option value=\"0\">January</option>\n        <option value=\"1\">February</option>\n        <option value=\"2\">March</option>\n        <option value=\"3\">April</option>\n        <option value=\"4\">May</option>\n        <option value=\"5\">June</option>\n        <option value=\"6\">July</option>\n        <option value=\"7\">August</option>\n        <option value=\"8\">September</option>\n        <option value=\"9\">October</option>\n        <option value=\"10\">November</option>\n        <option value=\"11\">December</option>\n      </select>\n      <label for=\"year\" class=\"hidden\">Year</label>\n      <select id=\"year\" class=\"small\">\n        <option selected value=\"2015\">2015</option>\n        <option value=\"2016\">2016</option>\n        <option value=\"2017\">2017</option>\n      </select>\n      <br>\n      <label for=\"time\" class=\"hidden\">Time</label>\n      <select id=\"time\" class=\"small\">\n        <option value=\"0930\">09:30</option>\n      </select>\n    </div>\n    <button class=\"btn-collection-create\">Create collection</button>\n  </form>\n</section>\n<section class=\"panel col col--6 collection-selected\">\n\n</section>";
},"useData":true});
templates['mainNav'] = template({"1":function(depth0,helpers,partials,data) {
    return "      <li class=\"selected\">Working on: "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav>\n  <ul class=\"nav\">\n"
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <li id=\"collections\" class=\"selected\">Collections</li>\n    <li id=\"users\">Users and access</li>\n    <li id=\"publish\">Publish</li>\n    <li id=\"account\">My account</li>\n  </ul>\n</nav>\n<div class=\"section\"></div>";
},"useData":true});
templates['markdownEditor'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"markdown-editor\">\n    <div class=\"markdown-editor__header\">\n        <h1>Section name</h1>\n        <div id=\"wmd-button-bar\"></div>\n    </div>\n    <div class=\"markdown-editor__content\">\n        <div id=\"wmd-preview\" class=\"wmd-panel wmd-preview\"></div>\n        <div id=\"wmd-edit\" class=\"wmd-panel wmd-edit\">\n            <h2>Markdown:</h2>\n            <textarea class=\"wmd-input\" id=\"wmd-input\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</textarea>\n            <div class=\"markdown-editor-line-numbers\"></div>\n        </div>\n    </div>\n    <div class=\"markdown-editor__footer\">\n        <button class=\"btn-markdown-editor-cancel\">Cancel</button>\n        <button class=\"btn-markdown-editor-save\">Save changes</button>\n        <button class=\"btn-markdown-editor-exit\">Save changes and exit</button>\n    </div>\n</div>";
},"useData":true});
templates['workBrowse'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " \n          <li data-url=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n            <span class=\"page-item\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n            <div class=\"page-options\">\n              <button class=\"\">Button</button>\n              <button class=\"\">Button</button>\n              <button class=\"\">Button</button>\n            </div>\n              "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </li>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return " \n                <ul>\n                    "
    + ((stack1 = this.invokePartial(partials.browseNode,depth0,{"name":"browseNode","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " \n                </ul>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"workspace-browse\">\n  <nav class=\"tree-nav-holder\">\n    <ul class=\"page-list page-list--tree\">\n        "
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </nav>\n</section>";
},"usePartial":true,"useData":true});
templates['workCreate'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"workspace-create\">\n  <h1>New page details</h1>\n  <form>\n    <label for=\"location\" class=\"\">Location</label>\n    <input id=\"location\" type=\"text\" />\n    <label for=\"pagetype\" class=\"\">Page type</label>\n    <select id=\"pagetype\" required>\n      <option name=\"bulletin\">bulletin</option>\n      <option name=\"article\">article</option>\n      <option name=\"dataset\">dataset</option>\n    </select>\n    <label for=\"pagename\" class=\"hidden\">Page type</label>\n    <input id=\"pagename\" class=\"full\" type=\"text\" placeholder=\"Page name\" />\n    <!--Button will be added here-->\n  </form>\n</section>\n";
},"useData":true});
templates['workEdit'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit-section__sortable-item\">\n              <p>Text: <textarea class=\"auto-size\" type=\"text\" id=\"correction_text_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" cols=\"65\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.correction : depth0)) != null ? stack1.text : stack1), depth0))
    + "</textarea></p>\n              <p>Date: <input class=\"auto-size\" type=\"date\" id=\"correction_date_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"/></p>\n              <p>Type: <input type=\"radio\" name=\"correctionType"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\"minor\"/><label> Minor</label>\n                <input type=\"radio\" name=\"correctionType"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\"major\"/><label> Major</label>\n              </p>\n              <button class=\"btn-page-delete\" id=\"correction-delete_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit-section__sortable-item\">\n              <textarea id=\"tab-title_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Type title here and click edit to add content\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"tab-markdown_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.markdown || (depth0 != null ? depth0.markdown : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"markdown","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <button class=\"btn-markdown-edit\" id=\"tab-edit_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Edit</button>\n              <button class=\"btn-page-delete\" id=\"tab-delete_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n            </div>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit-section__sortable-item\">\n              <textarea id=\"bulletin-uri_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.uri || (depth0 != null ? depth0.uri : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uri","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"bulletin-title_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"bulletin-summary_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <button class=\"btn-page-delete\" id=\"bulletin-delete_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n            </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit-section__sortable-item\">\n              <textarea id=\"article-uri_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.uri || (depth0 != null ? depth0.uri : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uri","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"article-title_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"article-summary_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <button class=\"btn-page-delete\" id=\"article-delete_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n            </div>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit-section__sortable-item\">\n              <textarea id=\"dataset-uri_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.uri || (depth0 != null ? depth0.uri : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uri","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"dataset-title_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"dataset-summary_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <button class=\"btn-page-delete\" id=\"dataset-delete_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n            </div>\n";
},"11":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit-section__sortable-item\">\n              <textarea id=\"link-url_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea id=\"link-title_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Paste link here and save\">"
    + alias3(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkText","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <button class=\"btn-page-delete\" id=\"link-delete_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n            </div>\n";
},"13":function(depth0,helpers,partials,data) {
    return "            <div class=\"edit-section__sortable-item\">\n              <textarea></textarea>\n              <button class=\"btn-markdown-edit\">Edit</button>\n              <button class=\"btn-page-delete\">Delete</button>\n            </div>\n";
},"15":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"edit-section__sortable-item\">\n              <textarea id=\"section-title_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Type title here and click edit to add content\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <textarea style=\"display: none;\" id=\"section-markdown_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.markdown || (depth0 != null ? depth0.markdown : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"markdown","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <button class=\"btn-markdown-edit\" id=\"section-edit_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Edit</button>\n              <button class=\"btn-page-delete\" id=\"section-delete_"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<section class=\"workspace-edit\">\n  <div class=\"edit-accordion\">\n\n    <div class=\"edit-section\">\n      <div class=\"edit-section__head\">\n        <h1>Metadata</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"metadata-list\">\n          <p>Title: <textarea class=\"auto-size\" type=\"text\" id=\"title\" cols=\"40\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</textarea></p>\n          <p>Next release: <textarea class=\"auto-size\" type=\"text\" id=\"nextRelease\" cols=\"20\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1((depth0 != null ? depth0.nextRelease : depth0), depth0))
    + "</textarea></p>\n          <p>Contact name: <textarea class=\"auto-size\" type=\"text\" id=\"contactName\" cols=\"20\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.name : stack1), depth0))
    + "</textarea></p>\n          <p>Contact email: <textarea class=\"auto-size\" type=\"text\" id=\"contactEmail\" cols=\"30\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.email : stack1), depth0))
    + "</textarea></p>\n          <p>Summary: <textarea class=\"auto-size\" type=\"text\" id=\"summary\" cols=\"40\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1((depth0 != null ? depth0.summary : depth0), depth0))
    + "</textarea></p>\n          <p>National statistic: <input type=\"checkbox\" name=\"natStat\" value=\"yes\" /> Yes </p>\n          <p id=\"headline1-p\">Headline 1: <textarea class=\"auto-size\" type=\"text\" id=\"headline1\" cols=\"40\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1((depth0 != null ? depth0.headline1 : depth0), depth0))
    + "</textarea></p>\n          <p id=\"headline2-p\">Headline 2: <textarea class=\"auto-size\" type=\"text\" id=\"headline2\" cols=\"40\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1((depth0 != null ? depth0.headline2 : depth0), depth0))
    + "</textarea></p>\n          <p id=\"headline3-p\">Headline 3: <textarea class=\"auto-size\" type=\"text\" id=\"headline3\" cols=\"40\" style=\"box-sizing: border-box; min-height: 31px;\">"
    + alias2(alias1((depth0 != null ? depth0.headline3 : depth0), depth0))
    + "</textarea></p>\n          <p id=\"description-p\">Description: <textarea class=\"auto-size\" type=\"text\" id=\"description\" cols=\"40\" style=\"box-sizing: border-box; min-height: 31px;\"></textarea></p>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"edit-section\">\n      <div class=\"edit-section__head\">\n        <h1>Correction</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.correction : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"text-center\">\n          <button class=\"btn-add-section\" id=\"addCorrection\">Add correction</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\" id=\"collapsible\">\n      <div class=\"edit-section__head\">\n        <h1>Collapsible section</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-tabs\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.accordion : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\" id=\"addTab\">Add collapsible</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\" id=\"relBulletin\">\n      <div class=\"edit-section__head\">\n        <h1>Related bulletin</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-related\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.relatedBulletins : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\" id=\"addBulletin\">Add bulletin</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\" id=\"relArticle\">\n      <div class=\"edit-section__head\">\n        <h1>Related article</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-related\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.relatedArticles : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\" id=\"addArticle\">Add article</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\" id=\"relDataset\">\n      <div class=\"edit-section__head\">\n        <h1>Related dataset</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-related\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.relatedDatasets : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\" id=\"addDataset\">Add dataset</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\" id=\"extLink\">\n      <div class=\"edit-section__head\">\n        <h1>External links</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-example\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.externalLinks : depth0),{"name":"each","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\" id=\"addLink\">Add external link</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\" id=\"usedIn\">\n      <div class=\"edit-section__head\">\n        <h1>Used in</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-example\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.usedIn : depth0),{"name":"each","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\">Add section</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\" id=\"download\">\n      <div class=\"edit-section__head\">\n        <h1>Download</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-example\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.usedIn : depth0),{"name":"each","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\">Add section</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"edit-section\">\n      <div class=\"edit-section__head\">\n        <h1>Content</h1>\n        <p>Description</p>\n      </div>\n      <div class=\"edit-section__content\">\n        <div id=\"sortable-sections\" class=\"edit-section__sortable\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sections : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"text-center\">\n          <button class=\"btn-add-section\" id=\"addSection\">Add section</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>";
},"useData":true});
templates['workSpace'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"panel col col--1 workspace-nav\">\n  <ul class=\"nav nav--workspace\">\n    <li id=\"browse\" class=\"selected\">Browse</li>\n    <li id=\"create\">Create</li>\n    <li id=\"edit\">Edit</li>\n    <li id=\"review\">Review</li>\n  </ul>\n</nav>\n<div class=\"panel col col--4 workspace-menu\" style=\"overflow-y: scroll;\">\n\n</div>\n<section class=\"panel col col--7 workspace-browser\">\n  <div class=\"browser\">\n    <div class=\"addressbar\">\n      <button class=\"browser-btn-back\">&lt;</button>\n      <button class=\"browser-btn-forward\">&gt;</button>\n      <label for=\"browser-location\" class=\"browser-location-label\">Preview URL</label><input id=\"browser-location\" class=\"browser-location\" type=\"text\" value=\"\">\n      <button class=\"browser-btn-mobile\">Mobile</button>\n    </div>\n    <iframe id=\"iframe\" src=\"http://localhost:8081/index.html#!/"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\"></iframe>\n  </div>\n</section>\n";
},"useData":true});
})();