// ==UserScript==
// @name no-friends
// @version 1.1
// @namespace http://stuartdb.com
// @author Stuart Baker
// @description Removes the buddy list from the usercp page on SA.
// @include *://forums.somethingawful.com/usercp*
// @downloadURL https://github.com/stuartdb/no-friends/raw/master/no-friends.user.js
// @run-at document-end
// ==/UserScript==

function remove_buddy_list() {
    "use strict";
    var buddy_list;

    buddy_list = document.getElementById("buddylist");
    buddy_list.parentNode.removeChild(buddy_list);
}

remove_buddy_list();
