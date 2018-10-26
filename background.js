// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    // var widb    = 'what is the difference between';
    // var hwtdo   = 'how to do'
    // var hwshido = 'how should i'
    var hwdiwrk = 'how does ' + text + ' work?'
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(hwdiwrk);
    chrome.tabs.create({ url: newURL });
  });
