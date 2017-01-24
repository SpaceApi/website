var Validator = (function() {
  'use strict';
  var validator_target = 'http://localhost:6767/';
  var textarea_selector = '#validator_content';
  var url_selector = '#version';
  var url_input = '#input_url';
  var submit_selector = '#submit_validate';
  var url_submit_selector = '#submit_validate_url';
  var log_selector = '#log';
  var banner_selector = '#banner'

  var req = undefined;
  var log = document.querySelector(log_selector);
  var banner = document.querySelector(banner_selector);

  document.querySelector(submit_selector).onclick = validate;
  document.querySelector(url_submit_selector).onclick = validate_url;


  return {
    req: function() { return req; },
    validate: validate,
    getValue: getValue,
  }

  function validate(ev) {
    banner.className = 'processing';
    ev.preventDefault();
    offlineCheck();

    var content = getValue(textarea_selector);

    prepareNewRequest();

    req.send(JSON.stringify({ schema: content, }));
  }

  /**
   * Fetch from remote SpaceAPI endpoint
   */
  function validate_url(ev) {
    banner.className = 'fetching';
    ev.preventDefault();
    offlineCheck();

    var url = getValue(url_input);
    if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1) {
      appendLog('Invalid URL: '+url);
      setBanner('ERROR', 'Invalid URL: '+url);
    } else {
      document.querySelector(textarea_selector).innerHTML = 'Fetching ...';

      var req = new Request(url, {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'no-cache',
      });

      fetch(req)
        .then(function(response) {
          return response.text();
        })
        .then(function(response) {
          appendLog('fetched: ' + response);
          // store response into the textarea, FIXME this is currently exploitable, paste a HTML page
          document.querySelector(textarea_selector).value = response;
          validate(ev);
        })
        .catch(function(error) {
          var message = error.message;
          if (req.bodyUsed) {
            appendLog('fetch parse fail: ' + message);
          } else {
            message = 'is <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS" target="_blank">CORS</a> enabled? Check the iFrame for content\n' + message;

            appendLog('fetch fail: ' + message);

            BackupIframe.tryUrl(url);
          }
          setBanner('ERROR', message);
        });
    }
  }

  /**
   * Get trimmed value of <input ...> or <textarea>
   */
  function getValue(selector) {
    var element = document.querySelector(selector);

    return (element.value || element.innerHTML || '').trim();
  }

  function prepareNewRequest() {
    req = new XMLHttpRequest();

    req.open('POST', validator_target, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onreadystatechange = function(event) {
      //console.log(event);
      appendLog(req.responseText);

      if (req.readyState === 4) {
        if (req.status === 0) {
          appendLog('Unable to connect to validator "'+validator_target+'". Is it online?');

          banner.className = 'ERROR';
        } else {
          var data = JSON.parse(req.responseText);

          setBanner(data.status, status.message);
        }
      }
    };
  }

  function appendLog(text) {
    log.innerHTML += text + '\n';
  }

  function offlineCheck() {
    if (!navigator.onLine) {
      appendLog('You are offline!');
      banner.className = '';

      throw "offline";
    }
  }

  function setBanner(status, message) {
    banner.className = status;

    banner.querySelector('#'+status).innerHTML = status +'\n'+ message;
  }
})();


var BackupIframe = (function() {
  'use strict';
  var root = document.querySelector('#backup_iframe');
  var iframe = root.querySelector('iframe');

  root.style.display = 'none';

  return {
    tryUrl: tryUrl,
  }

  function tryUrl(url) {
    root.style.display = 'block';

    iframe.src = '#';

    root.querySelector('pre').innerHTML = url;

    setTimeout(function() {
      iframe.src = url;
    }, 200);
  }
})();
