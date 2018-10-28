/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  function getDayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  fetch('https://developers.youversionapi.com/1.0/verse_of_the_day/' + getDayOfYear(), {
    headers: {
      'X-YouVersion-Developer-Token': '<your_token>',
      'Accept-Language': 'en',
      Accept: 'application/json'
    }
  })
  .then(function(result) {
    return result.json();
  })
  .then(function(response) {
    if (response) {
      try {
        var ref = document.getElementsByClassName('reference')[0].children[0];
        ref.innerHTML = response.verse.human_reference; // + " " + response.version.abbreviation;
        ref.setAttribute('href', response.verse.url);
        var verse = document.getElementsByClassName('verse')[0];
        verse.innerHTML = response.verse.text;
        document.getElementById('wrapper').setAttribute('style', '');
      } catch (e) {
        console.error("An error occurred with the verse of the day snippet--", e);
      }
    }
  });


})();
