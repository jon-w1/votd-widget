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

  var response = {
    "day": 1,
    "image": {
      "attribution": "YouVersion",
      "id": 42
    },
    "verse": {
      "human_reference": "John 3:16",
      "text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      "url": "https://www.bible.com/bible/1/JHN.3.16",
      "usfms": [
        "JHN.3.16"
      ]
    },
    "version": {
      "abbreviation": "KJV",
      "copyright": "Crown Copyright in UK",
      "title": "King James Version"
    }
  };

  if (response) {
    try {
      var ref = document.getElementsByClassName('reference')[0].children[0];
      ref.innerHTML = response.verse.human_reference + " " + response.version.abbreviation;
      ref.setAttribute('href', response.verse.url);
      var verse = document.getElementsByClassName('verse')[0];
      verse.innerHTML = response.verse.text;
      document.getElementById('wrapper').setAttribute('style', '');
    } catch (e) {
      console.error("An error occurred with the verse of the day snippet--", e);
    }
  }
})();
